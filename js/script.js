$('.app-slider').slick({
    arrows: false,
    dots: true,
    variableWidth: true,
    swipeToSlide: true
});
$('.app-cats').on('click', '.app-cats-item', function () {
    $(this).toggleClass('active');
})