var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=81b46d587d200cc1814f1c351408534f';

export default {
    getTemp: function(location){
        var encodedLocation = encodeURIComponent(location)
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res){
            debugger;
            if(res.data.cod && res.data.message){
                throw new Error(res.message)
            } else {
                return res.data.main.temp;
            }
        }, function(err){
            throw new Error(err.message);
        });
    }
}