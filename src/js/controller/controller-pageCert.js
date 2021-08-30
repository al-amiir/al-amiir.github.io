import { Button } from "../view/buttons";
import anime from "animejs/lib/anime.es";
import { pointerFunc } from "../view/progress-pointer";

let button = new Button();
// Next button
let nextButton = document.querySelector(".button__certificate-next");
// Prev button
let prevButton = document.querySelector(".button__certificate-prev");
// Select image
let certificateImage = document.querySelector(".certificate__image");
// Image sorces array
let certificateImageArray = [
  "./assets/material/certificates/OOP.jpg",
  "./assets/material/coding.png",
  "./assets/material/certificates/OOP.jpg",
];
// Set counter
let counter = 0;

// Pointer
let pointer = document.querySelectorAll(
  ".page__certificates .progress__pointer span"
);

// Certificate page
export function pageCertificate() {
  pointer[0].style.backgroundColor = "white";
  pointer[counter].style.filter = "drop-shadow(white 0px 0px 6px)";

  prevButton.style.opacity = ".5";
  prevButton.style.cursor = "not-allowed";
  prevButton.style.filter = "drop-shadow(0px 0px 0px black)";
  prevButton.disabled = true;

  nextButton.addEventListener("click", () => {
    counter++;
    anime({
      targets: ".certificate__image",
      opacity: [1, 0, 1],
      duration: 1000,
      easing: "linear",
    });
    setTimeout(() => {
      certificateImage.src = certificateImageArray[counter];
    }, 500);
    // Next button action
    button.nextButtonClickLogic(
      nextButton,
      prevButton,
      counter,
      certificateImageArray
    );
    pointerFunc(pointer, counter);
  });
  prevButton.addEventListener("click", () => {
    counter--;
    anime({
      targets: ".certificate__image",
      opacity: [1, 0, 1],
      duration: 1000,
      easing: "linear",
    });
    setTimeout(() => {
      certificateImage.src = certificateImageArray[counter];
    }, 500);
    // Prev button
    button.prevButtonClickLogic(
      nextButton,
      prevButton,
      counter,
      certificateImageArray
    );
    pointerFunc(pointer, counter);
  });
}
