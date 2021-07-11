const request = require('request');
//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2b8ddfc9b859b9717a7d03a1f59c6da6&query='+ lat +','+long;
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!');
        } else if (body.error) {
            callback('Unable to find location. Try another search.');
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out.')
        }
    })
}

module.exports = forecast;