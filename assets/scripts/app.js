'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
 function getStylesheet() {
       var currentTime = new Date().getHours();
       if (0 <= currentTime&&currentTime < 9) {
        $('#morning').hide();
        $('#night').show();
         //night.css
        $('#lunch').hide();
       }
       if (9 <= currentTime&&currentTime < 11) {
        $('#morning').show();
        $('#night').hide();
        $('#lunch').hide();

       }
         //morning.css

      if (11 <= currentTime&&currentTime < 12) {
        $('#morning').hide();
        $('#night').hide();
        $('#lunch').show();      }

         //morning.css

       if (12 <= currentTime&&currentTime < 16) {
        $('#morning').show();
        $('#night').hide();
        $('#lunch').hide();

       //day
       }
       if (16 <= currentTime&&currentTime < 22) {
        $('#morning').hide();
        $('#night').show();
        $('#lunch').hide();
 }
        //evening
       if (22 <= currentTime&&currentTime <= 24) {
        $('#morning').hide();
        $('#night').show();
        $('#lunch').hide();

       }
       //night
 }

 getStylesheet();
  })
