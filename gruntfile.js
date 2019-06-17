module.exports = function(grunt) {
    grunt.initConfig({
        sass: {                             
          dist: {                           
            files: {                        
              'public/css/main.css': 'public/sass/main.scss'      
            }
          }
        },
        watch: {
            files: ['public/**/*.*'],
            tasks: ['jshint']
          },
          uglify: {
            my_target: {
              files: {
                'public/js/main.min.js': ['public/js/main.js']
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
          }
        });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    
    grunt.registerTask('default', ['sass', 'watch', 'uglify', 'jshint' ]);
  
  };