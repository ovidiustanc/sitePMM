$(document).ready(function () {
  $('.slide_right').click(function () {
    $('.rec').animate({ left: '250px' });
    $('.rec').addClass('green');
  });
});
