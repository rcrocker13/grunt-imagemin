/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({

    imagemin: {
      jpg: {
        options: {
          optimizationLevel: 7,
          progressive: true
        },
        dynamic: {
          files: [{
            cwd: "images_src",
            expand: true,
            src: ["images_src/*.jpg"],
            dest: "images"
          }]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask( "default", ["imagemin"]);

};
