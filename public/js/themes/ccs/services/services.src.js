// import      '../common/ccs.js';
import		"leaflet";
import      '../common/navbar.js';
import      '../common/sidebar.js';
import      '../common/dropdown.js';
import      '../common/steps.js';
import      '../common/tabs.js';

/*Ejemplo del mapa*/
let cities = L.layerGroup();

let mLittleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.').addTo(cities);
let mDenver = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.').addTo(cities);
let mAurora = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.').addTo(cities);
let mGolden = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.').addTo(cities);

let mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
let mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

let grayscale = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
let streets = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});

let map = L.map('mapid', {
    center: [9.742531,-63.149517],
    zoom: 10,
    layers: [grayscale, cities]
});

let baseLayers = {
    'Grayscale': grayscale,
    'Streets': streets
};

let overlays = {
    'Cities': cities
};
