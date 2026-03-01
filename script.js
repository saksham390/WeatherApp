document.addEventListener('DOMContenetLoaded',()=>{
    const cityInput= document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("temperature-display");
    const descriptionDisplay = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");








    const API_KEY="1b8cd525cad93dbd82e219189895d369";


getWeatherBtn.addEventListener('click',async ()=>{
    const city = cityInput.ariaValueMax.trim()
    if(!city) return;


    try{
       const weatherData = await fetchWeatherData(city)
       displayWeatherData(weatherData)
    }catch(error){
        showError()
    }





})



async function fetchWeatherData(city){
    const url='https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}'
    const response=fetch(url);
    console.log(typeof response);
    console.log("RESPONSE",response);
    if(!response.ok){
        throw new Error("City not found");

    }
    const data=await response.json();
    return data;

}

function displayWeatherData(data){
    console.log(data);
    const {name,main,weather}=data;
    cityNameDisplay.textContent=name;
    temperatureDisplay.textContent='Temperature:${main.temp}';
    descriptionDisplay.textContent='Weather:${weather[0].description}';

    weatherInfo.classList.remove("hidden");
    weatherInfo.classList.add("hidden");
   

}

function showError(){
    weather.Info.classList.remove('hidden');
    errorMessage.classList.add('hidden');
}
})
