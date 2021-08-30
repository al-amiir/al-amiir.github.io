export class Glitch {
  constructor(container) {
    this.container = container;
  }
  glitchCreation(boxName, boxNum) {
    // Glitch container
    let glitchContainer = document.querySelector(`.${this.container}`);
    let count = boxNum;

    // Create boxes and append it to container
    for (let i = 0; i < count; i++) {
      let glitchBox = document.createElement("div");
      glitchBox.className = `${boxName}`;
      glitchContainer.appendChild(glitchBox);
    }
  }

  glitchEffect(boxName) {
    // Select all boxes
    let glitchBoxes = document.querySelectorAll(`.${boxName}`);

    // Change properties
    setInterval(function name(params) {
      for (let i = 0; i < glitchBoxes.length; i++) {
        glitchBoxes[i].style.left = Math.floor(Math.random() * 100) + "vw";
        glitchBoxes[i].style.top = Math.floor(Math.random() * 100) + "vh";
        glitchBoxes[i].style.width = Math.floor(Math.random() * 200) + "px";
        glitchBoxes[i].style.height = Math.floor(Math.random() * 200) + "px";
        glitchBoxes[i].style.backgroundPosition =
          Math.floor(Math.random() * 10) + "px";
      }
    }, 200);
  }
  glitchClear(boxName) {
    let boxes = document.querySelectorAll(`.${boxName}`);
    boxes.forEach((b) => {
      document.querySelector(`.${this.container}`).removeChild(b);
    });
  }
}
