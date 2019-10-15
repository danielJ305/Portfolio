$(document).ready(function () {
    function blink() {
        $('.blink').fadeOut();
        $('.blink').fadeIn();
    }
    setInterval(blink, 1000);
});


