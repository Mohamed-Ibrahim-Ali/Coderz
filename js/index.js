$(function () {

    $('header').height($(window).height());

    $('html').niceScroll({

        cursorcolor: '#ec3237'
    });
/*Start Scrolling*/

    $('.navbar-collapse a').click(function () {

         $(this).addClass('active').siblings().removeClass('active');

        $('html, body').animate({

            scrollTop: $('.'+ $(this).data('class')).offset().top
            
        }, 1000);

    });

    $('.button').click(function () {

        $('html, body').animate({

            scrollTop: $('.about').offset().top
        }, 1000);

    });

    $('.arrow a').click(function () {

        $('html, body').animate({

            scrollTop: $('.about').offset().top
        }, 1000);
    });

    $('.one').click(function () {

        $('html, body').animate({

            scrollTop: $('.work').offset().top
        }, 1000);

    });

    $('.two').click(function () {

        $('html, body').animate({

            scrollTop: $('.portfolio').offset().top
        }, 1000);

    });

    $('.three').click(function () {

        $('html, body').animate({

            scrollTop: $('.hire').offset().top
        }, 1000);

    });

/* End Scrolling*/

    $('.counter').counterUp({

        delay: 10,
        time: 2000
    });


/*Start Portfolio*/

    $('.portfolio ul li').click(function () {

       $(this).addClass('red').siblings().removeClass('red');

       if ($(this).data('class')==='all') {

        $('.portfolio .col-lg-4').show();

       } else {

        $('.portfolio .col-lg-4').hide();

        $('.'+ $(this).data('class')).show();
       }
    });
/*End Portfolio*/


$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
    }
}
});

/*Start Up*/
    $(window).scroll(function () {

        if ($(this).scrollTop()>= 200) {

            $('.up').show();
        } else {
            $('.up').hide();
        }
    });

    $('.up').click(function () {

        $('html, body').animate({scrollTop: 0}, 1000);

    });
/*End Up*/
});

/*Start Spinner*/
$(window).on('load', function () {

    $('.spinner').fadeOut(5000);


});
/*End Spinner*/