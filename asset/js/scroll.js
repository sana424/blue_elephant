gsap.registerPlugin(ScrollTrigger) 

const blackContainer = document.querySelector('.black_container');
const fixBox = document.querySelector('#home .fix_box');
const blackStyle = blackContainer.getBoundingClientRect();


let blackEnd = true; // true: 아래 스크롤 가능, false: 아래 스크롤 차단
let blackFlag = false;
fixBox.style.height = ((blackStyle.width - window.innerWidth) * 3) + "px";

window.addEventListener('wheel', (e)=>{
  // 스크롤 끝에 도달했고(blackEnd=false), 아래로 스크롤하려 할 때만 차단
  if(e.deltaY > 0 && !blackEnd){
    e.preventDefault();
  }
},{passive:false})

const rollingSymbol = document.querySelector('.rolling_symbol');
/** 
 * 다시 올라갔을 때 얀 제거
 * setTimeout 해결
*/
rollingSymbol.addEventListener('click', ()=>{
  const blackLogo = document.querySelector('.black_container .logo_motion');

  // 심볼 클릭 시 아래 스크롤 다시 가능하게
  blackEnd = true;

  setTimeout(()=>{
    fixOpa(true);
  }, 5000);

  if(blackFlag){
    blackLogo.classList.add('active');
  }
})

const fixOpa = (dir) => {

if(dir){
  fixBox.classList.add('dis')
}else{
  fixBox.classList.remove('dis')
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

      // blackContainer 진입 시 fixOpa(false) - dis 클래스 제거
      fixOpa(false);
      blackEnd = true;
    },
    onEnterBack:()=> {
      const blackLogo = document.querySelector('.black_container .logo_motion');
      blackLogo.classList.remove('active');
      if(blackFlag){
        blackFlag = false;
      }
      const clickSymbol = document.querySelector('.black_container .rolling_symbol');
      clickSymbol.classList.remove('show_cursor');

      // 위로 스크롤해서 blackContainer로 돌아왔을 때 fixOpa(false) - dis 클래스 제거
      fixOpa(false);
      blackEnd = true;
    },
    
    onLeave:()=> {
      if(!blackFlag){
        blackFlag = true;
      }

      const clickSymbol = document.querySelector('.black_container .rolling_symbol');
      clickSymbol.classList.add('show_cursor');

      // fixBox 하단이 화면 하단에 오도록 스크롤 위치 고정 (먼저 실행)
      const fixBoxRect = fixBox.getBoundingClientRect();
      const targetScroll = window.scrollY + fixBoxRect.bottom - window.innerHeight;
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });

      // 스크롤 이동 후 아래 스크롤 차단
      blackEnd = false;
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
const viewHeight = window.innerHeight;

gsap.from("#hori .from_left", {
    x: viewWidth + 500,
  scrollTrigger: {
    trigger: "#hori",
    start : 'top top',
    end : 'center bottom',
    scrub: true,
    onUpdate: (self) => {
      if(self.progress > 0.25){
        document.querySelector('#hori .from_left').classList.remove('white_black')
        document.querySelector('#hori .from_right').classList.add('white_black')
      }else{
        document.querySelector('#hori .from_left').classList.add('white_black')
        document.querySelector('#hori .from_right').classList.remove('white_black')
      }
    }
  }
})
gsap.from("#hori .from_right", {
    x: (viewWidth + 500) * -1,
    scrollTrigger: {
    trigger: "#hori",
    start : 'top top',
    end : 'center bottom',
    scrub: true
  }
})

gsap.from('#hori .product_list .glass_01',{
    x:(viewWidth / 2) * -1,
    y:(viewHeight / 2) * -1,
    scrollTrigger: {
    trigger: "#hori",
    start : 'top top',
    end : 'center top',
    scrub: true
    }
})
