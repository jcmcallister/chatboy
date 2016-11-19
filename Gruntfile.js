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

      app: {
        src: ['src/scripts/app/*.js', 'src/scripts/*.js'],
        dest: 'dist/js/app.js'
      },
      vendor: {
        src: ['src/scripts/vendor/*.js'],
        dest: 'dist/js/vendor.js'
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
          src: "*.scss",
          dest: "dist/css/",
          expand: true
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
      }
    }
  });


  /* By default: 
    clean out the old dist/
    compile our SASS
    concat our JS files into one
    then copy over to dist/
  */
  grunt.registerTask('dev', ['clean:dev','pug', 'sass:dev','postcss', 'concat', 'copy','watch']);
  grunt.registerTask('prod', ['clean:dev','pug', 'sass:prod','postcss', 'concat', 'copy']);
  grunt.registerTask('test', ['karma']);

  grunt.registerTask('default', ['dev']);

};
