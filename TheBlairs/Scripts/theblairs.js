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


});




$(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
        $(this).collapse('hide');
    }
});