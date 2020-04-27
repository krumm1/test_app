$('.app-slider').slick({
    arrows: false,
    dots: true,
    variableWidth: true,
    swipeToSlide: true,
    waitForAnimate: false
});
$('.app-cats').on('click', '.app-cats-item', function () {
    $(this).toggleClass('active');
});