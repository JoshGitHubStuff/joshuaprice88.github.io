//Creating the Menu Click Function
$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });
    //causes nav page to close with click on link
    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });
    //page will scroll to what section is clicked
    $('a[href*="#"]').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        },  1500);
    });
    //scrolls back to top of page after click
    $('#up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        },  800);
    });

});