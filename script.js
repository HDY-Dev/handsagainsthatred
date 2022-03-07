var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-fixed'
});


const content = document.getElementsByClassName('skew-scroll');

let currentPos = window.pageXOffset;

const update = () => {
  const newPos = window.pageYOffset;
  const diff = newPos - currentPos;
  const speed = diff * 0.15;

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



