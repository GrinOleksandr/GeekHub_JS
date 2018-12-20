document.getElementById("form_address").addEventListener("submit", getAddress);
let cityName;
function getAddress(e) {
    e.preventDefault();
    var addressString = document.getElementById('text_address').value.replace(' ', '+');
    if (addressString.length) {
        var xhrString = "https://maps.googleapis.com/maps/api/geocode/json?address=" + addressString + "&key=AIzaSyAX9V8Y70UEAV3u5JeG5ec02Jwx9m7Jqg4";
        var xhr = new XMLHttpRequest();

        xhr.open('GET', xhrString, true);



        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                var receivedData = JSON.parse(xhr.responseText);
                var location = receivedData.results[0].geometry.location;
                var locationLat = receivedData.results[0].geometry.location.lat;
                var locationLon = receivedData.results[0].geometry.location.lng;
                var recievedAddressArray = receivedData.results[0].address_components;

                //searching for city name in every element
                for (let i = 0; i < recievedAddressArray.length; i++) {
                    if (findCityName(recievedAddressArray[i].types)) {
                       cityName = recievedAddressArray[i].long_name;
                    }
                }
                drawMap(location);

                getCurrentWeather(cityName, locationLat, locationLon);
            }
        };
        xhr.send();
    }
}

function getCurrentWeather(someCity, lat, lon) {
    var xhr2String = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&lang=ua&units=metric&APPID=dc8da009b89ec3fdee08fb87065e63a1";
    var xhr2 = new XMLHttpRequest();

    xhr2.open('GET', xhr2String, true);

    xhr2.onreadystatechange = function () {
        if (xhr2.readyState === 4) {
            let currentWeatherData = JSON.parse(xhr2.responseText);

            let weatherConditionsArray = [];
            for (let i = 0; i < currentWeatherData.weather.length; i++) {
                weatherConditionsArray.push(currentWeatherData.weather[i].description);
            }
            let weatherConditions = weatherConditionsArray.join(", ");

            let weatherTemperature = currentWeatherData.main.temp;
            let weatherHumidity = currentWeatherData.main.humidity;
            let weatherPressure = currentWeatherData.main.pressure;
            let weatherWindSpeed = currentWeatherData.wind.speed;

            let weatherTitleOutput = document.createElement("p");
            weatherTitleOutput.innerText = "Погода зараз в мiстi: " + cityName;


            let weatherConditionsOutput = document.createElement("p");
            weatherConditionsOutput.innerText = "Погоднi умови: " + weatherConditions + ".";

            let temperatureOutput = document.createElement("p");
            temperatureOutput.innerText = "Температура: " + weatherTemperature + "℃.";

            let humidityOutput = document.createElement("p");
            humidityOutput.innerText = "Вологiсть повiтря: " + weatherHumidity + ".";

            let pressureOutput = document.createElement("p");
            pressureOutput.innerText = "Атмосферний тиск: " + Math.round(weatherPressure * 0.7500637554192) + "мм.";

            let windOutput = document.createElement("p");
            windOutput.innerText = "Вiтер: " + weatherWindSpeed + "(м/с.)";

            let weatherDiv = document.getElementById("weather-div");
            weatherDiv.innerHTML = "";
            weatherDiv.style.visibility = "hidden";
            weatherDiv.style.opacity = "0";

            weatherDiv.appendChild(weatherTitleOutput);
            weatherDiv.appendChild(weatherConditionsOutput);
            weatherDiv.appendChild(temperatureOutput);
            weatherDiv.appendChild(humidityOutput);
            weatherDiv.appendChild(pressureOutput);
            weatherDiv.appendChild(windOutput);

            weatherDiv.style.visibility = "visible";
            weatherDiv.style.opacity = "1";
        }
    };
    xhr2.send();
}

function findCityName(someArray) {            //check if an element is a city
    if (someArray.find(function (element) {
        return element === "locality"
    })) {
        return true;
    }
}

function drawMap(latLng){
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(latLng.lat, latLng.lng),
        map: map,
        title: document.getElementById('text_address').value
    });
    var markerPosition = marker.getPosition(); // returns LatLng object
    map.setCenter(markerPosition);
}
var map;
initMap = function() {
    map = new google.maps.Map(document.getElementById('map'), {
        center:  {lat: 49.444433, lng: 32.059767},
        zoom: 15
    });
};