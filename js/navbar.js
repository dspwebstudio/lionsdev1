//adding background blue on navbar
$(document).ready(function() {
    $(window).scroll(function() {
        $(this).scrollTop() > 420 ? $(".navbar").addClass("solid") : $(".navbar").removeClass("solid");
        $(this).scrollTop() == 0 ? $(".footer-button-back").addClass("d-none") : $(".footer-button-back").removeClass("d-none");
    })
});
$('.navbar-toggler').click(function () { 
    $('.navbar-collapse').addClass('solid');

});
$('.dropdown-item').click(function () { 
    $('.navbar-toggler').click();
    $('.navbar').css('height', '72px');
});
