import * as angular from 'angular';

import '../scss/main.scss';


angular.module('mainApp', ['weather']);

//add module weather
import '../app/weather/weather.module.ts';
//add component weather
import '../app/weather/weather.component.ts';


// In order to use images in your CSS or HTML, you must import it here. Otherwise
// Webpack will not move it to the dist/ directory
// import '../images/image.jpg';

// ENTRY FILE
// Add your code here to create your angular app
