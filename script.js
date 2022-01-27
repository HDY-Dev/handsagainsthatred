$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


let line1 = document.getElementById('title1');

line1.addEventListener("mouseover", function(event) {
    event.target.style.color = "yellow";
}, false);

line1.addEventListener("mouseout", function(event) {
  event.target.style.color = "gray";
}, false);


let line2 = document.getElementById('title2');

line2.addEventListener("mouseover", function(event) {
    event.target.style.color = "yellow";
}, false);

line2.addEventListener("mouseout", function(event) {
  event.target.style.color = "gray";
}, false);

let line3 = document.getElementById('title3');

line3.addEventListener("mouseover", function(event) {
    event.target.style.color = "yellow";
}, false);

line3.addEventListener("mouseout", function(event) {
  event.target.style.color = "gray";
}, false);

let line4 = document.getElementById('title4');

line4.addEventListener("mouseover", function(event) {
    event.target.style.color = "yellow";
}, false);

line4.addEventListener("mouseout", function(event) {
  event.target.style.color = "gray";
}, false);

var timeout;

function preloader() {
  timeout = setTimeout(showPage, 3000);
};


function showPage() {
  document.getElementById('loading-block').style.display = "none";
  document.getElementById('page-wrapper').style.display = "block";
};


const content = document.querySelector('.skew-scroll');



let currentPos = window.pageXOffset;

const update = () => {
  const newPos = window.pageYOffset;
  const diff = newPos - currentPos;
  const speed = diff * 0.35;

  content.style.transform = `skewY(${ speed }deg)`;
  
  currentPos = newPos;

  requestAnimationFrame(update);
};


update();

contentX = document.getElementsByClassName('side-skew-scroll');



let currentPos2 = window.pageXOffset;

const update2 = () => {
  const newPos = window.pageYOffset;
  const diff = newPos - currentPos2;
  const speed = diff * 0.20;

  for (var i = 0; i < contentX.length; i++){
    contentX[i].style.transform = `skewX(${ speed }deg)`;
  }
  
  currentPos2 = newPos;

  requestAnimationFrame(update2);
};


update2();


function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (start - end) + end);

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

var loading;

function preloader() {
  loading = setTimeout(showPage, 4000);
}

function showPage() {
  document.getElementById('loading-block').style.display = "none";
  document.getElementById('page-wrapper').style.display = "block";
  document.querySelector('header').style.display = "block";
}


