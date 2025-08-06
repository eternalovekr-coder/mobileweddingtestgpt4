// 계좌 복사
function copyAccount(account) {
  navigator.clipboard.writeText(account).then(() => {
    const toast = document.getElementById("toast");
    toast.className = "show";
    setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
  });
}

// 맵 전환
function showMap(type) {
  const kakaoMap = document.getElementById("kakao-map");
  const naverMap = document.getElementById("naver-map");
  const buttons = document.querySelectorAll(".map-tabs button");

  if (type === "kakao") {
    kakaoMap.style.display = "block";
    naverMap.style.display = "none";
    buttons[0].classList.add("active");
    buttons[1].classList.remove("active");
  } else {
    kakaoMap.style.display = "none";
    naverMap.style.display = "block";
    buttons[1].classList.add("active");
    buttons[0].classList.remove("active");
  }
}

// Lightbox
const galleryImages = document.querySelectorAll(".gallery-slider img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
let currentIndex = 0;

galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    openLightbox(index);
  });
});

function openLightbox(index) {
  lightbox.style.display = "flex";
  currentIndex = index;
  lightboxImage.src = galleryImages[currentIndex].src;
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function changeSlide(n) {
  currentIndex += n;
  if (currentIndex < 0) currentIndex = galleryImages.length - 1;
  if (currentIndex >= galleryImages.length) currentIndex = 0;
  lightboxImage.src = galleryImages[currentIndex].src;
}

// ESC로 닫기
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});
