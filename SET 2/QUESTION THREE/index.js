let imagePosition = 1;
displayImage(imagePosition);

// Next/previous controls
function moveImages(image) {
  displayImage((imagePosition += image));
}

// Thumbnail image controls
function currentImage(image) {
  displayImage((imagePosition = image));
}

function displayImage(image) {
  let i;
  let slides = document.getElementsByClassName("images");
  let position = document.getElementsByClassName("position");
  if (image > slides.length) {
    imagePosition = 1;
  }
  if (image < 1) {
    imagePosition = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < position.length; i++) {
    position[i].className = position[i].className.replace(" active", "");
  }
  slides[imagePosition - 1].style.display = "block";
  position[imagePosition - 1].className += " active";
}