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
