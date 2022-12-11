// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 5);

// Coordinates for each point to be used in the line.
let line = [
  [37.6213, -122.3790],
  [30.2672, -97.7431],
  [43.6777, -79.6248],
  [40.6413, -73.7781],
];

// Define a symbol using SVG path notation, with an opacity of 1.
const lineSymbol = {
  path: "M 0,-1 0,1",
  strokeOpacity: 1,
  scale: 4,
};

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: '#33C4FF',
  weight: '4',
  dashArray: '7, 7',
  dashOffset: '3'
}).addTo(map);

// // Get data from cities.js
// let cityData = cities;

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//       radius: city.population/100000,
//       fillColor: '#ffa533',
//       color: '#ff9333',
//       weight: 4
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population: " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);