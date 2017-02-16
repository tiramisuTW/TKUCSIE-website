
///////////// Courses Infomation's Image Box Animation
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

$(document).ready(function() {

  $('.outter').each(function(i) {
    var imgbox = $(this).find('.hover');
    $(this).mouseover(function() {
      imgbox.css('display', 'block');
      imgbox.addClass('animated fadeIn');
    }).mouseleave(function() {
      imgbox.addClass('animated fadeOut').one(animationEnd, function() {
          imgbox.removeClass('animated fadeIn');
          imgbox.removeClass('fadeOut');
          imgbox.css('display', 'none');
        });
    });
  });

});
///////////// Courses Infomation's Image Box Animation End