/* this is script file  */
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {
        fullWidth: true,
        indicators: true
    });
});