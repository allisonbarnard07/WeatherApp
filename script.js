const api = {
key: "79f2437ad8b3aede178887f5f6a5dc0f",
base: "https://api.openweathermap.org/data/2.5/"
}

const search = document.querySelector('.search-box');
search.addEventListener('keypress', setQuery);

function setQuery(event) {
  if (event.keyCode == 13) {
    getResults(search.value);
    console.log(search.value);
  }
}

function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
.then(weather => {
    return weather.json();
}).then(displayResults);
}

function displayResults (weather) {
console.log(weather);
let city = document.querySelector('.location .city');
city.innerText = `${weather.name}, ${weather.sys.country}`;


let now = new Date ();
let date = document.querySelector('.location .date');
date.innerText = dateBuilder(now);

let temp = document.querySelector('.current .temp');
temp.innerHTML = `${Math.round(weather.main.temp)}<span>°F</span>`;

let weatherEl = document.querySelector('.current .weather');
weatherEl.innerText = weather.weather[0].main;


let wind = document.querySelector('.current .windspeed');
wind.innerText = weather.wind.speed + " mph";
}
function dateBuilder (db) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = days[db.getDay()];
  let date = db.getDate();
  let month = months[db.getMonth()];
  let year = db.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}