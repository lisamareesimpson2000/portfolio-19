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
        sass: {
          files: ['public/sass/*.scss'],
          tasks: ['sass']
        },
        js: {
          files: ['public/js/main.js'],
          tasks: ['jshint', 'uglify']
        }
      },
      
          uglify: {
            my_target: {
              files: {
                'public/js/main.min.js': ['public/js/main.js']
              }
            }
          },
          jshint: {
            files: ['public/js/main.js'],
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
    
    grunt.registerTask('default', ['watch']);
  
  };