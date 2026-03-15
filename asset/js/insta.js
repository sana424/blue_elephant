const insta = document.querySelector("#insta");
const insText = document.querySelector("#insta .text");
const insPhoto = document.querySelector('#insta .photos')

gsap.from(insText, {
  y: '-100vh',
  scrollTrigger: {
    trigger: insta,
    start: `top top`,
    end: `top+=${1300}px top`,
    scrub: true,
    // onLeave: () => {
    //   bgVideoBlue.classList.add("hidden");
    // },
    // onEnterBack: () => {
    //   bgVideoBlue.classList.remove("hidden");
    // },
    // onEnter: () => {
    //   bgVideoBlue.classList.remove("hidden");
    // },
  },
});

gsap.to(insPhoto, {
  y: '2400px',
  scrollTrigger: {
    trigger: insta,
    start: `top+=${1600}px top`,
    end: `top+=${6000}px top`,
    scrub: true,
    onLeave: () => {
      insText.classList.add("hidden");
    },
    onEnterBack: () => {
      insText.classList.remove("hidden");
    },
    onEnter: () => {
      insText.classList.remove("hidden");
    },
  },
});
