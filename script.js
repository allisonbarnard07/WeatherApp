const api = {
key: "79f2437ad8b3aede178887f5f6a5dc0f",
base: "https://api.openweathermap.org/data/2.5/"
}

const search = document.querySelector('.search-box');
search.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
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
}