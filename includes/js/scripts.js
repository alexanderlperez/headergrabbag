$( document ).ready(function() {

    "use strict";

    // make elements full-screen, allowing for offset sizes set in data-offset attrs
    function fullScreen() {
        $('.full-screen').each(function() {
            var offset = $(this).data('offset');
            var height = parseInt(offset) ? $(window).height() - offset : $(window).height();
            $(this).css('height', height);
        });
    }

    fullScreen(); // initial resizing of full-screen sections
    $(window).resize(fullScreen);

    // set the background image of .hero elements
    $('.hero').each(function () {
        $(this).css({
            'background-image': 'url('+$(this).data('hero-bg')+')',
            'background-size': 'cover'
        });
    });

    // trigger the header animations when scrolling up/down
    Scroll_Trigger({
        triggerPosition: 1,
        triggerUpCallback: function () { 
            $('.mobile-toggle-btn').removeClass('sticky-nav');
            $('#navigation').removeClass('sticky-nav'); 
            $('.post-header').stop(true, true).fadeIn(200);

            $('.logo-wrap .logo-alt').hide();
            $('.logo-wrap .logo').stop(true, true).fadeIn(400);
        },  
        triggerDownCallback: function () {
            $('.mobile-toggle-btn').addClass('sticky-nav');
            $('#navigation').addClass('sticky-nav');
            $('.post-header').stop(true, true).fadeOut(200);

            $('.logo-wrap .logo').hide();
            $('.logo-wrap .logo-alt').stop(true, true).fadeIn(800);
        }
    });

    // handle the mobile toggle button
    $('.mobile-toggle-btn').click(function () {
        $(this).toggleClass('active');
    });

    // edited from https://css-tricks.com/snippets/jquery/smooth-scrolling/
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {

            var scrollTarget;

            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

                if (target.length) {
                    scrollTarget = target.data('offset') ? target.offset().top - parseInt(target.data('offset')) : target.offset().top;

                    $('html,body').animate({
                        scrollTop: scrollTarget
                    }, 300);

                    return false;
                }
            }
        });
    });

});

// up-to-date version at http://github.com/alexanderlperez/ScrollTrigger
var Scroll_Trigger = function (options) {

    var $window = $(window);
    var triggerDownCallback = options ? options.triggerDownCallback : function () {};
    var triggerUpCallback = options ? options.triggerUpCallback : function () {};
    var triggerPos = options ? options.triggerPosition : 0;
    var lastTriggerDirection = 'up'; 
    var lastPos = $window.scrollTop();

    function getDir() {
        return $window.scrollTop() >= lastPos ? 'down' : 'up';
    }

    function isTriggered() {
        if (getDir() === 'down') {
            return $window.scrollTop() > triggerPos;
        } else if (getDir() === 'up') {
            return $window.scrollTop() < triggerPos;
        }
    }

    $window.scroll(function () {
        if (isTriggered()) {
            switch (getDir()) {
                case 'down': 
                    if (lastTriggerDirection === 'up') {
                        triggerDownCallback();
                        lastTriggerDirection = 'down';
                    }
                    break;

                case 'up':
                    if (lastTriggerDirection === 'down') {
                        triggerUpCallback();
                        lastTriggerDirection = 'up';
                    }
                    break;
            }
        }
        lastPos = $window.scrollTop();
    });

}


