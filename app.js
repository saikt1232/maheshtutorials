var app = angular.module('maheshApp', []);


app.controller('myController', function ($scope) {

    //Variable in Anuglar
    $scope.userName = "Mahesh";

    // function 
    $scope.clickMe = function (e) {
        alert("Welcome to Vegas!");
    };
});