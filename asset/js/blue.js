const blue = document.querySelector("#blue");
const blueBottomTxt = document.querySelector("#blue .bottom_text");
const bgVideoBlue = document.querySelector('#videoLogo .bg_video_blue');

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

gsap.to(bgVideoBlue,{
  scale : 10,
  scrollTrigger : {
    trigger : blue,
    start : `top+=${1080}px top`,
    end : `top+=${2800}px top`,
    scrub : true  
  }
})