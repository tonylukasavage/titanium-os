var fs = require('fs');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: true
      },
      src: ['src/titanium-os.js', 'test/**/*.js']
    },
    browserify: {
      app: {
        files: {
          'titanium-os.js': ['src/titanium-os.js']
        }
      }
    },
    ti_run: {
      options: {
        build: {
          iosVersion: '7.1'
        }
      },
      app: {
        files: {
          'tmp/app/Resources': ['titanium-os.js', 'test/app.js',
            'node_modules/should/should.js', 'node_modules/ti-mocha/ti-mocha.js']
        }
      }
    },
    clean: {
      src: ['tmp']
    }
  });

  // Load grunt plugins for modules
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-titanium');

  // finalize build
  grunt.registerTask('finalize', 'finalize titanium-os.js file', function() {
    var code = fs.readFileSync('titanium-os.js', 'utf8'),
      match = code.match(/\[(\d+)\]\);?\s*$/);
    fs.writeFileSync('titanium-os.js', 'module.exports=' + code.replace(/;\s*$/,'') +
      '(' + match[1] + ');');
  });

  // lint and test node and titanium
  grunt.registerTask('default', ['jshint', 'browserify', 'finalize', 'ti_run', 'clean']);

};
