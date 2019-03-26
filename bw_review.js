"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Gabriel Torres
   Date:   3/12/19
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/
window.onload = init;

//this block of code will make the cursor a diffrent style making it look like a glove 

function init() {
      var stars = document.querySelectorAll("span#stars img");
      for (var i = 0; i < stars.length; i++) {
            stars[i].style.cursor = "pointer";
            stars[i].addEventListener("mouseenter", lightStars);
      }
      document.getElementById("comment").addEventListener("keyup", updateCount);
}

//this will light the stars when hovered over and it will give them an orange color to indicate they are being hovered over they will also target the star that is being hovered over

function lightStars(e) {
      var starNumber = e.target.alt;
      var stars = document.querySelectorAll("span#stars img");
      for (var i = 0; i < starNumber; i++) {
            stars[i].src = "bw_star2.png";
      }
      for (var i = starNumber; i < 5; i++) {
            stars[i].src = "bw_star.png";
      }
      document.getElementById("rating").value = starNumber + "stars(s)";
      stars[i].addEventListener("mouseleave", turnOffStars);

      stars[i].addEventListener("click",
            function () {
                  document.removeEventListener("mouseleave", turnOffStars);
            });
}

//this will turn off the stars when they are not being hovered over

function turnOffStars(e) {
      var stars = document.querySelectorAll("span#stars img");
      for (var i = 0; i < stars.length; i++) {
            stars[i].src = "bw_star.png";
      }
      document.getElementById("rating").value = "";
}

//this block of code will make ancounter for the number of words there are in the text box, if it goes over the limit it will turn red indicating that ther is to many and if not it will just stay white it will use a counter to count the words

function updateCount() {
      var commentText = document.getElementById("comment").value;
      var charCount = countCharacters(commentText);
      var wordCountBox = document.getElementById("wordCount");
      wordCountBox.value = charCount + "/1000";
      if (charCount > 1000) {
            wordCountBox.style.color = "white";
            wordCountBox.style.background = "red";
      } else {
            wordCountBox.style.color = "black";
            wordCountBox.style.background = "white";
      }
}








/*=================================================================*/

function countCharacters(textStr) {
      var commentregx = /\s/g;
      var chars = textStr.replace(commentregx, "");
      return chars.length;
}