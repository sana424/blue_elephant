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
const cardLists2 = document.querySelectorAll('#card .card_lists_2 li');
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
        cardlists.forEach(i2 => {
            i2.classList.remove('clicked');
        })
        ScrollTrigger.create({
            trigger : "body",
            start: ()=> self.end += 3500,
            onEnter: ()=> {
            cardList2.querySelectorAll('li').forEach(i2 => {
            i2.classList.remove('clicked');
        })
        cardlists.forEach(i2 => {
            i2.classList.remove('clicked');
        })
                cardList.classList.add('roll');
                cardList2.classList.add('roll');
                hiding.classList.add('hidden');
            },
            onLeaveBack:()=> {
            cardList2.querySelectorAll('li').forEach(i2 => {
            i2.classList.remove('clicked');
        })
        cardlists.forEach(i2 => {
            i2.classList.remove('clicked');
        })
                cardList.classList.remove('roll');
                cardList2.classList.remove('roll');
                hiding.classList.remove('hidden');
            },
            onEnterBack: ()=> {
            cardList2.querySelectorAll('li').forEach(i2 => {
            i2.classList.remove('clicked');
        })
        cardlists.forEach(i2 => {
            i2.classList.remove('clicked');
        })
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
        cardList2.querySelectorAll('li').forEach(i2 => {
            i2.classList.remove('clicked');
        })
        cardlists.forEach(i2 => {
            i2.classList.remove('clicked');
        })
        cardList.classList.remove('semi_circle')
        secondTopText.classList.remove('show');

    }
}
})


cardlists.forEach((item,index) => {
        item.addEventListener('click', ()=>{
        cardList2.querySelectorAll('li').forEach(i2 => {
            i2.classList.remove('clicked');
        })
        cardlists.forEach(i => {
            if(i !== item){
                i.classList.remove('clicked');
            }
        })
        if(!cardList2.classList.contains('collect')){
            item.classList.toggle('clicked')
        }else{
            cardList2.querySelectorAll('li').forEach(i2 => {
                i2.classList.remove('clicked');
            })
        }
    });


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

    item.addEventListener('click', ()=>{
        cardList2.querySelectorAll('li').forEach(i => {
            if(i !== item){
                i.classList.remove('clicked');
            }
        })
        item.classList.toggle('clicked');
    })
})

ScrollTrigger.create({
    trigger: '#card',
    start: 'bottom-=5500px top',
    scrub: true,
    onEnter : ()=>{
        cardList2.classList.add('collect');
    },
    onEnterBack: ()=>{
        cardList2.classList.remove('collect');
    },
    onLeaveBack: ()=>{
        cardList2.classList.remove('collect');
    }
})

cardLists2.forEach((item , index) => {
    gsap.to(item, {
        y:window.innerHeight * -0.8,
        scrollTrigger: {
            trigger: '#card',
            start: `bottom-=${5000 - ((cardLists2.length - index -1) * 200)}px top`,
            end: `bottom-=${5000 - (duration + ((cardLists2.length - index - 1) * 200))}px top`,
            scrub: true,
        }
    })
})