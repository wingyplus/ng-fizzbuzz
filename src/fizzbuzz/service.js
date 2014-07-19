(function(fizzbuzz) {
  'use strict';

  fizzbuzz.service('FizzBuzzService', function() {
    this.doFizzBuzz = function(number) {
      if (number % 3 === 0) {
        return 'Fizz';
      } else if (number % 5 === 0) {
        return 'Buzz';
      } else {
        return 1;
      }
    };
  });
})(angular.module('fizzbuzz'));
