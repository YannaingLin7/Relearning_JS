const cities = [
  {
    name : "Yangon",
    population : "6 millions",
    region : "asia",
    isCapital : false,
  },

  {
    name : "Loikaw",
    population : "51 thousands",
    region : "Asia",
    isCapital : false,
  }
];

const convertedJSONString = JSON.stringify(cities);  // <= This process is called "serialization"
localStorage.setItem("cities", convertedJSONString);

const citiesFromLocalStorage = localStorage.getItem("cities");

const citiesAsJsArray = JSON.parse(citiesFromLocalStorage);
console.log("citiesAsJsArray : ", citiesAsJsArray[1].name);