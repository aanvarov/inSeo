$(document).ready(function () {
    // popup function
    function popupClose() {

        $('.popup').fadeOut().delay(400);
        $('.overlay').fadeOut().delay(400);
        $('body').removeClass('overflow');

    };

    $('.closeBtn, .overlay').click(function () {
        popupClose()
    });

    function popup() {

        $('.popup').slideDown(300).fadeIn().delay(600);
        $('.overlay').slideDown(300).fadeIn().delay(600);
        $('body').addClass('overflow');


        document.onkeydown = function (e) {
            if (e.keyCode == 27) {
                popupClose();
                return false;
            }
        };

    };

    $('.popupReq').on('click', (e) => {
        e.preventDefault();
        popup();
    });


    window.addEventListener('scroll', () => {

        if ($(window).width() < 768) {
            if ($(window).scrollTop() > 40) {
                $('.navigation').addClass('fixed');
                $('.hero').addClass('marginTop');
            } else {
                $('.hero').removeClass('marginTop');
                $('.navigation').removeClass('fixed');
            }
        }

        if ($(window).scrollTop() > 1000) {
            $('#back-to-top').fadeIn(300).css('display', 'block');
        } else {
            $('#back-to-top').fadeOut(300);
        }
    });

    $('#back-to-top').on('click', (e) => {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 });
        return false;
    });

    // if ($(window).width() < 769) {
    //     $('.priceList').slick({
    //         dots: true,
    //         speed: 300,
    //         slidesToShow: 1,
    //         arrows: true,
    //         prevArrow: "<img class='slick-prev' src='img/angleLeft.svg'>",
    //         nextArrow: "<img class='slick-next' src='img/angleRight.svg'>"
    //     });
    // }


});