import anime from "animejs/lib/anime.es.js";
export class Page {
  /**
   * X direction page animation
   * @param {string} target
   * @param {string or number} from "100vh" or 100
   * @param {string or number} to
   */
  pageAnimation(target, from, to) {
    anime({
      targets: `${target}`,
      translateY: "0vh",
      translateX: [from, to],
      duration: 1000,
      easing: "easeOutQuart",
      delay: function (el, i) {
        return i * 0;
      },
    });
  }
  /**
   * Fadding and Y direction page animation
   * @param {string} target
   * @param {string or number} from
   * @param {string or number} to
   * @param {string} direction "normal" or " reverse"
   */
  pageFading(target, from, to, direction) {
    anime({
      targets: `${target}`,
      translateY: [from, to],
      opacity: [0, 1],
      duration: 500,
      direction: `${direction}`,
      easing: "linear",
      delay: function (el, i) {
        return i * 0;
      },
    });
  }
}
