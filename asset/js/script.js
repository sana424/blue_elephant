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
        changeSrc(growImg,growPosition);
      }
    } else {
      growImg.querySelector(".grow_img").classList.remove("active");
      if (scY < growPosition + window.innerHeight) {
        changeSrc(growImg,growPosition, "reverse");
      }
    }
    if (scY > growPosition + timing2) {
      growImg.querySelector(".grow_img").classList.add("go_side");
    } else {
      growImg.querySelector(".grow_img").classList.remove("go_side");
    }
    // console.log(growPosition);

    // glass box animation with sticky and extended scroll
    const glassBox = document.querySelector(".glass_box");
    if (glassBox) {
      const homeSection = document.querySelector("#home .first_content");
      const stickyContainer = document.querySelector("#home .sticky_container");
      const homeSectionTop = homeSection.getBoundingClientRect().top;
      const homeSectionHeight = homeSection.offsetHeight;
      
      // #home 섹션 내에서 스크롤 진행도 계산
      if (homeSectionTop <= 0 && homeSectionTop + homeSectionHeight >= 0) {
        // 긴 스크롤 구간에서의 진행도 (0 ~ 1)
        const scrollProgress = Math.max(0, Math.min(1, Math.abs(homeSectionTop) / (homeSectionHeight - window.innerHeight)));
        
        // 회전각도: 15도에서 0도로 천천히
        const rotation = 15 - (15 * scrollProgress);
        
        // Y축 위치: 컨테이너 위쪽에서 중앙으로
        const translateY = -100 + (100 * scrollProgress);
        
        // 투명도: 0에서 1로 천천히
        const opacity = Math.min(1, scrollProgress * 1.5);
        
        // 스케일 효과도 추가 (선택사항)
        const scale = 0.8 + (0.2 * scrollProgress);
        
        // 스타일 적용
        glassBox.style.transform = `translateY(${translateY}%) rotate(${rotation}deg) scale(${scale})`;
        glassBox.style.opacity = opacity;
        glassBox.style.transition = 'none'; // 부드러운 스크롤 추적
      } else if (homeSectionTop > 0) {
        // 섹션에 도달하기 전 - 초기 상태
        glassBox.style.transform = `translateY(-200px) rotate(15deg) scale(0.8)`;
        glassBox.style.opacity = 0;
      } else {
        // 섹션을 지나친 후 - 최종 상태 유지
        glassBox.style.transform = `translateY(0px) rotate(0deg) scale(1)`;
        glassBox.style.opacity = 1;
      }
    }

    //glass
    const glassContainer = document.querySelector(".sticky_container");
    const glassP = glassContainer ? glassContainer.getBoundingClientRect().top : 0;
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

const changeSrc = (el,  pos,way) => {
  const imgList = el.querySelectorAll("img");

  // 실행중이면 함수 종료
  if (imgFlag) {
    return;
  }
  if (!way && imgList[imgList.length - 1].classList.contains("active")) {
    return;
  }
  if(way && !imgList[1].classList.contains('active')){
    return;
  }

  //매개변수 way가 reverse인지 확인
  if (way === "reverse") {
    //이미ㅣ 플래그 바꿔주기

    imgFlag = true;
        document.querySelector("body").style.overflow = "hidden";
    window.scrollTo(0, pos)
    //포문 돌려서 이미지 반대로 active 클래스 주기
    for (let i = 0; i < imgList.length - 1; i++) {
      setTimeout(() => {
        imgList[imgList.length - (i + 1)].classList.remove("active");
        //플래그정리

        if (i == imgList.length - 2) {
          imgFlag = false;
          document.querySelector("body").style.overflow = "";
        }
      }, i * 500);
    }
  } else {
    imgFlag = true;
    document.querySelector("body").style.overflow = "hidden";
    window.scrollTo(0, pos)
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
