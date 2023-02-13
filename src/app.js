function displayTemperature(response){
    console.log(response.data);
    let temperatureElement=document.querySelector("#temperature")
    let cityElement=document.querySelector("#city")
    let descriptionElement=document.querySelector("#description")
    let humidityElement=document.querySelector("#humidity")
    let windElement=document.querySelector("#wind")
    
    
    temperatureElement.innerHTML= Math.round(response.data.main.temp);
    cityElement.innerHTML=response.data.name;
    descriptionElement.innerHTML=response.data.weather[0].description;
    humidityElement.innerHTML=response.data.main[0].humidity;
    windElement.innerHTML=Math.round(response.data.wind.speed);
}

let apiKey = "886fed717cabd3da01be3c4d6805a9d6";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=Douala&appid=886fed717cabd3da01be3c4d6805a9d6&units=metric`
axios.get(apiUrl).then(displayTemperature);