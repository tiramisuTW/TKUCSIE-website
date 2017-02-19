/**
 * Created by max on 2017/2/17.
 */


// wow init
new WOW().init();

jQuery(function ($) { "use strict";
    
    /* ========================================================================= */
    /*  Page Preloader
    /* ========================================================================= */
    $.preload( 
        'img/header/header-bg.jpg',

        'img/header/H1.jpg',
        'img/header/H2.jpg',
        'img/header/123.jpg',
        'img/header/456.jpg',

        'img/gallery/gallery-photo1.jpg',
        'img/gallery/gallery-photo2.jpg',
        'img/gallery/gallery-photo3.jpg',

        'img/class/language.jpeg',
        'img/class/computer.jpeg',
        'img/class/internet.jpeg',
        'img/class/multi-media.jpeg',
        'img/class/software.jpeg',
        'img/class/AI&DM.jpeg',

        'img/five-years/five1.jpg',
        'img/five-years/fiveyears.png',
        'img/five-years/five-any.png',

        'img/int1.jpg'

    );



    window.onload = function () {
        document.getElementById('loading-mask').style.display = 'none';
    }

});

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