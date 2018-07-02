/* Hide Menu on first page load */

$(document).ready(function() {
    $('.navbar').hide();
});

$(window).scroll(function(){
    $('.navbar').show();
});

/* Show & Hide Menu on Scroll */
$(document).ready(function(){

    'use strict';

    $(window).scroll(function(){

        'use strict';

        if($(window).scrollTop() < 80 ) {

            $('.navbar').css ({
                'margin-top': '-100px',
                'opacity': '0'
            });

            $('.navbar-default').css ({
                'background-color': 'rgba(59, 59, 59, 0)'

            });

        }   else {
            $('.navbar').css ({
                'margin-top': '0px',
                'opacity': '1'
        });

        $('.navbar-default').css ({
            'background-color': 'rgba(245, 245, 245, 0.8)',
            'border-color': 'rgba(18, 156, 243, 0.1)'

        });

        $('navbar-brand img').css({
            'height': '35px',
            'padding-top': '0px'

        });

        $('navbar-nav > li > a').css({
            'padding-top': '15px'


        });

    }

    });

});


// add smooth scrolling
$(document).ready(function() {
                $('.nav-item, #scroll-to-top')
                // Remove links that don't actually link to anything
                .not('[href="#"]')
                .not('[href="#0"]')
                .click(function(event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
                    && 
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /* active menu item on click */
    $(document).ready(function() {

        'use strict';

        $('.navbar-nav li a').click(function(){

            'use strict';
            
             $('.navbar-nav li a').parent().removeClass("active");

             $(this).parent().addClass("active");

        });
    });

// highlight menu item on scroll
$(document).ready(function() {

    'use strict';

    $(window).scroll( function() {

        'use strict';

        $("section").each(function() {

            'use strict';

            var bb = $(this).attr("id"); // ABOUT, CONTACT, DONWLOAD, CONTACT
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 70;

            if($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {

                $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
            } else {
                $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");

            }
        });

    });


});

// add auto padding to header on front page

$(document).ready(function(){
    'use strict';

    setInterval( function (){

        'use strict';

        var containerHeight = $(".header-container").height();
        var boxHeight = $(".header-pad2").height();
        var windowHeight = $(window).height();

        var padTop = windowHeight - (boxHeight + containerHeight);

        $(".header-container").css({

            'padding-top': '10px',
            'padding-bottom': '10px'
        });
        
        $(".header-pad").css({
            'padding-bottom': padTop + 'px'
        });


    
      /* $(".header-container").css({

            'padding-top': Math.round( padTop / 12) + 'px',
            'padding-bottom': Math.round( padTop / 12) + 'px'
        });*/

    

    }, 10)

});

// Add BX slider to screens

$(document).ready(function(){

    $('.bxslider').bxSlider({
        slideWidth: 400,
        auto: true,
        adaptiveHeight: true,
        minSlides: 1,
        maxSlides: 3,
        slideMargin: 50
        
    });

    $('.bxslider2').bxSlider({
        slideWidth: 300,
        auto: true,
        minSlides: 1,
        maxSlides: 4,
        slideMargin: 0
    });

});

// Add counter

$(document).ready(function() {

    $('.counter-num').counterUp({
        delay:10,
        time: 1000

    });

});

// Add animation/wow library
$(document).ready(function() {

    'use strict';
    new WOW().init();

});

// JQuery UI 

$(document).ready(function() {
    $("#radio").controlgroup();

    $("input[type='checkbox']").checkboxradio();

    $("#radio3").controlgroup();

});

//Cost Calculator

$(document).ready(function() {
    $('.option').click(function() {
        
        var total = 0;

        $('.option:checked').each(function(){

            total += parseInt($(this).val());

        });

        $('#total').html('Total Cost' + '  Rs. ' + total + '</br><p> The cost calculated above is an estimate only. </br>For a more accurate figure, please get in touch! </p>');
    });
});
