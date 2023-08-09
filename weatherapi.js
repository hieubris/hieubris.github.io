require('dotenv').config();
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const jquery = require('jquery')(new jsdom.JSDOM().window);
const $ = jquery;

var apiKey = process.env.WEATHER_API_KEY;

function handleCityName(city) {
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;
    let fetchRes = fetch(url);

    fetchRes.then(res => {
        return res.json();
    }).then(data => {
        handleWeatherData(data);
    }).catch(error => {
        console.log(error);
    });
    console.log('going through first function');
}


function handleWeatherData(data) {

    let lat = data[0]['lat'];
    let lon = data[0]['lon'];

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

    let fetchRes = fetch(url);

    fetchRes.then(res => {
        return res.json();
    }).then(data => {
        handleResult(data);
    }).catch(error => {
        console.log(error);
    });
    console.log('going through second function');
}


function handleResult(data) {
    let cityName = data.name;
    let humidity = data.main['humidity']; // as a %
    let wind = data.wind['speed']; // speed in mph
    let pressure = data.main['pressure']; // atmospheric pressure in hPa
    let temp = data.main['temp']; // current temp in fahrenheit
    let lowTemp = data.main['temp_min']; // lowest temp for the day
    let highTemp = data.main['temp_max']; // highest temp for the day
    let iconURL = `https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`;

    document.getElementById("cityname").innerHTML = cityName;
    document.getElementById("weathericon").innerHTML = iconURL;
    document.getElementById("temp").innerHTML = temp;
    document.getElementById("lowtemp").innerHTML = lowTemp;
    document.getElementById("hightemp").innerHTML = highTemp;
    document.getElementById("humidity").innerHTML = humidity;
    document.getElementById("wind").innerHTML = wind;
    document.getElementById("pressure").innerHTML = pressure;
    console.log('going through final function');
}

function submitForm(formSubmitEvent) {
    console.log('submit event successful')
    formSubmitEvent.preventDefault();
    handleCityName( $('#weatherform').serialize() );
}

$('#weatherform').submit((event) => submitForm(event));
