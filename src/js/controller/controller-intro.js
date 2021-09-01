import { Text } from "../view/text";

// Intro string array
let introArray = [
  "My name is Al-Amir, a Front-end Web Developer, 25 years old   ",
  "Alexandria, Egypt",
  "",
  // "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus fugarepellendus, temporibus veniam unde neque nesciunt et",
];

let text = new Text();

// String line typing
introArray.forEach((int, i) => {
  text.textTyping(int, `.text__intro-p-${i}`, 20);
});

text.textTyping("Al-Amir", ".text__logo", 100);
