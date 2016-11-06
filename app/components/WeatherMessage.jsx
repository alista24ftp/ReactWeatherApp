var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h3>Temperature of {location} is {temp} degrees Celcius.</h3>
  );
};

module.exports = WeatherMessage;
