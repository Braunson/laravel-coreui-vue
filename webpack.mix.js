const { mix } = require('laravel-mix');
var coreui_vendor = 'vendor/mrholek/CoreUI-Free-Bootstrap-Admin-Template/Vue_Full_Project';

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// Copy over the CoreUI Assets
mix.copyDirectory(coreui_vendor + '/static/img', 'public/static/img')
   .copy(coreui_vendor + '/static/css/font-awesome.css', 'resource/assets/sass/coreui/fonts/font-awesome.css')
   .copy(coreui_vendor + '/static/css/simple-line-icons.css', 'resource/assets/sass/coreui/fonts/simple-line-icons.css')
   .copyDirectory(coreui_vendor + '/static/fonts', 'public/static/fonts')
   .copyDirectory(coreui_vendor + '/scss', 'resources/assets/sass/coreui')
   .copyDirectory(coreui_vendor + '/src/assets', 'resources/assets/js/assets')
   .copyDirectory(coreui_vendor + '/src/components', 'resources/assets/js/components')
   .copyDirectory(coreui_vendor + '/src/containers', 'resources/assets/js/containers')
   .copyDirectory(coreui_vendor + '/src/router', 'resources/assets/js/router')
   .copyDirectory(coreui_vendor + '/src/views', 'resources/assets/js/views')
   .copy(coreui_vendor + '/src/App.vue', 'resources/assets/js/App.vue', false);

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');
