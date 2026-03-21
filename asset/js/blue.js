const blue = document.querySelector("#blue");
const blueBottomTxt = document.querySelector("#blue .bottom_text");
const bgVideoBlue = document.querySelector("#videoLogo .bg_video_blue");
const circle = document.querySelector(".circles .circle.center");

let BTWidth = blueBottomTxt.getBoundingClientRect().width;

const textAni = document.querySelector(".text_ani");
const pathsNode = document.querySelectorAll("#signature path");

// ✅ 왼→오 방향으로 보이게: x좌표 기준 정렬
const paths = [...pathsNode].reverse();

let played = false;

function resetPaths() {
  console.log("reset");
  paths.forEach((path) => {
    const length = path.getTotalLength();
    path.style.transition = "none";

    path.style.strokeDasharray = length;

    // ✅ 방향 뒤집기: -length에서 시작
    path.style.strokeDashoffset = length;

    // ✅ fill은 숨기고(갑자기 채워지는 느낌 방지)
    path.style.fillOpacity = "0";
    path.style.strokeOpacity = "1";
  });

  // reflow 한번
  played = false;
  void textAni.offsetHeight;
}

function drawPaths() {
  if (played) return;
  played = true;

  const baseDur = 0.5; // 기본값 2.8 (필기느리게)
  const gap = 0.18; // 기본값 0.12 (등장은 빠르게)

  paths.forEach((path, i) => {
    const length = path.getTotalLength();
    path.style.transition =
      `stroke-dashoffset ${baseDur}s linear ${i * gap}s, ` +
      `fill-opacity 0.55s ease ${i * gap + baseDur - 0.2}s, ` +
      `stroke-opacity 0.55s ease ${i * gap + baseDur - 0.2}s`;
  });

  requestAnimationFrame(() => {
    paths.forEach((path) => {
      path.style.strokeDashoffset = "0"; // ✅ 그려짐
      path.style.fillOpacity = "1"; // ✅ 부드럽게 채움
      path.style.strokeOpacity = "0"; // ✅ stroke는 사라지게
    });
  });
}

ScrollTrigger.create({
  trigger: blue,
  start: `top-=${300}px top`,
  onEnter: () => {
    blueBottomTxt.classList.add("dis_left");
  },
  onEnterBack: () => {
    blueBottomTxt.classList.remove("dis_left");
  },
  onLeaveBack: () => {
    blueBottomTxt.classList.remove("dis_left");
  },
});

gsap.to(bgVideoBlue, {
  width: "2000vw",
  height: "2000vh",
  // x: '0.5%',
  scrollTrigger: {
    trigger: blue,
    start: `top+=${1080}px top`,
    end: `top+=${2300}px top`,
    scrub: true,
    onLeave: () => {
      bgVideoBlue.classList.add("hidden");
    },
    onEnterBack: () => {
      bgVideoBlue.classList.remove("hidden");
    },
    onEnter: () => {
      bgVideoBlue.classList.remove("hidden");
    },
  },
});
gsap.to(bgVideoBlue, {
  x: "6%",
  scrollTrigger: {
    trigger: blue,
    start: `top+=${2300}px top`,
    end: `top+=${3500}px top`,
    scrub: true,
    onLeave: () => {
      drawPaths();
    },
    onEnter: () => {
      resetPaths();
    },
    onEnterBack: () => {
      resetPaths();
    },
  },
});

// ── YouTube Video Control (postMessage) ──
const ytIframe = document.querySelector("#ytplayer");
let videoShouldPlay = false;

// function ytCommand(func, args) {
//   if (!ytIframe || !ytIframe.contentWindow) return;
//   ytIframe.contentWindow.postMessage(
//     JSON.stringify({
//       event: "command",
//       func: func,
//       args: args || [],
//     }),
//     "*",
//   );
// }

// iframe 로드 후 0.001초에서 정지 (첫 프레임 표시)
// ytIframe.addEventListener("load", () => {
//   setTimeout(() => {
//     ytCommand("seekTo", [0.001, true]);
//     ytCommand("pauseVideo");
//   }, 1000);
// });

// ── mask_logo Mask-Size Animation ──
const maskLogo = document.querySelector("#videoLogo .mask_logo");

gsap.fromTo(
  maskLogo,
  { "--ms": 70 },
  {
    "--ms": 5000,
    scrollTrigger: {
      trigger: blue,
      start: `top+=${4500}px top`,
      end: `top+=${8500}px top`,
      scrub: true,
      onLeave: () => {
        // 화면 전체 가려짐 → 마스크 제거 + 재생
        videoShouldPlay = true;
        maskLogo.classList.add("fullvideo");
        ytIframe.currentTime = 0.001;
        ytIframe.play();
      },
      onEnterBack: () => {
        // 스크롤 복귀 → 정지 + 마스크 복원
        videoShouldPlay = false;
        maskLogo.classList.remove("fullvideo");
        ytIframe.currentTime = 0.001;
        ytIframe.pause();
        console.log("stop");
      },
      onEnter: () => {
        videoShouldPlay = false;
        maskLogo.classList.remove("fullvideo");
        ytIframe.currentTime = 0.001;
        ytIframe.pause();
        console.log("stop");
      },
    },
  },
);


// curtain 
const curtain = document.querySelector('#videoLogo .curtain');

gsap.to(curtain, {
  left: '0',
  scrollTrigger : {
    trigger : blue,
    start : `top+=${9500}px top`,
    end : `bottom bottom`,
    scrub : true
  }
})