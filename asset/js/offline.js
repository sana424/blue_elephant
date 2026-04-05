const offline = document.querySelector("#offline");
const offlineIntro = offline.querySelector(".sec_intro");
const introCurtain = offline.querySelector(".curtain");

const offlineStoreList = offline.querySelector(".store_list");

const offlineStors = offline.querySelectorAll(".store_list .store");
const offlineBackImg = offline.querySelector(".back_img");

const footer = offline.querySelector('.footer');

gsap.to(introCurtain, {
  x: "100%",
  scrollTrigger: {
    trigger: offlineIntro,
    start: `top top`,
    end: `top+=${2500}px top`,
    scrub: true,
  },
});

gsap.to(offlineStoreList, {
  "--translate": "0%",
  scrollTrigger: {
    trigger: offlineIntro,
    start: `top+=${3500}px top`,
    end: `top+=${5000}px top`,
    scrub: true,
  },
});

ScrollTrigger.create({
  trigger: offlineIntro,
  start: `top+=${6000}px top`,
  onEnter: () => {
    offlineBackImg.style.display = "none";
    footer.style.display = "block";
  },
  onEnterBack: () => {
    offlineBackImg.style.display = "";
    footer.style.display = "";
  },
  onLeaveBack: () => {
    offlineBackImg.style.display = "";
    footer.style.display = "";
  },
});

gsap.to(offlineStoreList, {
  "--translate": "-100%",
  scrollTrigger: {
    trigger: offlineIntro,
    start: `top+=${7000}px top`,
    end: `bottom bottom`,
    scrub: true,
    onEnter : ()=> {
      offlineStoreList.style.pointerEvents = 'none';
    },
    onLeave : ()=>{
      offlineStoreList.style.pointerEvents = 'none';
    },
    onLeaveBack : ()=>{
      offlineStoreList.style.pointerEvents = '';
    },
    onEnterBack: ()=>{
      offlineStoreList.style.pointerEvents = 'none';
    }

  },
});

const shopUrlList = [
  "https://naver.me/FxFt3h1y", //도산
  "https://naver.me/F6lTvhTO", //연남
  "https://naver.me/5T4AN9ul", //명동
  "https://naver.me/xnh0Pmir", //한남
];

offlineStors.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    if (!item.classList.contains("active") && e.target !== e.currentTarget) {
      item.classList.add("active");
    }
  });

  item.querySelector(".shop_btn").addEventListener("click", (e) => {
    e.stopPropagation();
    window.open(shopUrlList[index]);
  });

  item.querySelector(".back_btn").addEventListener("click", (e) => {
    e.stopPropagation();
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    }
  });
});

const SHOWROOMS = [
  {
    mapId: "map-hannam",
    name: "한남 쇼룸",
    address: "서울 용산구 이태원로54길 48 3층",
    lat: 37.5363376,
    lng: 127.0012545,
  },
  {
    mapId: "map-myeongdong",
    name: "명동 쇼룸",
    address: "서울 중구 명동8길 8-7 1층~4층",
    lat: 37.5632285,
    lng: 126.9840849,
  },
  {
    mapId: "map-yeonnam",
    name: "연남 쇼룸",
    address: "서울 마포구 양화로23길 30 2층",
    lat: 37.5597239,
    lng: 126.9249771,
  },
  {
    mapId: "map-dosan",
    name: "도산 쇼룸",
    address: "서울 강남구 선릉로153길 32 2층",
    lat: 37.5248184,
    lng: 127.036808,
  },
];

function initMap() {
  SHOWROOMS.forEach((loc) => {
    const map = new google.maps.Map(document.getElementById(loc.mapId), {
      center: { lat: loc.lat, lng: loc.lng },
      zoom: 16,
    });

    const marker = new google.maps.Marker({
      position: { lat: loc.lat, lng: loc.lng },
      map,
      title: loc.name,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `<strong>${loc.name}</strong><br>${loc.address}`,
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  });
}
initMap();
