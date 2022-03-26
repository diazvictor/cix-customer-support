// jshint esversion: 8
/**!
 * @package   CCS
 * @filename  ccs.js
 * @version   1.0
 * @author    Díaz Urbaneja Víctor Eduardo Diex <diazvictor@tutamail.com>
 * @date      13.07.2021 20:43:05 -04
 */

let tabs = document.querySelectorAll(".tabs .tab-item");
tabs.forEach((tab) => {
	tab.addEventListener("click", (e) => {
		for (let i = 0; i < tabs.length; i++) {
			tabs[i].classList.remove("is-active");
		}

		let clickedTab = e.currentTarget;
		clickedTab.classList.add("is-active");
		e.preventDefault();

		let panes = document.querySelectorAll(".tab-pane");
		for (let i = 0; i < panes.length; i++) {
			panes[i].classList.remove("is-active");
		}

		let anchorReference = e.target;
		let activePaneId = anchorReference.dataset.tab;
		let activePane = document.getElementById(activePaneId);
		activePane.classList.add("is-active");
	});
});
