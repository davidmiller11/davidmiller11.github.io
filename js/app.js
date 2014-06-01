// app.js

$(document).ready(function() {
  // $('#my-name').hide();
  // $('#my-name').addClass('animated');
  // window.setTimeout(bounceIn, 2000);
  // window.setTimeout(bounceOut, 4000);
});

function bounceIn() {
  $('#my-name').show();
  $('#my-name').addClass('bounceIn');
}

function bounceOut() {
  $('#my-name').addClass('bounceOut');
}

$(document).ready(function() {
    $('section[data-type="background"]').each(function() {
        var $bgobj = $(this); // assigning the object
     
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
             
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';
 
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); 
    });    
});

$(document).ready(function(){
  $('.single-item').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
  });
});