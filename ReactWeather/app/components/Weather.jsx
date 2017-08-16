import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

// http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=81b46d587d200cc1814f1c351408534f

var Weather = React.createClass({
    getInitialState: function(){
        return {
            isLoading: false
        }
    },
    handleSearch: function(location){
        var self = this;
        this.setState({isLoading: true});
        openWeatherMap.getTemp(location).then(function(temp){
            self.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function(errorMessage){
            self.setState({isLoading: false});
            alert(errorMessage)
        })
    },
    render: function(){
        var {isLoading, temp, location} = this.state;

        function renderMessage(){
            if(isLoading){
                return <h3>Fetching weather...</h3>
            } else if(temp && location) {
                 return <WeatherMessage location={location} temp={temp} />
            }
        }

        return (
            <div>
                <h2>Get Weather</h2>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
            
        )
    }
});

module.exports = Weather;
