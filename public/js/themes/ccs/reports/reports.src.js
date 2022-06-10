//import		Chartist	from "chartist";
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
	title.innerText = "Mis Reportes";
} else if (window.location.pathname == "/new") {
	sidenav = document.querySelector(".sidenav a[data-item=reports-new]");
	title.innerText = "Nuevo Reporte";
} else {
	sidenav = document.querySelector(".sidenav a[data-item=reports-reports]");
	title.innerText = "Mi Reporte";
}

sidenav.classList.add("is-active");
