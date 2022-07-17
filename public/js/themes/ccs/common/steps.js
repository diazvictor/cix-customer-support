// jshint esversion: 8
/**!
 * @package   CCS
 * @filename  steps.js
 * @version   1.0
 * @author    Díaz Urbaneja Víctor Eduardo Diex <diazvictor@tutamail.com>
 * @date      28.03.2022 17:45:28 -04
 */

let stepsSegment = document.querySelectorAll(".steps .steps-segment");

const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
const acceptBtn = document.getElementById("accept");

const numberOfSteps = stepsSegment.length;
let currentStep = 1;

let goPrevious = (e) => {
    e.preventDefault();
    currentStep -= 1;
    goToStep(currentStep);
};

let goNext = (e) => {
    e.preventDefault();
    currentStep += 1;
    goToStep(currentStep);
};

let goToStep = (step) => {
    currentStep = step;

    let steps = document.getElementById(`step-${currentStep}`);
    let stepsContent = document.querySelectorAll(".step-content .step-pane");
    let indicators = document.getElementsByClassName("steps-segment");

    for (let i = indicators.length - 1; i >= currentStep; --i) {
        indicators[i].classList.remove("is-progress");
        indicators[i].classList.remove("is-active");
    }

    for (let i = 0; i < currentStep; ++i) {
        indicators[i].classList.add("is-progress");
    }

    // hide all input
    for (let i = 0; i < stepsContent.length; ++i) {
        hide(stepsContent[i]);
    }

	show(steps);

	let dataStepOne = document.getElementById("step-segment-1");
	let dataStepTwo = document.getElementById("step-segment-2");
	let dataStepThree = document.getElementById("step-segment-3");
	let dataStepFour= document.getElementById("step-segment-4");

	if (currentStep === 1) {
		console.log("Page 1");

		dataStepOne.classList.remove("is-active");
		dataStepOne.classList.add("is-progress");
    } else if (currentStep === 2) {
		console.log("Page 2");

		dataStepOne.classList.remove("is-progress");
		dataStepOne.classList.add("is-active");

		dataStepTwo.classList.add("is-progress");
		dataStepTwo.classList.remove("is-active");
    } else if (currentStep === 3) {
		console.log("Page 3");

		dataStepTwo.classList.remove("is-progress");
		dataStepTwo.classList.add("is-active");

		dataStepThree.classList.add("is-progress");
		dataStepThree.classList.remove("is-active");
    } else if (currentStep === 4) {
		console.log("Page 4");

		dataStepThree.classList.remove("is-progress");
		dataStepThree.classList.add("is-active");

		previousBtn.style.margin = 0;
		previousBtn.style.justifyContent = "flex-start";
	} else {
		previousBtn.style.marginRight = "20px";
	}


	let hidden_four_step = document.getElementById("hidden-four-step");

	// if we reached final step
    if (currentStep === 3 || currentStep === 4) {
		hidden_four_step.style.display = "none";
    } else {
        hidden_four_step.style.display = "grid";
	}

    // if we reached final step
    if (currentStep === numberOfSteps) {
        enable(previousBtn);
        nextBtn.style.display = "none";
    }

    // else if first step
    else if (currentStep === 1) {
        disable(previousBtn);
        nextBtn.style.display = "block";
        acceptBtn.style.display = "none";
    }

    else {
        enable(previousBtn);
        nextBtn.style.display = "block";
        acceptBtn.style.display = "none";
    }
};

let enable = (elem) => {
    elem.disabled = false;
};

let disable = (elem) => {
    elem.disabled = true;
};

let show = (elem) => {
    elem.classList.add("is-active");
};

let hide = (elem) => {
    elem.classList.remove("is-active");
};

previousBtn.onclick = goPrevious;
nextBtn.onclick = goNext;
