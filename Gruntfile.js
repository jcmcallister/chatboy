module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      build: ["dist", "dist/"]
    },
    concat: {
      options: {},
      dev: {
        files: {
          'dist/app.js': ['src/main.js'],
          'dist/head.js': ['src/angular.js', 'src/jquery.js'],
        }
      }
      /*,prod: {
        files: {
          'dist/app.js': ['src/main.js'],
          'dist/head.js': ['src/angular.min.js', 'src/jquery.min.js'],
        }
      }*/
    },
    copy: {},
    karma: {
      unit: {
          configFile: 'chatfoo.conf.js'
        }
      },
    postcss: {
      options: {
        map: {
            inline: false, // save all sourcemaps as separate files... 
            annotation: 'dist/css/maps/' // ...to the specified directory 
        },
   
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes 
          require('cssnano')() // minify the result 
        ]
      },
      dist: {
        src: 'css/*.css'
      }
    },
    sass: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
  });

  // Load our plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-sass');

  /* By default: 
    clean out the old dist/
    compile our SASS
    concat our JS files into one
    then copy over to dist/
  */
  grunt.registerTask('default', ['clean:dev','sass', 'concat', 'copy']);
  grunt.registerTask('test', ['karma']);
  //grunt.registerTask('prod', [default, 'clean','sass','copy']);

};
