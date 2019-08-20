const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const getInfo = async (direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${coords.direccion} es de ${temp}.`;
    } catch (e) {
        return 'No se pudo determinar el clima de '+direccion;
    }

}

lugar.getLugarLatLng(argv.direccion).then(res => console.log(res));
clima.getClima('40.419998', '-76.209999').then(res => console.log(res));


getInfo(argv.direccion).then(res =>{
    console.log(res);
}, err =>{
    console.log("Error al ejecutar funcion ",err);
});

