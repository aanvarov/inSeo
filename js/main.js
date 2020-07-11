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


});