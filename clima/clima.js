const axios = require('axios');

const getClima = async (lat, lon) => {
    const resp = await axios.get('http://api.openweathermap.org/data/2.5/find?lat='+lat+'&lon='+lon+'&cnt=10&appid=600f78a1c9a5399797c663577910a413&units=metric');
    
    return resp.data.list[0].main.temp;

}


module.exports = {
    getClima
}