"use strict";

/* 
 Filename:    learning_letters_A_done.js 
 Student:     Joy Paul
 Course:      CWEB 190 (Internet Programming/Web Applications 1) 
 Instructor:  Ada Ajunwa
 Date:        2024-03-18
 Purpose:     Learning Letters jQuery practice
*/

 $(document).ready(function() {
    // Step 2
   console.log("Number of elements with the class target: " + $(".target").length);

    // Step 3
   $("#choices").on("click", function() {
        $(this).hide();
        // Step 6 part 1
      $("span", "#displayChoices").html("+");
    });

    // Steps 4 and 5
    $("#displayChoices").on("click", function() {
        $("#choices").toggle();
        // Step 6 part 2
       if ($("span", "#displayChoices").text() === "+") {
            $("span", "#displayChoices").html("-");
        } else {
            $("span", "#displayChoices").text("+");
        }
    });

    // Step 7
    $("header", "#game").on("click", function() {
        $(this).slideUp(1000);
    });

    // Step 8
    $(".target").hover(function() {
        $(this).css("background-color", "lightgreen");
    }, function() {
        $(this).css("background-color", "");
    });

    // Step 9
   $(".target").on("click", function() {
        $(this).text("\u2714").addClass("selected").fadeOut("slow");
        // Step 10
     $("header", "#game").slideUp(1000);

            // Step 11
          if ($(".target").length === $(".selected").length - 1)
        {
            $("#symbols").slideUp();
            $("#done").slideDown(1000);
        }
    });

    // Step 12
     $("#done").on("click", function() {
        $(this).hide();
        $("header", "#game").show();
        $("#symbols").show();
        $(".target").text("A").removeClass("selected").show();
        //$("#choices").show();
        //$("span", "#displayChoices").text("-");
    });
});