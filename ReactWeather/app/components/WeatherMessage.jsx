import React from 'react';

var WeatherMessage = ({temp, location}) => {
    return (
        <div>
            <h3>It's {temp.toFixed(0)} in {location}</h3>
        </div>
    );
}

export default WeatherMessage;