/**
 * Created by max on 2017/2/17.
 */

$(document).ready(function() {

    $("#owl-biography").owlCarousel({
        autoPlay: 5000, //Set AutoPlay to 3 seconds

        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
    });

    $('.outter').each(function(i) {
        var imgbox = $(this).find('.hover');
        $(this).mouseover(function() {
            imgbox.css('display', 'block');
            imgbox.removeClass('animated fadeOut');
            imgbox.addClass('animated fadeIn');
        }).mouseleave(function() {
            imgbox.removeClass('animated fadeIn');
            imgbox.addClass('animated fadeOut');
        });
    });
});

