// app.js

$(document).ready(function(){
  $('.single-item').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      slidesToShow: 1,
      slidesToScroll: 1
  });

  window.onscroll = function (event) {
    scrollDist = $('body').scrollTop();
    if ($('body').width() > 500) {
      $('#my-headshot').css('transform','rotate('+scrollDist+'deg)');
    }
  };

});
