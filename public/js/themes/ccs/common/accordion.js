// jshint esversion: 8
/**!
 * @package   CCS
 * @filename  accordion.js
 * @version   1.0
 * @author    Díaz Urbaneja Víctor Eduardo Diex <diazvictor@tutamail.com>
 * @date      04.08.2021 23:38:31 -04
 */

const accordions = document.querySelectorAll(".accordion .accordion-item");

accordions.forEach((accordion) => {
	accordion.addEventListener("click", (e) => {
		for (let i = 0; i < accordions.length; i++) {
			accordions[i].classList.remove("is-active");
		}

		let currentAccordion = e.currentTarget;
		currentAccordion.classList.add("is-active");
	});
});
