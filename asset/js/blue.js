const blue = document.querySelector("#blue");
const blueBottomTxt = document.querySelector("#blue .bottom_text");
const bgVideoBlue = document.querySelector("#videoLogo .bg_video_blue");
const circle = document.querySelector(".circles .circle.center");

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

gsap.to(bgVideoBlue, {
  width: '1000vw',
  height: '1000vh',
  scrollTrigger: {
    trigger: blue,
    start: `top+=${1080}px top`,
    end: `top+=${2800}px top`,
    scrub: true,
    onLeave: () => {
      bgVideoBlue.classList.add("hidden");
    },
    onEnterBack: () => {
      bgVideoBlue.classList.remove("hidden");
    },
    onEnter: () => {
      bgVideoBlue.classList.remove("hidden");
    }
  },
});

gsap.to(circle, {
  width: 1500,
  height: 1500,
  scrollTrigger: {
    trigger: blue,
    start: `top+=${2400}px top`,
    end: `top+=${3000}px top`,
    scrub: true,
  },
});

ScrollTrigger.create({
  trigger: blue,
  start: `top+=${2800}px top`,
  onEnter: () => {
    document.querySelector(".circles .circle.center").classList.add("active");
    // document.querySelector(".circles .circle.left").classList.add("active");
    // document.querySelector(".circles .circle.right").classList.add("active");
  },
  onEnterBack: () => {
    document
      .querySelector(".circles .circle.center")
      .classList.remove("active");
    // document.querySelector(".circles .circle.left").classList.remove("active");
    // document.querySelector(".circles .circle.right").classList.remove("active");
  },
  onLeaveBack: () => {
    document
      .querySelector(".circles .circle.center")
      .classList.remove("active");
    // document.querySelector(".circles .circle.lefrt").centersList.remove("active");
    // document.querySelector(".circles .circle.right").classList.remove("active");
  },
});
