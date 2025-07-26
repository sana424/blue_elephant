window.addEventListener("DOMContentLoaded", () => {
  // DOM 요소 모음
  
  const risingTxt = document.querySelectorAll(".rising_txt");
  const growImg = document.querySelector("#intro .grow_inner");

  requestAnimationFrame(loadingAnimation);

  console.log(loading);
  setTimeout(function () {
    // loading.classList.add("hidden");
    // loading.style.opacity = 0;
    // loading.style.visibility = 'hidden';
  }, 1500);

  // for(let i = 0; i < risingTxt.length; i++){
  //     risingTxt[i].classList.add('active');
  // }

  window.addEventListener("scroll", () => {
    let scY = window.scrollY;

    if (scY > 101) {
      for (let i = 0; i < risingTxt.length; i++) {
        risingTxt[i].classList.add("active");
      }
    } else {
      for (let i = 0; i < risingTxt.length; i++) {
        risingTxt[i].classList.remove("active");
      }
    }

    const growTop = growImg.getBoundingClientRect().top;
    const growPosition = scY + growTop;
    // window.innerHeight = 화면 높이
    const timing = window.innerHeight * 0.18;
    if (scY > growPosition - timing) {
      growImg.querySelector(".grow_img").classList.add("active");
      if (scY > growPosition + window.innerHeight / 2) {
        changeSrc(growImg);
      }
    } else {
      growImg.querySelector(".grow_img").classList.remove("active");
    }

    console.log(growPosition);
  });
});

let nowTime; //현재 시간 표시
let endTime = 5000;
const maskMain = document.querySelector("#loading .bg_main");
const prgText = document.querySelector("#loading .progress span");
const loadingAnimation = (currentTime) => {
  console.log(currentTime);
  console.log(nowTime);

  if (!nowTime) {
    nowTime = currentTime; //타이머 설정
  }

  let playTime = currentTime - nowTime;


  if (playTime < endTime) {
    requestAnimationFrame(loadingAnimation);
  } else {
    playTime = 5000;
    const loading = document.getElementById("loading");
    setTimeout(()=>{
      loading.classList.add('hidden');
    },1000);
  }

  console.log(playTime)
  let progress = (playTime / endTime) * 100;

  maskMain.style.width = progress + '%';
  prgText.textContent = Math.floor(progress);

};

const changeSrc = (el) => {
  const imgList = el.querySelectorAll("img");

  for (let i = 1; i < imgList.length; i++) {
    setTimeout(() => {
      imgList[i].classList.add("active");
    }, i * 500);
  }
};
