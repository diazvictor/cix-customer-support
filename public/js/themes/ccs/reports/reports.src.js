//import		Chartist	from "chartist";
import      '../common/ccs.js';
import      '../common/navbar.js';
import      '../common/sidebar.js';

let title = document.querySelector(".navbar #title");

let sidenavCollapse = document.querySelector(".sidenav div[data-collapse=reports]");
sidenavCollapse.classList.add("is-collapsible");
sidenavCollapse.classList.add("is-active");

let sidenav;

if (window.location.pathname == "/reports/") {
	sidenav = document.querySelector(".sidenav a[data-item=reports]");
	title.innerText = "Mis Reportes";
} else if (window.location.pathname == "/reports/new/") {
	sidenav = document.querySelector(".sidenav a[data-item=reports-new]");
	title.innerText = "Nuevo Reporte";
} else {
	sidenav = document.querySelector(".sidenav a[data-item=reports-reports]");
	title.innerText = "Mi Reporte";
}

sidenav.classList.add("is-active");

const toggleContact = document.getElementById("toggle-contact");
const toggleItems = document.querySelectorAll(".toggle-contact");

toggleContact.addEventListener('change', (e) => {
	toggleItems.forEach((item) => {
		if (e.target.checked) {
			item.style.setProperty('display', 'flex', 'important');
		} else {
			item.style.setProperty('display', 'none', 'important');
		}
	});
})

const filebutton = document.querySelector(".file");
let fileinput = filebutton.querySelector("label input[type=file]");
let filename = document.querySelector(".file input[type=text]");
	
fileinput.addEventListener("change", () => {
	filename.value = fileinput.files[0].name;
});

