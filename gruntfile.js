module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        watch: {
            files: ['public/**/*.*'],
            tasks: ['jshint']
          },
          uglify: {
            my_target: {
              files: {
                'public/js/main.min.js': ['public/js/main.js']
                //'public/css/main.min.css': ['public/css/main.css']
               
              }
            }
          },
          jshint: {
            files: ['Gruntfile.js', 'public/js/*.js'],
            options: {
              globals: {
                jQuery: true
              }
            }
          },
          sass: {                              // Task
            dist: {                            // Target
              
              files: {                         // Dictionary of files
                'public/css/style.css': 'public/sass/main.scss'      // 'destination': 'source'
              }
            }
          },
        });
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
  
    // Default task(s).
    grunt.registerTask('default', ['uglify', 'watch', 'jshint', 'sass']);
  
  };