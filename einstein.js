"use strict";

/* 
 Filename:    einstein.js 
 Student:     Michael Grzesina (grzesinam) 
 Course:      CWEB 190 (Internet Programming/Web Applications 1) 
 Instructor:  Michael Grzesina/Ernesto Basoalto 
 Date:        2023-03-23 
 Purpose:     Demonstrate jQuery animation effects
*/

$(function() {
    let einsteinImage = $("#einstein");

    $("#hide").on("click", () => einsteinImage.hide( "fast" ) );

    $("#show").on("click", () => einsteinImage.show( "slow" ) );

    $("#toggle").on( "click", () => einsteinImage.toggle( 1000 ) );

    $("#fadeout").on( "click", () => einsteinImage.fadeOut() );

    $("#fadein").on("click", () => einsteinImage.fadeIn() );

    // $("#slideup").on( "click", () => einsteinImage.slideUp("slow") );
    $("#slideup").on( "click", () => $("h1").slideUp("slow") );

    // $("#slidedown").on( "click", () => einsteinImage.slideDown("fast") );
    $("#slidedown").on( "click", () => $("h1").slideDown("fast") );

    // $("#slidetoggle").on( "click", () => einsteinImage.slideToggle() );
    $("#slidetoggle").on( "click", () => $("h1:first").slideToggle() );

    // einsteinImage.on( "mouseover", function() {
    //     $(this).fadeOut(5000);
    // });
    einsteinImage.on( "mouseover", () => einsteinImage.fadeOut(5000) ); // can't use this with => function
});
