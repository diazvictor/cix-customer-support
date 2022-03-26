// jshint esversion: 8
/**!
 * @package   CCS
 * @filename  dropdown.js
 * @version   1.0
 * @author    Díaz Urbaneja Víctor Eduardo Diex <diazvictor@tutamail.com>
 * @date      05.08.2021 18:51:08 -04
 */

let dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
	let dropdownBtn = dropdown.querySelector(".dropdown-toggle");
	let dropdownMenu = dropdown.querySelector(".dropdown-menu");

	dropdownBtn.addEventListener("click", () => {
		dropdownMenu.classList.toggle("is-active");
	});
});
