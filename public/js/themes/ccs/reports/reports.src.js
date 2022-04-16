//import		Chartist	from "chartist";
import		Chart	    from "chart.js";
import		map	        from "leaflet";
import      '../common/ccs.js';
import      '../common/navbar.js';
import      '../common/sidebar.js';

let title = document.querySelector(".navbar #title");

let sidenavCollapse = document.querySelector(".sidenav div[data-collapse=reports]");
sidenavCollapse.classList.add("is-collapsible");
sidenavCollapse.classList.add("is-active");

let sidenav;

if (window.location.pathname == "/reports") {
	sidenav = document.querySelector(".sidenav a[data-item=reports]");
	title.innerText = "Mis reportes";
} else {
	sidenav = document.querySelector(".sidenav a[data-item=reports-new]");
	title.innerText = "Realizar un reporte";
}

sidenav.classList.add("is-active");

const filebutton = document.querySelector(".file");
let fileinput = filebutton.querySelector("label input[type=file]");
let filename = document.querySelector(".file input[type=text]");
	
fileinput.addEventListener("change", () => {
	filename.value = fileinput.files[0].name;
});
