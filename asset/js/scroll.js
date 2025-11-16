gsap.registerPlugin(ScrollTrigger) 

const blackContainer = document.querySelector('.black_container');
const fixBox = document.querySelector('#home .fix_box');
const blackStyle = blackContainer.getBoundingClientRect();


let blackEnd = true;
let blackFlag = false;
fixBox.style.height = ((blackStyle.width - window.innerWidth) * 3) + "px";

window.addEventListener('wheel', (e)=>{
  if(e.deltaY > 0 && !blackEnd){
    e.preventDefault();
  }
},{passive:false})

const rollingSymbol = document.querySelector('.rolling_symbol');

rollingSymbol.addEventListener('click', ()=>{
  const blackLogo = document.querySelector('.black_container .logo_motion');

  setTimeout(fixOpa(true),5000);
  if(blackFlag){
    blackLogo.classList.add('active');
  }
})

const fixOpa = (dir) => {

if(dir){
  fixBox.classList.add('dis')
}else{
  fixBox.classList.remoce('dis')
}

}

const blackTrigger = gsap.to(".black_container", {
  x: (blackStyle.width - window.innerWidth) * -1,
  scrollTrigger: {
    trigger: ".fix_box",
    start: `top+=${blackStyle.width * 0.7}px top`,
    end: `bottom bottom`,
    scrub: true,
    onEnter:()=> {
      const blackLogo = document.querySelector('.black_container .logo_motion');
      blackLogo.classList.remove('active');
      if(blackFlag){
        blackFlag = false;
      }
      const clickSymbol = document.querySelector('.black_container .rolling_symbol');
      clickSymbol.classList.remove('show_cursor');
    },
    onEnterBack:()=> {
      const blackLogo = document.querySelector('.black_container .logo_motion');
      blackLogo.classList.remove('active');
      if(blackFlag){
        blackFlag = false;
      }
      const clickSymbol = document.querySelector('.black_container .rolling_symbol');
      clickSymbol.classList.remove('show_cursor');
    },
    
    onLeave:()=> {
      if(!blackFlag){
        blackFlag = true;
      }
      
      const clickSymbol = document.querySelector('.black_container .rolling_symbol');
      clickSymbol.classList.add('show_cursor');
    },

    onUpdate: (self) => {
      if(self.progress > 0.9 && self.progress < 1){
        // blackEnd = false;
        
        // window.scrollTo({
        //   left:0,
        //   top: blackStyle.bottom + window.scrollY - window.innerHeight,
        //   behavior:'smooth',
        // })
      } else{
        blackEnd = true;
      }
    }
  }
});


const textMo = document.querySelectorAll('#home .text_mosigi');
textMo.forEach((item, index) => {
  const textItem = item.querySelector('.hidden');
  const duration = 0.5 / 4 ;
  const indexNumber= duration * index + 0.2;


gsap.to( textItem, {
  width:"100%",
  scrollTrigger: {
    trigger: ".fix_box",
    start: `top+=${blackStyle.width * (indexNumber)}px top`,
    end: `top+=${blackStyle.width * (duration + indexNumber)}px top`,
    scrub: true
  }
})

})
// textMo.forEach((item,index)=> {
//     const textItem = item.querySelector('.hidden');
//   const duration = 0.5 / 4 ;
//   const indexNumber= (0.5 - (duration * index)) + 0.2;

// gsap.to( textItem, {
//   width:"0%",
//   scrollTrigger: {
//     trigger: ".fix_box",
//     start: `top+=${blackStyle.width * (indexNumber + 0.5)}px top`,
//     end: `top+=${blackStyle.width * (duration + indexNumber + 0.5)}px top`,
//     scrub: true
//   }
// })
  

// })



gsap.from("#home .ele_01", {
    y: 500,
  scrollTrigger: {
    trigger: ".fix_box",
    start: `top top`,
    end: `top+=${blackStyle.width * 0.2}px top`,  
    scrub: true
  }
})
// gsap.from("#home .last_flex", {
//     x: window.innerWidth,
//   scrollTrigger: {
//     trigger: ".fix_box",
//     start: `top+=${blackStyle.width * 0.6}px top`,
//     end: `top+=${blackStyle.width * 0.8}px top`,  
//     scrub: true
//   }
// })
gsap.from("#home .ele_05", {
    y: 1500,
  scrollTrigger: {
    trigger: ".fix_box",
    start: `top+=${blackStyle.width * 1}px top`,
    end: `top+=${blackStyle.width * 1.5 }px top`,  
    scrub: true
  }
})

const viewWidth = window.innerWidth;

gsap.from("#hori .from_left", {
    x: 100,
  scrollTrigger: {
    trigger: "#hori",
    start : 'top top',
    end : 'center top',
    scrub: true
  }
})
