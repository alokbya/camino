$(document).ready(function() {

    // alert('jquery does work!');

});

// Cache the div so that the browser doesn't have to find it every time the window is resized.
var $div = $('.top-map');

// Run the following when the window is resized, and also trigger it once to begin with.
$(window).resize(function () {
   // Get the current height of the div and save it as a variable.
   var height = $div.height();
   // Set the font-size and line-height of the text within the div according to the current height.
   $div.css({
      'font-size': (height/2) + 'px',
      'line-height': height + 'px'
   })
}).trigger('resize');​