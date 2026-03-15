const offline = document.querySelector('#offline');
const offlineIntro = offline.querySelector('.sec_intro');
const introCurtain = offline.querySelector('.curtain');

const offlineStoreList = offline.querySelector('.store_list');

gsap.to(introCurtain, {
  x : '100%',
  scrollTrigger : {
    trigger: offlineIntro,
    start : `top top`,
    end : `top+=${2500}px top`,
    scrub : true
  }
})

gsap.to(offlineStoreList, {
  '--translate' : '0%',
  scrollTrigger : {
    trigger : offlineIntro,
    start : `top+=${3500}px top`,
    end : `top+=${5000}px top`,
    scrub : true
  }
})