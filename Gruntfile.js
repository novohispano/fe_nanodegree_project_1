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
          engine: 'im',
          sizes: [{
            quality: 100,
            suffix: "-x2",
            name: "small",
            width: 400
          },{
            quality: 100,
            suffix: "-x2",
            name: "medium",
            width: 800
          },{
            quality: 100,
            suffix: "-x2",
            name: "large",
            width: 1200
          },{
            quality: 60,
            suffix: "-x1",
            name: "small",
            width: 400
          },{
            quality: 60,
            suffix: "-x1",
            name: "medium",
            width: 800
          },{
            quality: 60,
            suffix: "-x1",
            name: "large",
            width: 1200
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_sources/',
          dest: 'assets/images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['assets/images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['assets/images']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'images_sources/fixed/*.{gif,jpg,png}',
          dest: 'assets/images/'
        }]
      },
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
