//import		Chartist	from "chartist";
import		Chart	    from "chart.js";
import		map	        from "leaflet";
import      '../common/ccs.js';
import      '../common/accordion.js';
import      '../common/navbar.js';
import      '../common/sidebar.js';

let title = document.querySelector(".navbar #title");

let sidenavCollapse = document.querySelector(".sidenav div[data-collapse=help]");
sidenavCollapse.classList.add("is-collapsible");

let sidenav;

if (window.location.pathname == "/help") {
	sidenav = document.querySelector(".sidenav a[data-item=help]");
	title.innerText = "Asistencia Guiada";
} else {
	sidenav = document.querySelector(".sidenav a[data-item=help-personalized]");
	title.innerText = "Asistencia Personalizada";
}

sidenav.classList.add("is-active");

const toggleDiscussions = document.querySelector(".toggle-discussions");
const discussions = document.querySelector(".discussions");
	
toggleDiscussions.addEventListener("click", () => {
	discussions.classList.toggle("is-active");
});
