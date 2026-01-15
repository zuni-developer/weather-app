   const apiKey = "6a65dd0a39dcf7e5f02371d20072fcd4";
   const apiUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=";
   const inputBox = document.getElementById('city-name-input');
   const searchBtn = document.getElementById('search-btn');
   const date = new Date();
   const toggle = document.getElementById("theme-toggle");

async function checkWeather(cityName){
   const response = await fetch(apiUrl + cityName + `&appid=${apiKey}` );
   let data = await response.json();
   document.getElementById('city-name').innerHTML = data.name;
   document.getElementById('date').innerHTML = date ;
   document.getElementById('temp').innerHTML = Math.round(data.main.temp) +'°' ;
   document.getElementById('weather-status').innerHTML = data.weather[0].main + 'y' ;
   document.getElementById('temp-max').innerHTML = Math.round(data.main.temp_max) ;
   document.getElementById('temp-min').innerHTML = Math.round(data.main.temp_min) ;
   document.getElementById('wind').innerHTML = data.wind.speed + "/h" ;
   document.getElementById('humidity').innerHTML = data.main.humidity + "%" ;
   document.getElementById('visibility').innerHTML = data.visibility + "/h" ;
 }
searchBtn.addEventListener('click', function(){
   checkWeather(inputBox.value);
})
toggle.addEventListener("change", () => {
   if (toggle.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
   } 
   else {
      document.documentElement.setAttribute("data-theme", "light");
   }
});