const apiKey = '7292a6f5959075b5f88cabe170b8b095'
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=12.9716&lon=77.5946&units=metric&q='
const background = ['images\clear_vid.mov', 'images\dark_clouds_vids.mp4', 'images\drizzle_vid2.mp4', 'images\storm_vid.mp4']

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

    // To change main icon
    const main_weather_icon = ['images/sun.png', 'images/main-icon.png', 'images/rain.png','images/thunderstorm.png']

    // To Change background
    if(rain_value < 25){
        document.querySelector(".myVideo").src="images/clear_vid.mov";
        document.querySelector(".myVideomob").src="images/mob_clear.jpg";
        document.querySelector(".main_weather_icon").src = main_weather_icon[0];
    }
    if(rain_value > 25 && rain_value < 50){
        document.querySelector(".myVideo").src="images/dark_clouds_vids.mp4";
        document.querySelector(".myVideomob").src="images/mob_dark.jpg";
        document.querySelector(".main_weather_icon").src = main_weather_icon[1];
    }
    if(rain_value > 50 && rain_value < 75){
        document.querySelector(".myVideo").src="images/drizzle_vid2.mp4";
        document.querySelector(".myVideomob").src="images/mob_driz.jpg";
        document.querySelector(".main_weather_icon").src = main_weather_icon[2];
    }
    if(rain_value > 75 && rain_value < 100){
        document.querySelector(".myVideo").src="images/storm_vid.mp4";
        document.querySelector(".myVideomob").src="images/mob_storm.jpg";
        document.querySelector(".main_weather_icon").src = main_weather_icon[3];
    }

    // To change future forecast
    const fforcasticon = ['images/sun.png','images/main-icon.png','images/rain.png','images/thunderstorm.png']

    const tomo = date.getDate() + 1;
    document.querySelector('.firsttxt').innerHTML = tomo +' '+ months[date.getMonth()];
    const fforcasticon_numb1 = ((Math.random() * (3-0+1)) + 0).toFixed(0);
    if (fforcasticon_numb1 == 4) {
        document.querySelector('.first').src = "images/sun.png";        
    } else {
        document.querySelector('.first').src = fforcasticon[fforcasticon_numb1];
    }

    const theyafter = date.getDate() + 2;
    document.querySelector('.secondtxt').innerHTML = theyafter +' '+ months[date.getMonth()];
    const fforcasticon_numb2 = ((Math.random() * (3-0+1)) + 0).toFixed(0);
    if (fforcasticon_numb2 == 4) {
        document.querySelector('.second').src = "images/sun.png";
    } else {
        document.querySelector('.second').src = fforcasticon[fforcasticon_numb2];
    }

    const theytheyafter = date.getDate() + 3;
    document.querySelector('.thirdtxt').innerHTML = theytheyafter +' '+ months[date.getMonth()];
    const fforcasticon_numb3 = ((Math.random() * (3-0+1)) + 0).toFixed(0);
    if (fforcasticon_numb3 == 4) {
        document.querySelector('.third').src = "images/sun.png";
    } else {
        document.querySelector('.third').src = fforcasticon[fforcasticon_numb3];
    }

    
    const theytheytheyafter = date.getDate() + 4;
    document.querySelector('.fourthtxt').innerHTML = theytheytheyafter +' '+ months[date.getMonth()];
    const fforcasticon_numb4 = ((Math.random() * (3-0+1)) + 0).toFixed(0);
    if (fforcasticon_numb4 == 4) {
        document.querySelector('.fourth').src = "images/sun.png";
    } else {
        document.querySelector('.fourth').src = fforcasticon[fforcasticon_numb4];
    }
}

