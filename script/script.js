$(document).ready(function () {
    function blink() {
        $('.blink').fadeOut();
        $('.blink').fadeIn();
    }
    setInterval(blink, 1000);
});

$('#nav-hide').on('click touchstart', function () {
    $('div#navigation').addClass('off');
    // $('div#navigation').addClass('slide');
    $('div#canvas').addClass('canvasbutton');
});

$('#nav-show').on('click touchstart', function () {
    $('div#navigation').removeClass('off');
    // $('div#navigation').removeClass('slide');
    $('div#canvas').removeClass('canvasbutton');
});




