const productAbout = document.querySelector('#hori .product_about');
const productList = document.querySelector('#hori .product_list')

const cardBlind = document.querySelector('.card_blind');
const cardSection = document.querySelector('#card');
const cardText = document.querySelector('#card .card_text');


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
    x: window.innerWidth * 1,
    scrollTrigger: {
    trigger: '#card',
    start: `top top`,
    end: `center top`,
    scrub: true,
}
})



const cardList = document.querySelector('#card .card_lists');
const cardlists = document.querySelectorAll('#card .card_lists li');

let duration = 800

gsap.to('#card .card_text',{
    x: window.innerWidth * -1,
    scrollTrigger: {
    trigger: '#card',
    start: `center+=${(duration * cardlists.length - 1) + duration}px top`,
    end: `center+=${(duration * cardlists.length - 1) + duration + 2000}px top`,
    scrub: true,
}
})


cardlists.forEach((item,index) => {
    gsap.from(item, {
        y: window.innerHeight * 0.8,
        rotateY : 80,
        rotate : 10,
        rotateX : 10,
        scrollTrigger : {
        trigger : '#card',
        start : `center+=${index * duration}px top`,
        end : `center+=${index * duration + duration}px top`,
        scrub : true,
        // onLeave: ()=>{
        //     if(index === cardlists.length - 1 && !cardText.classList.contains('go_left')){
        //         cardText.classList.add('go_left');
        //     }
        // },
        onEnter : ()=> {
             if(index == 0 && !cardList.classList.contains('active_blur')){
                cardList.classList.add('active_blur');
             }
        },
        onLeaveBack: ()=> {
                         if(index == 0 && cardList.classList.contains('active_blur')){
                cardList.classList.remove('active_blur');
             }
        },
        onEnterBack: ()=> {
            if ( index === cardlists.length - 1 && !cardList.classList.contains('active_blur')){
                cardList.classList.add('active_blur');
            }
        }

        }
    })
})

/** 
 * 1. 백그라운드 텍스트가 가운데 온다
 * 2. 텍스트 블러처리 후 카드가 올라오기 시작
 * 3. 카드가 다 올라온 후 텍스트 왼쪽으로 사라짐 
 * 4. 카드 펼쳐짐
 * 
 * 
*/