$(document).ready(function(){

});
var slideIndex = 1;
showSlides(slideIndex);
function SljedeciSlajd(x){
    showSlides(slideIndex += x);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideSlika");
  if (n > slides.length) 
  {
      slideIndex = 1;
}
  if (n < 1) {
      slideIndex = slides.length;
    }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}