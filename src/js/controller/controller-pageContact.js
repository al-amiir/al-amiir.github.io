import anime from "animejs/lib/anime.es";

let list = document.querySelectorAll(".page__contact-ul li");
let colors = [
  "rgb(165 42 42 / 63%)",
  "rgb(0 0 0 / 50%)",
  "rgb(10 102 194 / 63%)",
  "rgb(81 170 78 / 63%)",
  "rgb(24 119 242 / 63%)",
];
list.forEach((l, i) => {
  l.addEventListener("mouseover", (e) => {
    anime({
      targets: [`.page__contact-ul-li-${i}`],
      backgroundColor: ["rgb(0 0 0 / 0%)", `${colors[i]}`],
      translateX: ["0px", "25px"],
    });
  });
  l.addEventListener("mouseout", (e) => {
    anime({
      targets: [`.page__contact-ul-li-${i}`, `.page__contact-ul-li-${i} li`],
      backgroundColor: [`${colors[i]}`, "rgb(0 0 0 / 0%)"],
      translateX: ["25px", "0px"],
    });
  });
});
