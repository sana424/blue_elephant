window.addEventListener("DOMContentLoaded", () => {
  // DOM 요소 모음

  const risingTxt = document.querySelectorAll(".rising_txt");
  const growImg = document.querySelector("#intro .grow_inner");
  const scrollMouse = document.querySelector(".scroll_mouse");
  let scY = window.scrollY;

  if (scY > 100) {
    scrollMouse.classList.add("hide");
  } else {
    scrollMouse.classList.remove("hide");
  }

  requestAnimationFrame(loadingAnimation);

  window.addEventListener("scroll", () => {
    scY = window.scrollY;

    if (scY > 100) {
      scrollMouse.classList.add("hide");
    } else {
      scrollMouse.classList.remove("hide");
    }

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
    const timing1 = window.innerHeight * 0.18;
    const timing2 = window.innerHeight * 1;
    if (scY > growPosition - timing1) {
      growImg.querySelector(".grow_img").classList.add("active");
      if (scY > growPosition + window.innerHeight / 2) {
        changeSrc(growImg);
      }
    } else {
      growImg.querySelector(".grow_img").classList.remove("active");
      if (scY < growPosition + window.innerHeight / 2) {
        changeSrc(growImg, "reverse");
      }
    }
    if (scY > growPosition + timing2) {
      growImg.querySelector(".grow_img").classList.add("go_side");
    } else {
      growImg.querySelector(".grow_img").classList.remove("go_side");
    }
    // console.log(growPosition);

    //glass
    const glassBox = document.querySelector(".sticky_container");
    const glassP = glassBox.getBoundingClientRect().top;
    const glassList = document.querySelector(".glass_list");
    console.log(glassP);
  });
});

let nowTime; //현재 시간 표시
let endTime = 5000;
const maskMain = document.querySelector("#loading .bg_main");
const prgText = document.querySelector("#loading .progress span");
const loadingAnimation = (currentTime) => {
  // console.log(currentTime);
  // console.log(nowTime);

  if (!nowTime) {
    nowTime = currentTime; //타이머 설정
  }

  let playTime = currentTime - nowTime;

  if (playTime < endTime) {
    requestAnimationFrame(loadingAnimation);
  } else {
    playTime = 5000;
    const loading = document.getElementById("loading");
    setTimeout(() => {
      loading.classList.add("hidden");
    }, 1000);
  }

  // console.log(playTime)
  let progress = (playTime / endTime) * 100;

  maskMain.style.width = progress + "%";
  prgText.textContent = Math.floor(progress);
};

//플래그 변수(상태관리)
let imgFlag = false;

const changeSrc = (el, way) => {
  const imgList = el.querySelectorAll("img");

  // 실행중이면 함수 종료
  if (imgFlag) {
    return;
  }
  if (!way && imgList[imgList.length - 1].classList.contains("active")) {
    return;
  }

  //매개변수 way가 reverse인지 확인
  if (way === "reverse") {
    //이미ㅣ 플래그 바꿔주기
    imgFlag = true;
    //포문 돌려서 이미지 반대로 active 클래스 주기
    for (let i = 0; i < imgList.length - 1; i++) {
      setTimeout(() => {
        imgList[imgList.length - (i + 1)].classList.remove("active");
        //플래그정리

        if (i == imgList.length - 2) {
          imgFlag = false;
        }
      }, i * 500);
    }
  } else {
    imgFlag = true;
    document.querySelector("body").style.overflow = "hidden";
    for (let i = 1; i < imgList.length; i++) {
      setTimeout(() => {
        imgList[i].classList.add("active");
        if (i == imgList.length - 1) {
          imgFlag = false;
          document.querySelector("body").style.overflow = "";
        }
      }, i * 500);
    }
  }
};
