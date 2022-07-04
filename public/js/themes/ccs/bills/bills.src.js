// import      '../common/ccs.js';
import      '../common/dropdown.js';
import      '../common/navbar.js';
import      '../common/sidebar.js';

let title = document.querySelector(".navbar #title");
title.innerText = "Mis facturas";

let sidenav = document.querySelector(".sidenav a[data-item=bills]");
sidenav.classList.add("is-active");

let reveals = document.querySelectorAll(".reveal")
reveals.forEach((reveal) => {
	let revealHead = reveal.querySelector(".head");

	revealHead.addEventListener("click", (e) => {
		reveal.classList.toggle("is-active");
	});
});

const paymentMethod = document.getElementById("payment-method");

const contentCredit = document.getElementById("content-credit");
const btnCreditAnular = document.getElementById("btn-credit-anular");
const contentTransfer = document.getElementById("content-transfer");

btnCreditAnular.addEventListener("click", (e) => {
	contentCredit.style.display = "none";
	paymentMethod.style.display = "grid";
});

const btnCredit = document.getElementById("button-credit");
const btnTransfer = document.getElementById("button-transfer");

btnCredit.addEventListener("click", (e) => {
	paymentMethod.style.display = "none";
	contentCredit.style.display = "block";
});

btnTransfer.addEventListener("click", (e) => {
	paymentMethod.style.display = "none";
	contentTransfer.style.display = "block";
});

const boxSMS = document.getElementById("box-sms");
const btnSMS = document.querySelectorAll(".btn-sms");
const btnSMSanular = document.getElementById("btn-sms-anular");

btnSMS.forEach((button) => {
	button.addEventListener("click", (e) => {
		contentCredit.style.display = "none";
		boxSMS.style.display = "block";
	});
});

btnSMSanular.addEventListener("click", (e) => {
	boxSMS.style.display = "none";
	contentCredit.style.display = "block";
});

const boxConfirm = document.getElementById("box-confirm");
const btnConfirm = document.getElementById("button-confirm");
