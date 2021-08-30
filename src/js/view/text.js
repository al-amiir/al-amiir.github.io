export class Element {
  constructor() {}
  /**
   * Element creation method
   * @param {string} container  The container where new element will be add
   * @param {string} elementName Class name of new elements
   * @param {string} elementType Elements type
   * @param {number} elementNum How many elements
   */
  elementCreation(container, elementName, elementType, elementNum) {
    // Parent container
    let parentContainer = document.querySelector(`${container}`);
    let count = elementNum;

    // Create elements and append it to container
    for (let i = 0; i < count; i++) {
      let elm = document.createElement(`${elementType}`);
      elm.className = `${elementName}`;
      parentContainer.appendChild(elm);
    }
  }

  /**
   * Deletion method
   * @param {string} container
   */
  elementDeletion(container) {
    let parentContainer = document.querySelector(`${container}`);
    parentContainer.innerHTML = "";
  }
}

export class Text extends Element {
  constructor() {
    super();
  }
  /**
   * Text typing method
   * @param {string} text Write a string "Hello i'm Elamir"
   * @param {string} container PArent container where action will be mabe
   * @param {number} seconds Delay between words
   */
  textTyping(text, container, seconds) {
    // Select container
    let textContainer = document.querySelector(`${container}`);
    let i = 0;
    // Typing function
    function typing() {
      if (i < text.length) {
        textContainer.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, seconds);
      }
    }
    typing();
  }
}

export function multiLinesTyping(
  newClass,
  stringArray,
  container,
  elementName,
  elementType,
  lineSeconds,
  linesSeconds
) {
  stringArray.forEach((int, i) => {
    newClass.elementCreation(
      `${container}`,
      `${elementName} ${elementName}-${i}`,
      `${elementType}`,
      1
    );
    setTimeout(() => {
      newClass.textTyping(stringArray[i], `.${elementName}-${i}`, lineSeconds);
    }, i * linesSeconds);
  });
}
