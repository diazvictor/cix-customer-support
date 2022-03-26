//import		Chartist	from "chartist";
import		Chart	    from "chart.js";
import		"leaflet";
import      '../common/ccs.js';
import      '../common/navbar.js';
import      '../common/sidebar.js';


/*Ejemplo de la grafica*/
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


//let latlngs2 = [[9.790264,-63.210805]  ,[9.806178,-63.210805] ,[9.806178,-63.191355] ,[9.790264,-63.191355] ,[9.790264,-63.210805]];

//let polygon2 = L.polygon(latlngs2, {color: 'blue'}).addTo(map);
//let circle2 = L.circle(latlngs2, {radius: 2000}).addTo(map);

let latlngs = [
    [
        [[9.742531,-63.149517],[9.757784,-63.149517],[9.757784,-63.126294],[9.742531,-63.126294],[9.742531,-63.149517]]
    ],
    [
        [[9.790264,-63.210805]  ,[9.806178,-63.210805] ,[9.806178,-63.191355] ,[9.790264,-63.191355] ,[9.790264,-63.210805]]
    ],
    [
        [[9.719251,-63.235803] , [9.735911,-63.235803], [9.735911,-63.212659] ,[9.719251,-63.212659], [9.719251,-63.235803]]
    ],
    [
        [[7.460518,-63.316956] ,[9.832129,-63.316956] ,[9.832129,-63.110042],[7.460518,-63.110042],[7.460518,-63.316956]]
    ]
    
];




let polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);





let layerControl = L.control.layers(baseLayers, overlays).addTo(map);



