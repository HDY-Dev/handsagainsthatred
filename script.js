// var loading;

// function preloader() {
//   loading = setTimeout(showPage, 4000);
// }

// function showPage() {
//   document.getElementById('loading-block').style.display = "none";
//   document.getElementById('page-wrapper').style.display = "block";
//   document.getElementById('navigation').style.display = "block";
// }

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


const content = document.getElementsByClassName('skew-scroll');

let currentPos = window.pageXOffset;

const update = () => {
  const newPos = window.pageYOffset;
  const diff = newPos - currentPos;
  const speed = diff * 0.20;

  for (var i = 0; i < content.length; i++){
    content[i].style.transform = `skewY(${ speed }deg)`;
  }
  
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


$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
  if ($('#overflow-on').isInViewport()) {
      // document.getElementById('page-wrapper').style.overflowX = "scroll";
      document.body.style.overflowX = "scroll";
  } else {
      // document.getElementById('page-wrapper').style.overflowX = "hidden";
      document.body.style.overflowX = "hidden";
  }
});



