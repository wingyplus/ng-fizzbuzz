module.exports = function(grunt) {
  grunt.initConfig({
    jshint: jshintConf(),
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
};

function jshintConf() {
  return {
    code: jshintCodeConf(),
    spec: jshintSpecConf(),
    options: jshintOptionsConf(),
  };
}

function jshintCodeConf() {
  return {
    files: {
      src: ['src/**/*.js']
    },
    options: {
      globals: {
        angular: true,
      }
    }
  };
}

function jshintSpecConf() {
  return {
    files: {
      src: ['specs/**/*.js'],
    },
    options: {
      globals: {
        beforeEach: true,
        describe: true,
        expect: true,
        inject: true,
        it: true,
        module: true,
      }
    }
  };
}

function jshintOptionsConf() {
  return {
    indent: 2,
    camelcase: true,
    trailing: true,
    undef: true,
    strict: true,
    quotmark: true,
  }
}
