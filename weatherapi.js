require('dotenv').config();

var apiKey = process.env.WEATHER_API_KEY;

function handleCityName() {
    let city = "Anaheim";
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;
    let fetchRes = fetch(url);

    fetchRes.then(res => {
        return res.json();
    }).then(data => {
        handleWeatherData(data);
    }).catch(error => {
        console.log(error);
    });
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

    console.log(`Name: ${cityName}\n
                 Humidity: ${humidity}%\n
                 Wind Speed: ${wind} mph\n
                 Pressure: ${pressure} hPa\n
                 Temperature ${temp}\n
                 Low: ${lowTemp}\n
                 High: ${highTemp}\n
                 Icon: ${iconURL}`);
}


handleCityName();