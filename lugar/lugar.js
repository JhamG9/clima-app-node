const axios = require('axios');

const getLugarLatLng = async (dir) => {
    const encodedUrl = encodeURI(dir);
    console.log(encodedUrl)


    const instance = axios.create({
        baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=' + encodedUrl,
        headers: { 'X-RapidAPI-Key': '175f5dae33mshf1f1e4b6935e904p1f35dfjsn67f237db9166' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error('No hay resultados para '+dir);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    

    return {
        direccion, 
        lat,
        lng
    }
}

module.exports ={
    getLugarLatLng
}
