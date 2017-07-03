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