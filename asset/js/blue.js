const blue = document.querySelector("#blue");
const blueBottomTxt = document.querySelector("#blue .bottom_text");

let BTWidth = blueBottomTxt.getBoundingClientRect().width;

ScrollTrigger.create({
  trigger: blue,
  start: `top-=${300}px top`,
  onEnter: () => {
    blueBottomTxt.classList.add("dis_left");
  },
  onEnterBack: () => {
    blueBottomTxt.classList.remove("dis_left");
  },
  onLeaveBack: () => {
    blueBottomTxt.classList.remove("dis_left");
  },
});
