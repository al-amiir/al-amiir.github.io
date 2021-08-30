export function pointerFunc(pointer, counter) {
  pointer.forEach((p) => {
    p.style.backgroundColor = "#4c4747";
    p.style.filter = "";
  });
  pointer[counter].style.backgroundColor = "white";
  pointer[counter].style.filter = "drop-shadow(white 0px 0px 6px)";
}
