$(function () {
    var str = '#len'; //increment by 1 up to 1-nelemnts
    $(document).ready(function () {
        var i, stop;
        i = 1;
        stop = 5; //num elements
        setInterval(function () {
            if (i > stop) {
                return;
            }
            $('#len' + (i++)).toggleClass('bounce');
        }, 500)
    });

});
$(document).ready(function () {
    $('.slideshow').slick({
        dots: true,
        centerPadding: '60px',
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});
$(window).on('resize orientationchange', function () {
    $('.js-slider').slick('resize');
});

$('#bologna-list a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
})
