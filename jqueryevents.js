"use strict";

/* 
 Filename:    jqueryevents.js 
 Student:     Michael Grzesina (grzesinam) 
 Course:      CWEB 190 (Internet Programming/Web Applications 1) 
 Instructor:  Michael Grzesina/Ernesto Basoalto 
 Date:        2023-03-21 
 Purpose:     Demonstrate jQuery events
*/

$(function() {
    const firstPara = $("#firstPara");

    // See jqueryevents2.html and jqueryevents2.js for further changes...
    $("#italic").click(function() {
        $("p").addClass("special");
    });

    $("#bold").click(function() {
        $("p").addClass("bold");
    });

    $("#undecorate").click(function() {
        $("p").removeClass("bold special");
    });

    firstPara.mouseenter(function() {
        $(this).addClass("green");
    });

    firstPara.mouseleave(function() {
        $(this).removeClass("green");
    });

    $("#secondPara").hover(function() {
        $(this).addClass("green");
    }, function() {
        $(this).removeClass("green");
    });

    // firstPara.on("click", function() {
    //     $(this).addClass("invisible");
    //     $("#secondPara").removeClass("invisible");
    // });
    // $("#secondPara").on("click", function() {
    //     $(this).addClass("invisible");
    //     $("#firstPara").removeClass("invisible");
    // });
    $("p").on("click", function() {
        $("p").removeClass("invisible");
        $(this).addClass("invisible");
    });

    $("#btnRemoveFirst").on("click", function() {
        firstPara.off();
    });
});
