function formatDate(timestamp) {
let date= new Date(timestamp);
let hours= date.getHours();
let minutes=date.getMinutes();
if (minutes<10) {
    minutes=`0${minutes}`;
    if (hours<10) {
    hours=`0${hours}`;
}
let days=
["Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"];
let day=days[date.getDay()];
return `${day} ${hours} ${minutes}`;
}
 

}



function displayTemperature(response){
    
    let temperatureElement=document.querySelector("#temperature")
    let cityElement=document.querySelector("#city")
    let descriptionElement=document.querySelector("#description")
    let humidityElement=document.querySelector("#humidity")
    let windElement=document.querySelector("#wind")
    let dateElement=document.querySelector("#date")
    let iconElement=document.querySelector("#icon")
    
    
    temperatureElement.innerHTML= Math.round(response.data.main.temp);
    cityElement.innerHTML=response.data.name;
    descriptionElement.innerHTML=response.data.weather[0].description;
    humidityElement.innerHTML=response.data.main.humidity;
    windElement.innerHTML=Math.round(response.data.wind.speed);
    dateElement.innerHTML= formatDate( response.data.dt * 1000);
    iconElement.setAttribute("src",`https://openweathermap.org/img/wn/${response.data.weather[0].icon}/10d@2x.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description);
}
function search(city)
let apiKey = "886fed717cabd3da01be3c4d6805a9d6";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=$(city)&appid=886fed717cabd3da01be3c4d6805a9d6&units=metric`
axios.get(apiUrl).then(displayTemperature);

function handleSubmit(event){
    event.preventDefault();
    let cityInputElement= document.querySelector("#city-input");
    search(cityInputElement.value)
    console.log(cityInputElement.value);

}
search("douala")

let form =document.querySelector("search-form");
form.addEventListener("submit", handleSubmit);