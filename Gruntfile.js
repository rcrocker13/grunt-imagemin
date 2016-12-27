/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {


  grunt.initConfig({
      "imagemagick-resize":{
        dev:{
          from:'images_src',
          to:'images',
          files:'resized.jpg',
          props:{
            width:600
          }
        }
      },"imagemagick-convert":{
        dev:{
          args:['*.jpg','-resize', '25x25', 'resizeme-small.jpg']
        }
      }
  });

  grunt.loadNpmTasks('grunt-imagemagick');

  grunt.registerTask( "default", ["imagemagick"]);

};
