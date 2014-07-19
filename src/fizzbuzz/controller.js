(function(fizzbuzz){
  fizzbuzz.controller('FizzBuzzController', function($scope) {
    $scope.word = null;

    $scope.doFizzBuzz = function(number) {
      if (number % 3 === 0) {
        $scope.word = 'Fizz';
      } else if (number % 5 === 0) {
        $scope.word = 'Buzz';
      } else {
        $scope.word = 1;
      }
    };
  });
})(angular.module('fizzbuzz'));
