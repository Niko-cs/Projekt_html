let slideIndex = 0;
showSlides();

function showSlides() {
  let i;

  let slides = document.getElementsByClassName("banner-image");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  } //fsheh gjithe imazhet 

  slides[slideIndex].style.display = "block"; //shfaq imazhin

  slideIndex++;

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } //ben loop kur arrihet te imazhi i fundit

  setTimeout(showSlides, 5000);//pret 5s para se te rifiloj
}