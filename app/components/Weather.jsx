var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

  getInitialState: function(){
    return {
      isLoading: false
    };
  },

  handleSearch: function(location){
    var that = this;
    // To pause and debug, use the following:
    // debugger;
    this.setState({
      isLoading: true
    });
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    }, function(errorMessage){
      that.setState({
        isLoading: false,
        location: undefined,
        temp: undefined
      });
      alert(errorMessage);
    });
  },

  render: function(){
    var {isLoading, location, temp} = this.state;
    function renderMessage(){
      if(isLoading){
        return <h3>Fetching weather...</h3>;
      }else if(temp && location){
        // if valid temp and location exist:
        return <WeatherMessage location={location} temp={temp}/>;
      }else{
        return <h3></h3>;
      }
    }
    return (
      <div>
        <h1>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
