
//Set up slideindex variable to keep track of what slide the slideshow is on
let slideIndex = 1

//On start makes sure  first image is visible
function initializeImage() {
    currentSlide(1)
}

//Makes the current slide shown a different one
function plusSlides(n) {
    showSlides(slideIndex += n);
}
//Changes current slide shown
function currentSlide(n) {
    showSlides(slideIndex = n);
}

//Function to show only one slide
function showSlides(n) {
    let i;
    //Gets all slide elements from html
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("pageDot")
    //if  current index greater  than amount, loop back to one
    if (n > slides.length) {
        slideIndex = 1
    }
    //If  current index less than  one, loop back to end slide
    if (n < 1) {
        slideIndex = slides.length
    }
    //Makes all slides visible  and all dots not active
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      //Makes only current slide  and page dot visible and  active
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
    }
