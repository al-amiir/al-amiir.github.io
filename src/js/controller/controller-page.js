import { Page } from "../view/pages";

// Create new page class
let page = new Page();

// Select home buttons
// Home buttons are made to back to menu slide
let homeButtons = document.querySelectorAll(".button__home");

let pages = [
  "page__about",
  "page__projects",
  "page__certificates",
  "page__contact",
];

// Home button click function
homeButtons.forEach((h, i) => {
  h.addEventListener("click", function name(params) {
    page.pageFading(`.${pages[i]}`, "-90vh", "-100vh", "reverse");
    setTimeout(() => {
      document.querySelector(`.${pages[i]}`).style.transform =
        "translateY(0vh)";
    }, 600);
  });
});
