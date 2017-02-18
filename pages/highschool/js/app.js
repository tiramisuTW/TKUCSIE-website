/**
 * Created by max on 2017/2/17.
 */


// wow init
new WOW().init();



$(document).ready(function() {

    // gallery owl init
    $("#owl-gallery").owlCarousel({
        autoPlay: 1000,
        navigation: true,
        navigationText: false,
        pagination: false,

        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
    });


    // class hover fn
    $('.outter').each(function(i) {
        var imgbox = $(this).find('.hover');
        $(this)
            .mouseover(function() {
                imgbox.css('display', 'block');
                imgbox.removeClass('animated fadeOut-fast');
                imgbox.addClass('animated fadeIn-fast');
            })
            .mouseleave(function() {
                imgbox.removeClass('animated fadeIn-fast');
                imgbox.addClass('animated fadeOut-fast');
            });
    });

});

// section scroll nav
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});