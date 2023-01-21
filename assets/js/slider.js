let timer = 3000; //  segundos
let currentImage = 0; // Imagem atual
const images = document.querySelectorAll("#slider img");
const max = images.length; // quantidade total de imagens

function nextImage() {

  images[currentImage].classList.remove("selected");
  currentImage++;
  if (currentImage >= max) {
    currentImage = 0;
  }
  images[currentImage].classList.add("selected");

}

function start() {
  setInterval(nextImage, timer);
}

window.addEventListener("load", start);
