/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          // Task-specific options go here.
          engine: "im",
          sizes: [{name: "med-600", width: 600, quality: 50}],
          separator: "-"
        },
        files: [{
          // Target-specific file lists and/or options go here.
          expand: true,
          src: ["*.jpg"],
          cwd: "images_src",
          dest: "images"
        }]  
      }
    }
  })

  grunt.loadNpmTasks('grunt-responsive-images');

  grunt.registerTask( "default", ["responsive_images"]);

};
