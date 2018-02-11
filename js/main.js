(function ($) {
    "use strict";

    $(window).on('load', function(){

    });      
    
	jQuery(document).ready(function($){
        $('.header-slider').slick({
            autoplay: true,
            fade: true,
            arrows: false
        });

        $('.editor-pick-slider').slick({
            autoplay: false,
            arrow: false
        });

        $('.menu-bars').on('click', function () {
             $('.side_menu').toggleClass('hide');
        });

    });


})(jQuery);

