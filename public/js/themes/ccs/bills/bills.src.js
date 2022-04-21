// import      '../common/ccs.js';
import      '../common/dropdown.js';
import      '../common/navbar.js';
import      '../common/sidebar.js';

let title = document.querySelector(".navbar #title");
title.innerText = "Mis facturas";

let sidenav = document.querySelector(".sidenav a[data-item=bills]");
sidenav.classList.add("is-active");
