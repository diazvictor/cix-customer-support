// import      '../common/ccs.js';
import      '../common/dropdown.js';
import      '../common/navbar.js';
import      '../common/sidebar.js';

let title = document.querySelector(".navbar #title");

let sidenavCollapse = document.querySelector(".sidenav div[data-collapse=payments]");
sidenavCollapse.classList.add("is-collapsible");
sidenavCollapse.classList.add("is-active");

let sidenav;

if (window.location.pathname == "/payments/") {
	sidenav = document.querySelector(".sidenav a[data-item=payments]");
	title.innerText = "Mis pagos";
} else {
	sidenav = document.querySelector(".sidenav a[data-item=payments-new]");
	title.innerText = "Reportar un pago";
}

sidenav.classList.add("is-active");

let panels = document.querySelectorAll(".panel-item");

panels.forEach((panel) => {
	let showPanel = panel.querySelector(".show-panel");

	showPanel.addEventListener("click", (e) => {
		panel.classList.toggle("is-collapsible");
	});
});

let reveals = document.querySelectorAll(".reveal")
reveals.forEach((reveal) => {
	let revealHead = reveal.querySelector(".head");

	revealHead.addEventListener("click", (e) => {
		reveal.classList.toggle("is-active");
	});
});
