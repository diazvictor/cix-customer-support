import	    	       "leaflet";
import 		Chart from "chart.js";
import      '../common/splide.min.js';
import      '../common/navbar.js';
import      '../common/sidebar.js';

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

let baseLayers = {
	'Grayscale': grayscale,
	'Streets': streets
};

let overlays = {
	'Cities': cities
};

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

	var map = L.map('mapid', {
		center: [9.742531,-63.149517],
		zoom: 10,
		layers: [grayscale, cities]
	});

	let tabs = document.querySelectorAll("#tabs .tab-item");
	tabs.forEach((tab) => {
		tab.addEventListener("click", (e) => {
			for (let i = 0; i < tabs.length; i++) {
				tabs[i].classList.remove("is-active");
			}

			let clickedTab = e.currentTarget;
			clickedTab.classList.add("is-active");
			e.preventDefault();

			let panes = document.querySelectorAll("#tabs + .tab-content .tab-pane");
			for (let i = 0; i < panes.length; i++) {
				panes[i].classList.remove("is-active");
			}

			let anchorReference = e.target;
			let activePaneId = anchorReference.dataset.tab;
			let activePane = document.getElementById(activePaneId);
			activePane.classList.add("is-active");
		});
	});

	let buttonOne = document.querySelector("a#link1");
	let buttonTwo = document.querySelector("a#link2");
	let linkOne = document.querySelector("div#link-1");
	let linkTwo = document.querySelector("div#link-2");

	buttonOne.addEventListener("click", (e) => {
		buttonOne.classList.add("is-active");
		buttonTwo.classList.remove("is-active");
		linkOne.style.display = "block";
		linkTwo.style.display = "none";
	});

	buttonTwo.addEventListener("click", (e) => {
		buttonTwo.classList.add("is-active");
		buttonOne.classList.remove("is-active");
		linkTwo.style.display = "block";
		linkOne.style.display = "none";
	});

	let buttonThree = document.querySelector("a#link3");
	let buttonFour = document.querySelector("a#link4");
	let linkThree = document.querySelector("div#link-3");
	let linkFour = document.querySelector("div#link-4");

	buttonThree.addEventListener("click", (e) => {
		buttonThree.classList.add("is-active");
		buttonFour.classList.remove("is-active");
		linkThree.style.display = "block";
		linkFour.style.display = "none";
	});

	buttonFour.addEventListener("click", (e) => {
		buttonFour.classList.add("is-active");
		buttonThree.classList.remove("is-active");
		linkFour.style.display = "block";
		linkThree.style.display = "none";
	});

	new Splide(document.getElementById('slider-link1'), {
		type: "loop",
		width: 936,
		arrows: false,
		perPage: 4,
		focus: "center",
		gap: 20,
		breakpoints: {
			425: {
				width: 300,
				perPage: 1,
			}
		}
	}).mount();

	new Splide(document.getElementById('slider-link2'), {
		type: "loop",
		width: 936,
		arrows: false,
		perPage: 4,
		focus: "center",
		gap: 20,
		breakpoints: {
			425: {
				width: 300,
				perPage: 1,
			}
		}
	}).mount();

	new Splide(document.getElementById('slider-link3'), {
		type: "loop",
		width: 936,
		arrows: false,
		perPage: 4,
		focus: "center",
		gap: 20,
		breakpoints: {
			425: {
				width: 300,
				perPage: 1,
			}
		}
	}).mount();

	new Splide(document.getElementById('slider-link4'), {
		type: "loop",
		width: 936,
		arrows: false,
		perPage: 4,
		focus: "center",
		gap: 20,
		breakpoints: {
			425: {
				width: 300,
				perPage: 1,
			}
		}
	}).mount();

	let unirmeBtn = document.querySelectorAll(".unirme");

	unirmeBtn.forEach((btn) => {
		const info = document.getElementById("info");
		const confirm = document.getElementById("confirm");
		const dataStepFour = document.getElementById("step-segment-4");
		let footConfirm = document.querySelector(".container.new-resquest .box.is-grouped .box .foot");

		btn.addEventListener("click", (e) => {
			info.style.display = "none";
			previousBtn.style.display = "none";
			document.querySelector("#step-4 .hidden-finish").style.display = "none";

			if (!window.matchMedia("(max-width: 425px)").matches) { // If media query matches
				document.getElementById("box-1").style.borderBottom = "none";
				document.getElementById("box-1").style.paddingBottom = 0;
				document.getElementById("box-2").style.paddingBottom = 0;
			} else {
				console.log("Media Query 425px");
			}

			footConfirm.style.borderTop = "none";
			footConfirm.style.paddingTop = 0;

			confirm.style.display = "grid";

			dataStepFour.classList.remove("is-progress");
			dataStepFour.classList.add("is-active");
		});
	});
} else if (window.location.pathname == "/services/res-view/") {
	sidenav = document.querySelector(".sidenav a[data-item=services-requests]");
	title.innerText = "Mis Solicitudes";
} else if (window.location.pathname == "/services/view/") {
	sidenav = document.querySelector(".sidenav a[data-item=services]");
	title.innerText = "Mis Servicios";

	var map = L.map('mapid', {
		center: [9.742531,-63.149517],
		zoom: 10,
		layers: [grayscale, cities]
	});

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
}

sidenav.classList.add("is-active");
