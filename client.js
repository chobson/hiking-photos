const contentful = require('contentful');
var client = contentful.createClient({
space: '8bcjenbuioqi',
accessToken: '4zfBN9IWHFcmq-3-ERd1f2XW5tBuvPSFsVqslSRjBsU',
})
var slideIndex = 1;

client
.getAssets()
.then(function (assets) {
  assets.items.map(function (asset) {
    var imageURL = 'https:' + asset.fields.file.url;
    console.log(imageURL);
  });
  var imagesDiv = document.getElementById('images');
  var buttonsDiv = document.getElementById('buttons');

var negative = document.createElement("a");
negative.className = "prev"
negative.id = -1;
negative.onclick = plusSlides;
negative.innerHTML = "&#10094;";
imagesDiv.appendChild(negative);

assets.items.forEach(function (asset, index) {
  var imageDiv = document.createElement("div");

  var imageURL = 'https:' + asset.fields.file.url + '?w=400';
  var imageFile = document.createElement("img");
  imageFile.src = imageURL;

  imageDiv.className = "hikingPhoto fade";

  var numberDiv = document.createElement("div");
  numberDiv.className = "numbertext"
  numberDiv.innerHTML = (index+1) + " / " + assets.items.length;

  imageDiv.appendChild(imageFile);
  imageDiv.appendChild(numberDiv);

  imagesDiv.appendChild(imageDiv);


  var button = document.createElement("span");
  button.id = index+1;
  button.className = "dot";
  button.onclick = currentSlide;
  buttonsDiv.appendChild(button);

  });

var positive = document.createElement("a");
positive.className = "next"
positive.id = 1;
positive.onclick = plusSlides;
positive.innerHTML = "&#10095;";
imagesDiv.appendChild(positive);

showSlides();

})
.catch(function (e) {
  console.log(e);
});


// Next/previous controls
function plusSlides() {
  slideIndex += parseInt(this.id);
  showSlides();
}

// Thumbnail image controls
function currentSlide() {
  slideIndex = parseInt(this.id);
  showSlides();
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("hikingPhoto");
  var dots = document.getElementsByClassName("dot");

  console.log("slides: " + slides.length + ", dots: " + dots.length + " slideIndex: " + slideIndex);

  if (slideIndex > slides.length) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}