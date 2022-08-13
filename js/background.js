const images = [
    "img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"
];

const chosenImg = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImg}`;

document.body.appendChild(bgImage);