let keyApi = 'c1b5a51b11078eb28092bae141e0efed';
let city = document.querySelector('#search-sity');
let searchBtn = document.querySelector('.weather__search-btn');
let introducedCity = document.querySelector('#weather-city');
let temp = document.querySelector('#weather__data-gr');
let icon = document.querySelector('#weather__data-icon');
//console.log(typeof(keyApi))
searchBtn.addEventListener('click', () => {
    let searchCity = city.value
    //console.log(searchCity);
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=${keyApi}`;

    fetch(url).then(res => {
        return res.json()
    })
    .then(function (data) {
        pushData(data)
    })
    .catch((error) => {
        alert('Ошибка ' + error + '. Введити город правильно')
    })

    function pushData (dataWeather) {
       //console.log(dataWeather);
        introducedCity.innerHTML = dataWeather.name;
        let temp1 = dataWeather.main.temp;
        temp.innerHTML =  Math.ceil(temp1) + `<span class='weather__data-c'>C</span>`;
        icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${dataWeather.weather[0]['icon']}@2x.png">`;
        document.querySelector('.weather__data-pressure').innerHTML = `Давление: ` + dataWeather.main.pressure + ` mph`; 
        document.querySelector('.weather__data-humidity').innerHTML = `Влажность: ` + dataWeather.main.humidity + ` %`;
        document.querySelector('.weather__data-speed').innerHTML = `Скорость ветра: ` + dataWeather.wind.speed + ` м/с`;
        document.querySelector('.weather__data-gust').innerHTML = `Порывы ветра: ` + dataWeather.wind.gust + ` м/с`;
        document.querySelector('.weather__data-clouds').innerHTML = `Облочность: ` + dataWeather.clouds.all + ` %`;
        
        let background = document.querySelector('.weather');
        let idWeather = dataWeather.weather[0].id;
        let clouds = dataWeather.clouds.all;
        if(temp1 >= 10 & idWeather === 800 & clouds < 35){
            background.style.background = 'url(./img/clear.jpg)';
            background.style.backgroundPosition = 'center';
            background.style.backgroundSize = 'cover';
        }else if (temp1 >= 8 & idWeather === 801 & clouds > 70){
            background.style.background = 'url(./img/cloudy-weather.jpg)';
            background.style.backgroundPosition = 'center';
            background.style.backgroundSize = 'cover';
        }else if(temp1 <= 1 & clouds > 70){
            background.style.background = 'url(./img/snow.jpg)';
            background.style.backgroundPosition = 'center';
            background.style.backgroundSize = 'cover';
        }else if (temp1 >= 10 & idWeather === 804 & clouds > 70) {
            background.style.background = 'url(./img/rain.jpeg)';
            background.style.backgroundPosition = 'center';
            background.style.backgroundSize = 'cover';
        }else if (temp1 >= 5 & idWeather === 500 & clouds > 70) {
            background.style.background = 'url(./img/rain.jpeg)';
            background.style.backgroundPosition = 'center';
            background.style.backgroundSize = 'cover';
        }
time ();
    }
    pushData ()
});
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let message = '';
    function time () {
        let time = document.querySelector('#time');
        if (hour <= 6) {
            message = 'Доброе время суток';
        } else if (hour <= 12) {
            message = 'Доброе утро';
        } else if (hour <= 18) {
            message = 'Добрый день';
        } else {
            message = 'Добрый вечер';
        }
        minute = (minute < 10) ? '0' + minute : minute;
        hour = (hour < 10) ? '0' + hour : hour;
        time.innerHTML = message += `  ` + hour + ':' + minute;
    }


// {
//     "coord": {
//         "lon": 37.6156,
//         "lat": 55.7522
//     },
//     "weather": [
//         {
//             "id": 804,
//             "main": "Clouds",
//             "description": "overcast clouds",
//             "icon": "04n"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": -2.79,
//         "feels_like": -6.88,
//         "temp_min": -3.25,
//         "temp_max": -2.71,
//         "pressure": 1001,
//         "humidity": 96,
//         "sea_level": 1001,
//         "grnd_level": 982
//     },
//     "visibility": 9552,
//     "wind": {
//         "speed": 3.03,
//         "deg": 209,
//         "gust": 8.54
//     },
//     "clouds": {
//         "all": 98
//     },
//     "dt": 1643749352,
//     "sys": {
//         "type": 1,
//         "id": 9027,
//         "country": "RU",
//         "sunrise": 1643779322,
//         "sunset": 1643810659
//     },
//     "timezone": 10800,
//     "id": 524901,
//     "name": "Moscow",
//     "cod": 200
// }