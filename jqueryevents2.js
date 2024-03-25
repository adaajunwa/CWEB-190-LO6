"use strict";

/* 
 Filename:    jqueryevents2.js
 Student:     Michael Grzesina (grzesinam) 
 Course:      CWEB 190 (Internet Programming/Web Applications 1) 
 Instructor:  Michael Grzesina/Ernesto Basoalto 
 Date:        2023-03-21 
 Purpose:     Demonstrate jQuery events
*/

let face = new Image();
face.src = "media/HappyFaceSmile.jpg";

$(function() {
    const firstPara = $("#firstPara");

    // See jqueryevents1.html and jqueryevents.js for earlier versions...
    $("#italic").click(function() {
        if ($(this).text() === "Italic") {
            $("p").addClass("special");
            $(this).html("<strong>Un</strong>Italic");
        } else {
            $("p").removeClass("special");
            $(this).html("Italic");
        }
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
        $(this).val("Done").prop("disabled", true);
    });

    $("#imgFace").hover(function() {
        $(this).attr("src", "media/HappyFaceSmile.jpg").attr("alt", "Happy Face");
    }, function() {
        $(this).attr("src", "media/HappyFaceNoSmile.jpg").attr("alt", "Face");
    });
});
