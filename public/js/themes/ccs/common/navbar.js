// jshint esversion: 8
/**!
 * @package   CCS
 * @filename  navbar.js
 * @version   1.0
 * @author    Díaz Urbaneja Víctor Eduardo Diex <diazvictor@tutamail.com>
 * @date      13.07.2021 20:43:05 -04
 */

const navbar = document.querySelector('.navbar');

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-500px";
    }

    prevScrollpos = currentScrollPos;
};

// const dropdowns = document.querySelector(".navbar .navbar-end > .buttons");
// dropdowns.childNodes.forEach((dropdown) => {
	// dropdown.addEventListener("click", (e) => {
		// if (e.target.tagName == "A") {
			// e.target.classList.add("is-active");
		// }
	// });
// });
