const apiKey = '7292a6f5959075b5f88cabe170b8b095'
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=12.9716&lon=77.5946&units=metric&q='


// To Search Place

document.addEventListener('keydown', function(event){
    // console.log(event.keyCode)
    if(event.keyCode == 13){
        const search_data = document.querySelector(".search_data").value;
        checkWeather(search_data);
    }
});

document.getElementById("search_btn").addEventListener('click', initiatesearch);
function initiatesearch(){
    const search_data = document.querySelector(".search_data").value;
    // console.log(search_data);
    checkWeather(search_data);
}

// Calling API
async function checkWeather(search_data){
    const response = await fetch(apiURL + search_data + `&appid=${apiKey}`)
    var data = await response.json()

    console.log(data);

    // To Assign Values to div's from API
    // document.querySelector('.main_weather_icon').src = 
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + ' °C';
    document.querySelector(".city").innerHTML = data.name + ', ' + data.sys.country;
    const rain_value = (Math.random() * 100).toFixed(0)
    document.querySelector(".rain_data").innerHTML = rain_value + '%'
    document.querySelector(".humidity_data").innerHTML = data.main.humidity +'%';
    document.querySelector(".pressure_data").innerHTML = data.main.pressure +' hPa';
    document.querySelector(".wind_data").innerHTML = data.wind.speed +' m/s';

    // To fetch Date
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date();
    document.querySelector(".date").innerHTML = days[date.getDay()] +', '+ date.getDate() +' '+ months[date.getMonth()];

    // To Change background
    // if(rain_value <25){
    //     document.querySelector(".container_div").style.backgroundImage="url(images/clear_vid.mov)";
    // }
    // if(rain_value > 25 && rain_value < 50){
    //     document.querySelector(".container_div").style.backgroundImage="url(images/clear_vid.mov)";
    // }
    // if(rain_value > 50 && rain_value < 75){
    //     document.querySelector(".container_div").style.backgroundImage="url(images/clear_vid.mov)";
    // }
    // if(rain_value > 75 && rain_value < 100){
    //     document.querySelector(".container_div").style.backgroundImage="url(images/clear_vid.mov)";
    // }
}

