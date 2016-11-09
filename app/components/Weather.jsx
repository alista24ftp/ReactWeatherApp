var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

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
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    }, function(e){
      that.setState({
        isLoading: false,
        location: undefined,
        temp: undefined,
        errorMessage: e.message
      });
    });
  },

  componentDidMount: function(){
    var location = this.props.location.query.location;
    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },

  componentWillReceiveProps: function(newProps){
    var location = newProps.location.query.location;
    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },

  render: function(){
    var {isLoading, location, temp, errorMessage} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3 className="text-center">Fetching weather...</h3>;
      }else if(temp != undefined && location){
        // if valid temp and location exist:
        return <WeatherMessage location={location} temp={temp}/>;
      }else{
        return <h3></h3>;
      }
    }

    function renderError(){
      if(typeof errorMessage === 'string'){
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
