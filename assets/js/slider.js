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

// Slide de Depoimentos (inicio)

var slideIndex = 1;
showSlides(slideIndex);

setInterval(function () {
  plusSlides(1);
}, 10000);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Slide de Depoimentos (Fim)
