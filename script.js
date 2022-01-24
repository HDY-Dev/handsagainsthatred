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