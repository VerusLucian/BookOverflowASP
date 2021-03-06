﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(() => {
    $("div.book-item").mouseover(function() {
        $(this).find("div.edit-remove").removeClass("hidden");
    });

    $("div.book-item").mouseout(function() {
        $(this).find("div.edit-remove").addClass("hidden");
    });

    $(".book-item .edit-remove .btn.remove").click(function() {
        $(this).closest(".book-item").next().removeClass("hidden");
        $(this).closest(".book-item").next().addClass("shown");
    });

    $(".remove-sector").click(function() {
        $(this).closest(".row.sb.select").next().removeClass("hidden");
        $(this).closest(".row.sb.select").next().addClass("shown");
    });

    $(".remove-course").click(function() {
        $(this).closest(".row.sb.select").next().removeClass("hidden");
        $(this).closest(".row.sb.select").next().addClass("shown");
    });
    
    $(".pop-up").click(function(e) {
        if($(".pop-up.shown").find(e.target).length == 0){
            $(this).addClass("hidden");
            $(this).removeClass("shown");
        }
    });

    $(".pop-up span.btn").click(function() {
        $(this).closest(".pop-up").addClass("hidden");
        $(this).closest(".pop-up").removeClass("shown");
    });

    $(document).keydown((e) => {
        if (e.key == "Escape") {
            $(".pop-up.shown").addClass("hidden");
            $(".pop-up.shown").removeClass("shown");
        }
    });
});