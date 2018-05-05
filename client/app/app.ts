import * as angular from 'angular';

import '../scss/main.scss';

// In order to use images in your CSS or HTML, you must import it here. Otherwise
// Webpack will not move it to the dist/ directory
// import '../images/image.jpg';

// ENTRY FILE
// Add your code here to create your angular app
var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    var vm = this;
    $scope.temp = 12;

    //data
    $scope.information = [{
        date: '2018-02-01',
        temperature: '40'
    },
        {
            date: '2018-02-01',
            temperature: '8'
        },
        {
            date: '2018-02-01',
            temperature: '0'
        },
        {
            date: '2018-02-01',
            temperature: '10'
        }
    ];

    //ADD
    $scope.insertTemp = function (temp,isValid){

        if(isValid){
            $scope.information.push({date:new Date(),temperature:temp});
            console.log("====="+temp);
            console.dir($scope.information);
            $scope.runAllFunction();
        }
    }

    //DELETE
    $scope.delete = function (index) {
        $scope.information.splice(index, 1);
        $scope.runAllFunction();
    }

    //Average temperature
    $scope.average = function (array) {
        let sum = 0;
        for (let index = 0; index < array.length; index++) {
            sum += array[index];
        }
        console.log(sum / array.length);
        return sum / array.length;
    }

    //Highest temperature
    $scope.highest = function (array) {
        let max = array[0];
        for (let index in array) {
            if (max < array[index]) {
                max = array[index];
            }
        }
        console.log(max);
        return max;
    }

    //Lowest temperature
    $scope.lowest = function (array) {
        let min = array[0];
        for (let item in array) {
            if (min > array[item]) {
                min = array[item];
            }
        }
        console.log(min);
        return min;
    }

    //Median temperature
    $scope.median= function(array) {
        array.sort(function (a, b) {
            return a - b;
        });
        var half = Math.floor(array.length / 2);

        if (array.length % 2)
        {
            console.log(array[half]);
            return array[half];
        }
        else{
            console.log((array[half - 1] + array[half]) / 2.0);
            return (array[half - 1] + array[half]) / 2.0;
        }

    }

    $scope.createArrayTemperature = function (arr) {
        let newArray = [];
        for (let index = 0; index < arr.length; index++) {
            newArray.push(parseInt(arr[index].temperature));
        }
        return newArray;
    }

    //delcear the variable for binding
    $scope.averageResult;
    $scope.highestResult;
    $scope.lowestResult;
    $scope.medianResult;

    //wrap all logic
    $scope.runAllFunction = function () {
        $scope.averageResult = $scope.average($scope.createArrayTemperature($scope.information));
        $scope.highestResult = $scope.highest($scope.createArrayTemperature($scope.information));
        $scope.lowestResult = $scope.lowest($scope.createArrayTemperature($scope.information));
        $scope.medianResult = $scope.median($scope.createArrayTemperature($scope.information));
    }

    //execute the logic
    $scope.runAllFunction();

});