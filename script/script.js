/***  Navigation Hide/Show ***/

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

/*** _____________________ ***/




/***  Work Toggle Section ***/


var UIController = (function() {
    
    var DOMstrings = {
        activeTitle: '#active-work-title',
        unactiveTitle: '#unactive-work-title',
        workToggleBtn: '#work-toggle',
        graphicDesignSec: '#graphic-design',
        webDevSec: '.work-container'

    };

    return {
        getDOMstrings: function () {
            return DOMstrings;
        }
    };

})();

var controller = (function(UICtrl) {

    /* Public variables */
    var toggler = 0;
    var DOM;
    /* ___________ */


    var setupEventListeners = function() {
        DOM = UICtrl.getDOMstrings();

        $(DOM.workToggleBtn).on('click', workToggler);
    };


    function workToggler() {

        if (toggler === 0) {
            $(DOM.activeTitle).html('Graphic Design');
            $(DOM.unactiveTitle).html('Web Development');
            $(DOM.graphicDesignSec).css('display', 'block');
            $(DOM.webDevSec).css('display', 'none');

            toggler++;

        } else if (toggler === 1) {
            $(DOM.activeTitle).html('Web Development');
            $(DOM.unactiveTitle).html('Graphic Design');
            $(DOM.graphicDesignSec).css('display', 'none');
            $(DOM.webDevSec).css('display', 'block');

            toggler--;
        }
    }

    return {
        init: function() {
            $(document).ready(function () {
                toggler = 0;
            });
            setupEventListeners();
        }
    };

})(UIController);

controller.init();

/*** _____________________ ***/




/*** Blinking Text ***/

$(document).ready(function () {
    function blink() {
        $('.blink').fadeOut();
        $('.blink').fadeIn();
    }
    setInterval(blink, 3000);
});
/*** _____________________ ***/



