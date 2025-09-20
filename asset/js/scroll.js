gsap.registerPlugin(ScrollTrigger) 

const blackContainer = document.querySelector('.black_container');
const fixBox = document.querySelector('#home .fix_box');
const blackStyle = blackContainer.getBoundingClientRect();

fixBox.style.height = blackStyle.width + "px";

gsap.to(".black_container", {
  x: blackStyle.width * -1, 
  scrollTrigger: {
    trigger: ".fix_box",
    start: `${blackStyle.width * 0.4}px 80%`,
    end: "bottom 20%",  
    scrub: true     
  }
});

gsap.from("#home .ele_01", {
    y: 500,
  scrollTrigger: {
    trigger: ".fix_box",
    start: `${blackStyle.width * 0.3}px 100%`,
    end: `${blackStyle.width * 0.8}px 20%`,  
    scrub: true
  }
})