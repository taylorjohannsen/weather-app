import React, { Component } from 'react';
import './index.css';

class App extends Component {

  async getWeather(event) {
    if(event.key === 'Enter'){
      const userInput = document.querySelector('#userInput');

      const tempDom = document.querySelector('#Tempature');
      const iconDom = document.querySelector('#Icon');
      const condDom = document.querySelector('#Condition');
      const locationDom = document.querySelector('#Location');
  
      const response = await fetch(('https://api.apixu.com/v1/current.json?key=ce6e8e6951e141c092c204025190401&q=' + userInput.value), {mode: 'cors'});
      const weatherData = await response.json();
      console.log(weatherData);
  
      const temp = weatherData.current.temp_f;
      const icon = weatherData.current.condition.icon;
      const cond = weatherData.current.condition.text;
      const location = weatherData.location.name;
      const country = weatherData.location.country;
  
      tempDom.innerText = temp + ' ℉';
      iconDom.src = icon;
      condDom.innerText = cond;
      locationDom.innerText = location + ', ' + country;

    }
  }

  render() {
    return (
      <div>
        <div className="weatherTitle">weather.</div>
        <div className="flex">
          <div className="weatherCont">
            <input onKeyPress={this.getWeather} autoComplete='none' type='text' id="userInput" placeholder='City or Zipcode..'></input>
            <div className="condCont">
              <img alt="weather icon" id="Icon" href=""></img>
              <div id="Condition"></div>
            </div>    
            <div id="Tempature"></div>
            <div id="Location"></div>
            <div id="Country"></div>
          </div>
        </div>
        <div className="me">made by - taylor johannsen</div>
      </div>
    );
  }
};

window.onload = async function previewData() {

  const tempDom = document.querySelector('#Tempature');
  const iconDom = document.querySelector('#Icon');
  const condDom = document.querySelector('#Condition');
  const locationDom = document.querySelector('#Location');


  const response = await fetch(('https://api.apixu.com/v1/current.json?key=ce6e8e6951e141c092c204025190401&q=Boston' ), {mode: 'cors'});
  const weatherData = await response.json();
  
  const temp = weatherData.current.temp_f;
  const icon = weatherData.current.condition.icon;
  const cond = weatherData.current.condition.text;
  const location = weatherData.location.name;
  const country = weatherData.location.country;

  tempDom.innerText = temp + ' ℉';
  iconDom.src = icon;
  condDom.innerText = cond;
  locationDom.innerText = location + ', ' + country;

}

export default App;
