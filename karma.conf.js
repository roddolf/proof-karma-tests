
module.exports = function( config ) {
    config.set( {
        frameworks: [ "jasmine" ],

        files: [
            // "test.js",
            "./tests/*.spec.js"
        ],

        reporters: [ "dots" ],

        port:5050,

        autoWatch: false,
        singleRun: true,

        browsers: [ "Chrome", "Safari", "Firefox" ],

    } );
};
