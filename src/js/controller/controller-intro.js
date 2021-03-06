import { Text } from "../view/text";

// Intro string array
let introArray = ["My Name is Al-Amir, a 25 yrs Front-end Web Developer, who Loves To Combine Between Programming and Art", "Alexandria, Egypt"];

let text = new Text();

// String line typing
introArray.forEach((int, i) => {
  text.textTyping(int, `.text__intro-p-${i}`, 20);
});

text.textTyping("Al-Amir", ".text__logo", 100);

// window.addEventListener("load", (params) => {
//   console.log("loaded");
//   console.log(window);
// });
window.onload = function () {
  console.log("loading");
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("finished");
});
