const place = require('./place/place');
const wather = require('./wather/wather');
const argv = require('yargs').option({
    direction: {
        alias: 'd',
        desc: 'city name',
        demand: true
    }
}).argv;

const getInfo = async(direction) => {
    try {
        let coors = await place.getPlaceLatLng(direction);
        let temp = await wather.getWather(coors.lag, coors.lng);
        return `the temperature in ${ coors.direction } is ${ temp }`;

    } catch (e) {
        return `No se pudo determinar el clma en ${ direction }`;
    }
};

getInfo(argv.direction)
    .then(message => console.log(message))
    .catch(e => console.log(e));

// place.getPlaceLatLng(argv.direction)
//     .then(resp => {
//         wather.getWather(resp.lag, resp.lng)
//             .then(response => {
//                 console.log(response);
//             })
//             .catch(e => console.log(e));
//     })
//     .catch(e => {
//         console.log(e);
//     });