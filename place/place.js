const axios = require('axios');

const getPlaceLatLng = async(direction) => {
    let econdedUrl = encodeURI(direction);
    resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI&address=${ econdedUrl }`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`no hay resultados para la ciudad${direction}`);
    }

    address_components = resp.data.results[0];
    location = address_components.geometry.location;

    return {
        direction: address_components.formatted_address,
        lag: location.lat,
        lng: location.lng
    }
}

module.exports = {
    getPlaceLatLng
};