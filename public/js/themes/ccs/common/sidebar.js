// jshint esversion: 8
/**!
 * @package   CCS
 * @filename  sidebar.js
 * @version   1.0
 * @author    Díaz Urbaneja Víctor Eduardo Diex <diazvictor@tutamail.com>
 * @date      13.07.2021 20:43:05 -04
 */

const body = document.querySelector("body");
let main = document.querySelector(".wrapper");

let sidebar = document.querySelector(".wrapper .sidebar");
let overlay = document.querySelector("#overlay-bg");

let toggleSidebar = document.getElementById("toggle-sidebar");
let closeSidebar = document.getElementById("close-sidebar");

let collapseSidebar = () => {
	sidebar.classList.add("is-close");
	body.classList.remove("not-scroll-y");
	main.classList.remove("not-sidebar");
	overlay.classList.remove("is-active");
};

toggleSidebar.addEventListener("click", () => {
	sidebar.classList.remove("is-close");
	body.classList.add("not-scroll-y");
	main.classList.toggle("not-sidebar");
	overlay.classList.add("is-active");

	toggleSidebar.classList.toggle("is-active");
});

overlay.addEventListener("click", () => {
	collapseSidebar();
});

closeSidebar.addEventListener("click", () => {
	collapseSidebar();
});

let sidenav = document.querySelectorAll(".sidenav-collapse-item");

sidenav.forEach((item) => {
	item.addEventListener("click", () => {
		if (item.classList.contains("is-active")) {
			item.classList.remove("is-active");
		}

		item.classList.toggle("is-collapsible");
	});
});
