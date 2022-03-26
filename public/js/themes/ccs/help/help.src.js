//import		Chartist	from "chartist";
import		Chart	    from "chart.js";
import		map	        from "leaflet";
import      '../common/ccs.js';
import      '../common/accordion.js';
import      '../common/navbar.js';
import      '../common/sidebar.js';

var module = functions.get_module();

const toggleDiscussions = document.querySelector(".toggle-discussions");
const discussions = document.querySelector(".discussions");
	
toggleDiscussions.addEventListener("click", () => {
	discussions.classList.toggle("is-active");
});
