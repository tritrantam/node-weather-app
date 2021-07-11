const request = require('request');

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2b8ddfc9b859b9717a7d03a1f59c6da6&query='+ lat +','+long;
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!');
        } else if (body.error) {
            callback('Unable to find location. Try another search.');
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like '+ body.current.feelslike + ' degrees out. And the humidity is '+ body.current.humidity+ "%")
        }
    })
}

module.exports = forecast;