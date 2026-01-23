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
const cardList2 = document.querySelector('#card .card_lists_2');
const cardlists = document.querySelectorAll('#card .card_lists li');
const secondTopText = document.querySelector('#card .second_top_text');
const hiding = document.querySelector('#card .hiding');

let duration = 800


gsap.to('#card .card_text',{
    x: window.innerWidth * -1,
    scrollTrigger: {
    trigger: '#card',
    start: `center+=${(duration * cardlists.length - 1) + duration} top`,
    end: `center+=${(duration * cardlists.length - 1) + duration + 2000} top`,
    scrub: true,
    onLeave: (self)=>{
        cardlists.forEach((item)=>{
            item.style.translate = '';
            item.style.rotate = '';
            item.style.scale = '';
            item.style.transform = '';
            item.style.transition = 'all 0.5s ease';

            setTimeout(()=>{
                item.style.transition = '';
            },500)
        })
        cardList.classList.add('semi_circle')
        secondTopText.classList.add('show');

        ScrollTrigger.create({
            trigger : "body",
            start: ()=> self.end += 3500,
            onEnter: ()=> {
                console.log('ddddd')
                cardList.classList.add('roll');
                cardList2.classList.add('roll');
                hiding.classList.add('hidden');
            },
            onLeaveBack:()=> {
                cardList.classList.remove('roll');
                cardList2.classList.remove('roll');
                hiding.classList.remove('hidden');
            },
            onEnterBack: ()=> {
                cardList.classList.remove('roll');
                cardList2.classList.remove('roll');
                hiding.classList.remove('hidden');
            }
        })
    },
    onEnterBack: ()=>{
        cardlists.forEach((item)=>{
                item.style.transition = 'all 0.3s ease';

            setTimeout(()=>{
                item.style.transition = '';
            },350)
        })
        cardList.classList.remove('semi_circle')
        secondTopText.classList.remove('show');

    }
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
        onEnter : ()=>{
            if(index == 0 && !cardList.classList.contains('active_blur')){
            cardList.classList.add('active_blur');
            }
        },
        onLeaveBack: ()=>{
            if(index == 0 && cardList.classList.contains('active_blur')){
            cardList.classList.remove('active_blur');
            }

        },
        onEnterBack : ()=>{
            if(index === cardlists.length -1 && !cardList.classList.contains('active_blur')){
            cardList.classList.add('active_blur');
            }
        }
        }
    })
})

cardList2.querySelectorAll('li').forEach(item => {
})