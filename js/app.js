// app.js

$( document ).ready(function() {
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