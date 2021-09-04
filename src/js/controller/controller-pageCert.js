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
  "./assets/material/certificates/Js.jpg",
  "./assets/material/certificates/Oop.jpg",
  "./assets/material/certificates/Algorithms.jpg",
  "./assets/material/certificates/Data-Structure.jpg",
];
// Set counter
let counter = 0;

// Pointer
let pointer = document.querySelectorAll(
  ".page__certificates .progress__pointer span"
);

// Certificate page
export function pageCertificate() {
  counter = 0;
  certificateImage.src = certificateImageArray[counter];
  pointerFunc(pointer, counter);
  button.prevButtonClickLogic(
    nextButton,
    prevButton,
    counter,
    certificateImageArray
  );
}
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
