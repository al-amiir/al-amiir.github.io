import { Text } from "../view/text";
import { Button } from "../view/buttons";
import { pointerFunc } from "../view/progress-pointer";
import anime from "animejs/lib/anime.es";

// Page-about function
let button = new Button();
// Create new class text
let introText = new Text();
// Text arrays
let introTextArray1 = ["Hello, I'm Al-Amir,", "Graduated From Faculty Of Engineering,", "as a Marine Engineer,"];
let introTextArray2 = ["Then Joined Naval Forces For Three Years", "Through This Interval", "I Decided To Join Web Development Field."];
let introTextArray3 = ["Now I'm a Front-end Web Developer", "I'm Also Looking Forward To being,", "a Full-Stack Web Developer In the Future."];
// Compine both arrays to loop over them
let arrayIntro = [introTextArray1, introTextArray2, introTextArray3];
// Image sources to loop over them
let arrayImagessrc = ["./assets/material/photos/elamir1.jpg", "./assets/material/photos/elamir2.jpg", "./assets/material/photos/elamir3.jpg"];

let pointer = document.querySelectorAll(".page__about .progress__pointer span");

// Set counter for looping through arrays
let counter = 0;
// Select prev , next buttons , home Button
let nextButton = document.querySelector(".button-personal-next");
let prevButton = document.querySelector(".button-personal-prev");
let homeButton = document.querySelector(".page__about .button__home");

// set multi lines helper function
function createAndTyping(arr) {
  introText.elementDeletion(".personal__text");
  arr.forEach((a, i) => {
    introText.elementCreation(".personal__text", `personal__text-p personal__text-p-${i}`, "p", 1);
    introText.textTyping(a, `.personal__text-p-${i}`, 30);
  });
}
// if (document.querySelector(".button__category-1")) {
// }
export function pageAbout() {
  counter = 0;
  // First personal text at beggining of click
  setTimeout(() => {
    createAndTyping(introTextArray1);
    pointer[0].style.backgroundColor = "white";
    pointer[0].style.filter = "drop-shadow(white 0px 0px 6px)";
  }, 1000);
  prevButton.style.opacity = ".5";
  prevButton.style.cursor = "not-allowed";
  prevButton.disabled = true;
}
// next button click
nextButton.addEventListener("click", () => {
  counter += 1;
  anime({
    targets: ".personal__image",
    opacity: [1, 0, 1],
    duration: 1000,
    easing: "linear",
  });
  setTimeout(() => {
    document.querySelector(".personal__image").src = arrayImagessrc[counter];
  }, 500);
  createAndTyping(arrayIntro[counter]);
  button.nextButtonClickLogic(nextButton, prevButton, counter, arrayImagessrc);
  pointerFunc(pointer, counter);
});

// prev button click
prevButton.addEventListener("click", () => {
  counter--;
  introText.elementDeletion(".personal__text");
  createAndTyping(arrayIntro[counter]);
  anime({
    targets: ".personal__image",
    opacity: [1, 0, 1],
    duration: 1000,
    easing: "linear",
  });

  setTimeout(() => {
    document.querySelector(".personal__image").src = arrayImagessrc[counter];
  }, 500);
  button.prevButtonClickLogic(nextButton, prevButton, counter, arrayImagessrc);
  pointerFunc(pointer, counter);
});

homeButton.addEventListener("click", () => {
  setTimeout(() => {
    counter = 0;
    document.querySelector(".personal__image").src = arrayImagessrc[counter];
    button.prevButtonClickLogic(nextButton, prevButton, counter, arrayImagessrc);
    pointerFunc(pointer, counter);
    introText.elementDeletion(".personal__text");
  }, 500);
});
