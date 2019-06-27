module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  // Project Configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      all: ['Gruntfile.js', 'source/js/*.js']
    },

    clean: {
      build: ['source/build/*'] // Storage of Uglify results (*.min.js)
    },
  });

  grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln('WATCH EVENT:  ' + target + ': ' + filepath + ' has ' + action);
  });

  // grunt.registerTask('start',['nodemon']);
  // grunt.registerTask('default',['jshint', 'uglify', 'sass', 'concat']);
  // grunt.registerTask('dev',['jshint', 'uglify', 'sass', 'concat', 'concurrent']);

  // grunt build:dev
  // grunt build:dist
  grunt.registerTask('build', function(arg) {
    arg = arg || 'dev';
    if (arg === 'dev') {
      console.log("GRUNT DEV RUNNING...");
      grunt.task.run([]);
    } else if (arg === 'dist') {
      console.log("GRUNT DIST RUNNING...");
      grunt.task.run([]);
    }
  });

  grunt.registerTask('serve', function(arg) {
    arg = arg || 'dev';
    grunt.task.run(['build:'+arg]);
  });

  grunt.registerTask('default', ['serve']);

};