//import		Chartist	from "chartist";
import		Chart	    from "chart.js";
import		map	        from "leaflet";
import      '../common/ccs.js';
import      '../common/navbar.js';
import      '../common/sidebar.js';

window.addEventListener("load", () => {
	const filebutton = document.querySelector(".file");
	let fileinput = filebutton.querySelector("label input[type=file]");
	let filename = document.querySelector(".file input[type=text]");
	
	fileinput.addEventListener("change", () => {
		filename.value = fileinput.files[0].name;
	});
});
