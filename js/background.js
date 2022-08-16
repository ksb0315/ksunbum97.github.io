// const images = [
//     "img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"
// ];

// const chosenImg = images[Math.floor(Math.random() * images.length)];
// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImg}`;

// document.body.appendChild(bgImage);

const body = document.querySelector("body");
 
const IMG_NUMBER = 5;
 
function paintImage(imgNumber) {
  const image = new Image();
  image.src = `img/img${imgNumber + 1}.jpg`; // 가져올 image경로 지정
  image.classList.add("bgImage"); // image에 bgImage 클래스 추가 
  body.appendChild(image); // body의 자식에 image추가
}
 
function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}
 
function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}
 
init();