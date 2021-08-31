import { Text } from "../view/text";
import { Page } from "../view/pages";
import { Button } from "../view/buttons";
import { pageAbout } from "./controller-pageAbout";
import { pageCertificate } from "./controller-pageCert";
import anime from "animejs/lib/anime.es.js";

// let glitch = new Glitch("glitch__container");

// async function glitchPromise() {
//   try {
//     // glitch creation
//     glitch.glitchCreation("glitch__container--box", 20);
//     // Start glitch
//     await new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(glitch.glitchEffect("glitch__container--box"));
//       }, 3000);
//     });
//     //3000

//     // Change image
//     await new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(
//           document.querySelectorAll(".glitch__container--box").forEach((b) => {
//             b.style.backgroundImage =
//               'url("http://127.0.0.1:5500/assets/material/coding.png")';
//           })
//         );
//       }, 1000);
//     });
//     // 1000
//     // Change video
//     await new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(
//           (document.querySelector(".glitch__video--1").src =
//             "http://127.0.0.1:5500/assets/material/coding.mp4")
//         );
//       }, 1000);
//     });
//     //1000

//     // Clear glitch
//     await new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(glitch.glitchClear("glitch__container--box"));
//       }, 2000);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// Menu button ( display menu slide )
let menuPageSliding = new Page();

// Menu category buttons creation
let menuCategoryButtonsText = ["About", "Projects", "Certificates", "Contact"];
let pages = [
  "page__about",
  "page__projects",
  "page__certificates",
  "page__contact",
];

// Set click condition
let menuButton = document.querySelector(".button__menu");
let menuCategoryButtons = new Text();
let clicked = true;

menuButton.addEventListener("click", async () => {
  if (clicked == true) {
    // Clear innerHtml if there ..
    menuCategoryButtons.elementDeletion(".menu");

    // Change menu button color
    anime({
      targets: ".button__menu",
      color: ["rgb(239, 180, 98)", "rgb(231, 15, 7)"],
      duration: 1000,
    });

    // Menu Page sliding
    document.querySelector(".menu").style.opacity = 1;
    menuPageSliding.pageAnimation(".menu", "-100vw", "100vw");

    setTimeout(() => {
      // 1) Create Button
      // 2) Text typing the name of button
      // 3) Add action to every button

      // 1)
      menuCategoryButtonsText.forEach((m, i) => {
        menuCategoryButtons.elementCreation(
          ".menu",
          `button__category button__category-${i + 1}`,
          "button",
          1
        );
        // 2)
        menuCategoryButtons.textTyping(
          menuCategoryButtonsText[i],
          `.button__category-${i + 1}`,
          80
        );
        // 3)
        document
          .querySelector(`.button__category-${i + 1}`)
          .addEventListener("click", function name() {
            menuPageSliding.pageFading(
              `.${pages[i]}`,
              "-100vh",
              "-100vh",
              "normal"
            );
          });
      });
    }, 1000);
    setTimeout(() => {
      pageAbout();
      pageCertificate();
    }, 1500);

    clicked = !clicked;
  } else {
    // Button menu reverse
    anime({
      targets: ".button__menu",
      color: ["rgb(231, 15, 7)", "rgb(239, 180, 98)"],
      duration: 1000,
    });
    // Menu page reverse
    menuPageSliding.pageFading(".menu", "10vh", "0vh", "reverse");
    // Set menu page to initial position
    setTimeout(() => {
      document.querySelector(".menu").style.transform =
        "translateX(0vw) translateY(0vh)";
    }, 600);
    clicked = !clicked;
  }
});
