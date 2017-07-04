/// <reference path="bootstrap.min.js" />
/// <reference path="jquery-3.1.1.min.js" />
$(function () {

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("data-gallery") // activated tab
        $(target).nanogallery2('refresh');
    })


    $('.collapse').on('shown.bs.collapse', function (e) {
        var target = $(e.target).attr("data-gallery") // activated tab
        $(target).nanogallery2('refresh');
    })


    $('.cd-read-more').on('click', function (e) {



        var menu = $(this).attr("menu-target");
       // alert('menu is:' + menu);
        var menu$ = $(menu);
        var target = $(this).attr("data-target");
       // alert('target is:' + target);
        var target$ = $(target);


       // alert('menu being clicked');
        /*
        menu$.click(function () {
            alert('menu clicked');
            $('#child-annie').click();

            $('#child-annie').click();
            //return false;
        });*/
        menu$.click();
        var targetHref = target$.attr("href");
        //alert('href:' + targetHref);

        var targetHref$= $(targetHref)
        if (!$(targetHref$).is(":visible")) {
            target$.click();
        }

        return false;
    })


});




$(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
        $(this).collapse('hide');
    }
});