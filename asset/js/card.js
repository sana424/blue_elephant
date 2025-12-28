const productAbout = document.querySelector('#hori .product_about');
const productList = document.querySelector('#hori .product_list')

const cardBlind = document.querySelector('.card_blind');
const cardSection = document.querySelector('.card');


// gsap.to(productAbout,{
//     y: (window.innerHeight * -1),
//     scrollTrigger: {
//     trigger: '#hori',
//     start: `bottom bottom`,
//     end: `bottom+=${window.innerHeight}px bottom`,  
//     scrub: true
// }
// })
// gsap.to(productList,{
//     y: (window.innerHeight * -1),
//     scrollTrigger: {
//     trigger: '#hori',
//     start: `bottom bottom`,
//     end: `bottom+=${window.innerHeight}px bottom`,  
//     scrub: true
// }
// })

gsap.to(cardBlind,{
    y: window.innerHeight * -1,
    scrollTrigger: {
    trigger: '#card',
    start: `top-=${window.innerHeight * 3} top`,
    end: `top-=${window.innerHeight * 1} top`,
    scrub: true,
}
})

gsap.from('#card .card_text',{
    x: window.innerWidth * 2,
    scrollTrigger: {
    trigger: '#card',
    start: `top top`,
    end: `center top`,
    scrub: true,
}
})

const cardlists = document.querySelectorAll('#card .card_lists li');

let duration = 800

cardlists.forEach((item,index) => {
    gsap.from(item, {
        y: window.innerHeight * 0.7,
        rotateY : 80,
        rotate : 10,
        rotateX : 10,
        scrollTrigger : {
        trigger : '#card',
        start : `center+=${index * duration}px top`,
        end : `center+=${index * duration + duration}px top`,
        scrub : true,
        }
    })
})