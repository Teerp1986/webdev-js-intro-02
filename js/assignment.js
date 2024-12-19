"use strict";

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const yearElement = document.getElementById("year");
const resolutionElement = document.getElementById("resolution")
const willMeetResolutionElement = document.getElementById("will-meet-resolution")
const submissionBtn = document.getElementById("submission-btn")

// Declare your variables here.
const currentYear = 2025;
const resolution = "Learn coding and Javascript";
let willMeetResolution = "Yes";

function updateYear() {
<<<<<<< HEAD
    // Update this function
    yearElement.innerHTML = currentYear;
=======
    // write the logic

>>>>>>> b983b7900cec054de37108064ab7f87df72606d7
}

function updateResolution() {
    // Update this function 
    resolutionElement.innerHTML = resolution;
}

<<<<<<< HEAD
function updateWillMeetResolution() {
    // Update this function
    willMeetResolutionElement.innerHTML = willMeetResolution;
}

function render() {
    // Update this function
    updateYear();
    updateResolution();
    updateMeet();
}

submissionBtn.addEventListener("click", function () {
    // Update this function
    render();
=======
function render() {
    // Finish writing this function

}

submissionBtn.addEventListener("click", function () {
    // Finish writing this function

>>>>>>> b983b7900cec054de37108064ab7f87df72606d7
})
