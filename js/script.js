jQuery(function($) {
    function fixDiv() {
        var $cache = $('.c-details-right');
        if ($(window).scrollTop() > 150 && $(window).scrollTop() < $(document).height() - $(window).height() - $(".get-in-touch").outerHeight(true))
            $cache.css({
                'position': 'fixed',
                'top': '150px',
                'bottom': 'auto',
                'z-index': '33',
                'transition': 'all 1s'
            });
        else
            $cache.css({
                'position': 'relative',
                'top': 'auto',
                'bottom': 'auto',
                'transition': 'all 1s'
            });
    }
    $(window).scroll(fixDiv);
    fixDiv();
});


$('document').ready(function(){

    $('#nav-icn').click(function(){
        $(this).toggleClass('open');
    });

    $(window).on('scroll',function () {
        if($('.nb .navbar-toggler').hasClass('open')){
            $('.nb .navbar-toggler').click();
        }
    });


    var yourNavigation = $("header"),
        stickyDiv = "sticky",
        yourHeader = $('.head-bar').height();
    $(window).scroll(function() {
        console.log(yourHeader);
        if( $(this).scrollTop() > 45 ) {
            yourNavigation.addClass(stickyDiv);
        } else {
            yourNavigation.removeClass(stickyDiv);
        }
    });

});

function openBook() {
    document.getElementById("bookNowFixed").style.width = "360px";
}

function closeBook() {
    document.getElementById("bookNowFixed").style.width = "0";
}

function showSocial() {
    $('.res-social').toggleClass('new-social');
}
