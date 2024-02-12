const apiKey ="43b037000291dccb48e520d7f3cf7480";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const watherIcon=document.querySelector(".wather-icon");
const visible=document.querySelector(".wather");
const error= document.querySelector(".erorr");


async function chakeWather(city){
    const respons = await fetch(apiUrl + city +`&appid=${apiKey}`);
    if(respons.status==404){
        error.style.display="block"
        visible.style.display="none"

    }
    else{

    
    var data =await respons.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +" km/h";

    if(data.weather[0].main=="Clouds"){
        watherIcon.src="photo/clouds.png"; 

    }
    else if(data.weather[0].main=="Clear"){
        watherIcon.src="photo/clear.png"; 

    }
    else if(data.weather[0].main=="Atmosphere"){
        watherIcon.src="photo/mist.png"; 

    }
    else if(data.weather[0].main=="Rain"){
        watherIcon.src="photo/rain.png"; 

    }

    else if(data.weather[0].main=="Drizzle"){
        watherIcon.src="photo/drizzle.png"; 

    }

    else if (data.weather[0].main=="Snow"){
        watherIcon.src="photo/snow.png"; 

    }
  
    error.style.display="none"
    visible.style.display="block"
}

}

searchBtn.addEventListener("click", ()=>{
    chakeWather(searchBox.value);




})




