// import      '../common/ccs.js';
import      '../common/dropdown.js';
import      '../common/navbar.js';
import      '../common/sidebar.js';

let title = document.querySelector(".navbar #title");

let sidenavCollapse = document.querySelector(".sidenav div[data-collapse=payments]");
sidenavCollapse.classList.add("is-collapsible");

let sidenav;

if (window.location.pathname == "/payments") {
	sidenav = document.querySelector(".sidenav a[data-item=payments]");
	title.innerText = "Mis pagos";
} else {
	sidenav = document.querySelector(".sidenav a[data-item=payments-new]");
	title.innerText = "Reportar un pago";
}

sidenav.classList.add("is-active");
