module.exports = function(grunt) {

  // Load our plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-sass');


  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      dev: ["dist", "dist/"]
    },
    concat: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */',
        },
      app: {
        src: [
          'src/scripts/app/controllers/controllers.js',
          'src/scripts/app/controllers/mainController.js',
          'src/scripts/app/controllers/chatController.js',
          'src/scripts/app/directives/directives.js',
          'src/scripts/app/services/services.js',
          'src/scripts/app/services/chatService.js',
          'src/scripts/app/services/repService.js',
          'src/scripts/app/services/userService.js',
          'src/scripts/app.js'
        ],
        dest: 'dist/js/app.js',

      },
      vendor: {
        src: [
          'src/scripts/vendor/jquery-3.1.1.min.js',
          //'src/scripts/vendor/angular.js',
          'src/scripts/vendor/angular.min.js',
          'src/scripts/vendor/jquery.inview.min.js'
        ],
        dest: 'dist/js/vendor.js'
      }
      /*,prod: {
        files: {
          'dist/app.js': ['src/main.js'],
          'dist/head.js': ['src/angular.min.js', 'src/jquery.min.js'],
        }
      }*/
    },
    connect: {
      server: {
        options: {
          port: 3000,
          base: 'dist'
        }
      }
    },
    copy: {
      //copying over only the things that don't need compiling
      main: {
        expand: true,
        src: 'src/scripts/',
        dest: 'dist/',
      },
      serve: {
        //for use in a shell script or docker file for easy deployment & serving, AFTER COMPLETING a front-end build
        expand: true,
        src: 'dist/**',
        dest: '../chatboy-server/'
      }
    },
    karma: {
      unit: {
          configFile: 'chatfoo.conf.js'
      }
    },
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({browsers: ['last 2 versions']})
        ]
      },
      dist: {
        src: 'dist/css/*.css'
      }
    },
    pug: {
      compile: {
        options: {
          pretty: true,
          data: function(dest, src) {
            return {
              from: src,
              to: dest,
              fileName: src[0].replace('src/markup/pages/', '').replace('.pug', '').split('/').pop()
            }
          }
        },
        files: [{
          cwd: "src/markup/views",
          src: "**/*.pug",
          dest: "dist/",
          expand: true,
          ext: ".html"
        }]
      }
    },
    sass: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dev: {
        options: {
            sourceMap: true
        },
        files: [{
          cwd: "src/styles/",
          src: ['**/*.scss', '!**/_*.scss'],
          dest: "dist/css/",
          expand: true,
          ext: ".css"
        }]
      },
      prod: {
        options: {
            sourceMap: false
        },
        files: [{
          cwd: "src/styles/",
          src: ['**/*.scss', '!**/_*.scss'],
          dest: "dist/css/",
          expand: true,
          ext: ".css"
        }]
      }
    },
    uglify: {
      dev: {
        options: {
          mangle: false
        },
        files: [{
          expand: true,
          cwd: 'dist/js',
          src: '*.js',
          dest: 'dist/js'
        }]
      },
      prod: {
        options: {
          mangle: true
        },
        files: [{
          expand: true,
          cwd: 'dist/js',
          src: '*.js',
          dest: 'dist/js'
        }]
      }
    },
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: 'src/styles/**/*.scss',
        tasks: ['sass:dev']
      },
      markup: {
        files: 'src/markup/**/*.pug',
        tasks: ['pug']
      },
      js: {
        files: 'src/scripts/**/*.js',
        tasks: ['concat','uglify:dev','copy']
      }
    }
  });


  /* By default: 
    clean out the old dist/
    compile our SASS
    concat our JS files into one
    then copy over to dist/
  */
  grunt.registerTask('dev', ['clean:dev','pug', 'sass:dev','postcss', 'concat', 'uglify:dev', 'connect','watch']);
  grunt.registerTask('prod', ['clean:dev','pug', 'sass:prod','postcss', 'concat', 'uglify:prod']);
  grunt.registerTask('serve', ['prod','copy:serve']);
  grunt.registerTask('test', ['karma']);

  grunt.registerTask('default', ['dev']);

};
