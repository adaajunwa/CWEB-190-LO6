"use strict";

/* 
 Filename:    menu.js 
 Student:     Michael Grzesina (grzesinam) 
 Course:      CWEB 190 (Internet Programming/Web Applications 1) 
 Instructor:  Michael Grzesina/Ernesto Basoalto 
 Date:        2023-03-28 
 Purpose:     Create menus with jQuery animation effects
*/

$(function() {
    $("li", "#menubar").hover(function() {
        /* code to cause menu to appear */
        $("ul", this).show(200); // or slideDown(200)
    }, function() {
        /* code to cause menu to disappear */
        $("ul", this).hide(200); // or slideUp(200)
    });
});