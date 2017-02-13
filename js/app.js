/**
 * Created by max on 2017/2/7.
 */

var timeOut;

$(document).ready(function() {

    $('.list-item').each(function(index) {
        var node = $(this);
        node.mouseover(function() {
            timeOut = setTimeout(function() {
                node.animate({
                    'margin-left': -300,
                    'opacity': 1
                }, 300);
            }, 200);

        }).mouseout(function() {
            node.animate({
                'margin-left': 0,
                'opacity': .5
            }, 300);
            clearTimeout(timeOut);
        });
    })


    // $('.owl-bg').owlCarousel({
    //     animateOut: 'slideOutDown',
    //     animateIn: 'flipInX',
    //     items: 1
        
    // });


});
