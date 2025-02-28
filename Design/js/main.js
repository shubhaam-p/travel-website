(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
   

    // $('.to-packages').click(function () {
    //     if(!window.location.href.includes('index.html'))
    //     window.location='index.html#TourPackages'
    //     let h = $(window).height();
    //     let sh = 0;
    //     if(h > 528){
    //         sh = 750
    //     }else
    //         sh = 400
    //     console.log("scroll")
    //     $('html, body').animate({scrollTop: sh}, 1500, 'easeInQuad');
    //     return false;
    // });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    $(document).ready(function() {
        $(".modal-trigger").click(function() {
            var imgSrc = $(this).attr("src");
            $("#modalImage").attr("src", imgSrc);
            $("#imageModal").modal("show");
        });
    });

})(jQuery);

