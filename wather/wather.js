const axios = require('axios');
const apiKey = '2ef1c1e16adacab7c079731e92d267b3&units=metric';

const getWather = async(lat, lng) => {
    response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`);
    //console.log(response.data);
    return response.data.main.temp;
}

module.exports = {
    getWather
};