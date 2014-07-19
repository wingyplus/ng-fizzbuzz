(function(fizzbuzz){
  'use strict';

  function FizzBuzzController($scope, fizzBuzzService) {
    $scope.word = null;

    $scope.doFizzBuzz = function(number) {
      $scope.word = fizzBuzzService.doFizzBuzz(number);
    };
  }

  fizzbuzz.controller('FizzBuzzController', ['$scope', 'FizzBuzzService', FizzBuzzController]);
})(angular.module('fizzbuzz'));
