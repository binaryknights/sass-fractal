'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* Set the project specifics */
fractal.set('project.title', 'Sass Fractal Library');
fractal.set('project.version', 'v1.0');
fractal.set('project.author', 'Stuart George');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/src/components');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/src/docs');

/* Specify a directory of static assets */
fractal.web.set('static.path', __dirname + '/public');

/* Set the static HTML build destination */
fractal.web.set('builder.dest', __dirname + '/build');

/* require the Mandelbrot theme module */
const mandelbrot = require('@frctl/mandelbrot');

/* create a new instance with custom config options */
const defaultTheme = mandelbrot({
    skin: "white"
});

/* tell Fractal to use the configured theme by default */
fractal.web.theme(defaultTheme);