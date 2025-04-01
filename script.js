
// const inputBox = document.querySelector('.input-box');
// const searchBtn = document.getElementById('searchBtn');
// const weather_img = document.querySelector('.weather-img');
// const temperature = document.querySelector('.temperature');
// const description = document.querySelector('.description');
// const humidity = document.getElementById('humidity');
// const wind_speed = document.getElementById('wind-speed');

// const location_not_found = document.querySelector('.location-not-found');

// const weather_body = document.querySelector('.weather-body');


// async function checkWeather(city){
//     const api_key = "d90b6f6aa29cf4c5f65a63a7fa3c8e39";
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

//     const weather_data = await fetch(`${url}`).then(response => response.json());


//     if(weather_data.cod === `404`){
//         location_not_found.style.display = "flex";
//         weather_body.style.display = "none";
//         console.log("error");
//         return;
//     }

//     console.log("run");
//     location_not_found.style.display = "none";
//     weather_body.style.display = "flex";
//     temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
//     description.innerHTML = `${weather_data.weather[0].description}`;

//     humidity.innerHTML = `${weather_data.main.humidity}%`;
//     wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


//     switch(weather_data.weather[0].main){
//         case 'Clouds':
//             weather_img.src = "/assets/cloud.png";
//             break;
//         case 'Clear':
//             weather_img.src = "/assets/clear.png";
//             break;
//         case 'Rain':
//             weather_img.src = "/assets/rain.png";
//             break;
//         case 'Mist':
//             weather_img.src = "/assets/mist.png";
//             break;
//         case 'Snow':
//             weather_img.src = "/assets/snow.png";
//             break;

//     }

//     console.log(weather_data);
// }


// searchBtn.addEventListener('click', ()=>{
  
//     checkWeather(inputBox.value);
// });


const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

async function checkWeather(city) {
    const api_key = "d90b6f6aa29cf4c5f65a63a7fa3c8e39";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`;

    try {
        const response = await fetch(url);
        const weather_data = await response.json();
        
        if (weather_data.cod === "404") {
            location_not_found.style.display = "flex";
            weather_body.style.display = "none";
            document.body.style.background = "#000"; // Reset background on error
            console.log("Location not found");
            return;
        }

        location_not_found.style.display = "none";
        weather_body.style.display = "flex";
        temperature.innerHTML = `${Math.round(weather_data.main.temp)}°C`;
        description.innerHTML = `${weather_data.weather[0].description}`;
        humidity.innerHTML = `${weather_data.main.humidity}%`;
        wind_speed.innerHTML = `${weather_data.wind.speed} Km/H`;
        
        // Update background image
        updateBackground(city);

        // Update weather icon
        switch (weather_data.weather[0].main) {
            case 'Clouds':
                weather_img.src = "assets/cloud.png";
                break;
            case 'Clear':
                weather_img.src = "assets/clear.png";
                break;
            case 'Rain':
                weather_img.src = "assets/rain.png";
                break;
            case 'Mist':
                weather_img.src = "assets/mist.png";
                break;
            case 'Snow':
                weather_img.src = "assets/snow.png";
                break;
            default:
                weather_img.src = "assets/default.png";
                break;
        }
    } catch (error) {
        console.error("Error fetching weather data: ", error);
    }
}

async function updateBackground(city) {
    const unsplashAccessKey = "Waed-ygXn92KOQLRIg-cDgEMXxe9EaqFbvNz-sdmVJo"; //  Unsplash API key
    const url = `https://api.unsplash.com/photos/random?query=${encodeURIComponent(city)}&client_id=${unsplashAccessKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.urls && data.urls.regular) {
            document.body.style.background = `url('${data.urls.regular}') no-repeat center center/cover`;
        } else {
            console.error("No image found for this city.");
        }
    } catch (error) {
        console.error("Error fetching background image:", error);
    }
}

searchBtn.addEventListener('click', () => {
    const city = inputBox.value.trim();
    if (city) {
        checkWeather(city);
    }
});



const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');


async function checkWeather(city){
    const api_key = "d90b6f6aa29cf4c5f65a63a7fa3c8e39";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());


    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "/assets/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "/assets/clear.png";
            break;
        case 'Rain':
            weather_img.src = "/assets/rain.png";
            break;
        case 'Mist':
            weather_img.src = "/assets/mist.png";
            break;
        case 'Snow':
            weather_img.src = "/assets/snow.png";
            break;

    }

    console.log(weather_data);
}


searchBtn.addEventListener('click', ()=>{
  
    checkWeather(inputBox.value);
});

