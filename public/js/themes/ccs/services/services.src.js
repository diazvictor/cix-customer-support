import	    	       "leaflet";
import 		Chart from "chart.js";
import      '../common/navbar.js';
import      '../common/sidebar.js';

let title = document.querySelector(".navbar #title");

let sidenavCollapse = document.querySelector(".sidenav div[data-collapse=services]");
sidenavCollapse.classList.add("is-collapsible");
sidenavCollapse.classList.add("is-active");

let sidenav;

if (window.location.pathname == "/services/") {
	sidenav = document.querySelector(".sidenav a[data-item=services]");
	title.innerText = "Mis Servicios";
} else if (window.location.pathname == "/services/requests/") {
	sidenav = document.querySelector(".sidenav a[data-item=services-requests]");
	title.innerText = "Mis Solicitudes";
} else if (window.location.pathname == "/services/new/") {
	sidenav = document.querySelector(".sidenav a[data-item=services-new]");
	title.innerText = "Nueva Solicitud";
} else if (window.location.pathname == "/services/view/") {
	sidenav = document.querySelector(".sidenav a[data-item=services]");
	title.innerText = "Mis Servicios";
}

sidenav.classList.add("is-active");

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

var map = L.map('mapid', {
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
// Chart
const labels = [
	'Ene', 'Feb', 'Mzo',
	'May', 'Jun', 'Jul',
	'Ago', 'Sep', 'Oct',
	'Nov', 'Dic'
];

const data = {
	labels: labels,
	datasets: [
		{
			label: 'Descarga Mbps',
			// data: [0,1,2,3,4,5,6,7,8,9,10,11,12],
			data: [4, 5, 10, 12, 25, 12, 23, 18, 25, 10, 35],
			backgroundColor: [
				'rgba(230, 60, 31, 0.4)',
				'rgba(230, 60, 31, 0.4)',
				'rgba(230, 60, 31, 0.4)',
				'rgba(230, 60, 31, 0.4)',
				'rgba(230, 60, 31, 0.4)',
				'rgba(230, 60, 31, 0.4)',
				'rgba(230, 60, 31, 0.4)',
				'rgba(230, 60, 31, 0.4)',
				'rgba(230, 60, 31, 0.4)',
				'rgba(230, 60, 31, 0.4)',
				'rgba(230, 60, 31, 0.4)',
			],
			borderColor: []
		},
		{
			label: 'Subida Mbps',
			data: [5, 3, 7, 9, 0.6, 2, 0.3, 15, 0.8, 1, 9],
			backgroundColor: [
				'rgba(230, 60, 31, 1)',
				'rgba(230, 60, 31, 1)',
				'rgba(230, 60, 31, 1)',
				'rgba(230, 60, 31, 1)',
				'rgba(230, 60, 31, 1)',
				'rgba(230, 60, 31, 1)',
				'rgba(230, 60, 31, 1)',
				'rgba(230, 60, 31, 1)',
				'rgba(230, 60, 31, 1)',
				'rgba(230, 60, 31, 1)',
				'rgba(230, 60, 31, 1)',
				'rgba(230, 60, 31, 1)',
			],
			borderColor: []
		}
	]
};

const config = {
	type: 'bar',
	data: data,
	options: {
		scales: {
			y: {
				beginAtZero: true
			}
		}
	},
};

let myChart = new Chart(
	document.getElementById('myChart'),
	config
);

let myChartTwo = new Chart(
	document.getElementById('myChart2'),
	config
);
