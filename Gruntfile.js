module.exports = function(grunt) {

  // Load our plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-pug');
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
      options: {},
      dev: {
        files: {
          'dist/js/app.js': ['src/main.js'],
          'dist/js/vendor.js': ['src/angular.js', 'src/jquery.js'],
        }
      }
      /*,prod: {
        files: {
          'dist/app.js': ['src/main.js'],
          'dist/head.js': ['src/angular.min.js', 'src/jquery.min.js'],
        }
      }*/
    },
    copy: {
      //copying over only the things that don't need compiling
      main: {
        expand: true,
        src: 'src/scripts/',
        dest: 'dist/',
      },
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
        src: 'css/*.css'
      }
    },
    pug: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          'dist/*.html': ['src/markup/**/*.pug']
        }
      }
    },
    sass: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },
    }
  });


  /* By default: 
    clean out the old dist/
    compile our SASS
    concat our JS files into one
    then copy over to dist/
  */
  grunt.registerTask('default', ['clean:dev','pug', 'sass','postcss', 'concat', 'copy','watch']);
  grunt.registerTask('test', ['karma']);
  //grunt.registerTask('prod', [default, 'clean','sass','copy']);

};
