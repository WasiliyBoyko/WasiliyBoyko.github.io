'use strict'

function responsiveNavIcon() {
  let topNavIcon = document.getElementById('myNav');
  if (topNavIcon.className === "mainNav") {
    topNavIcon.className += " responsive";
  } else {
    topNavIcon.className = "mainNav";
  }
} 
