(function(describe, it, beforeEach, expect, inject, module) {
  'use strict';
  describe('fizzbuzz', function() {
    beforeEach(module('fizzbuzz'));

    describe('controller', function() {
      var controller, scope;

      beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('FizzBuzzController', {
          $scope: scope
        });
      }));

      it('should return 1 when input 1', function() {
        scope.doFizzBuzz(1);

        expect(scope.word).toEqual(1);
      });

      it('should return "Fizz" when input 3', function() {
        scope.doFizzBuzz(3);

        expect(scope.word).toEqual('Fizz');
      });

      it('should return "Buzz" when input 5', function() {
        scope.doFizzBuzz(5);

        expect(scope.word).toEqual('Buzz');
      });
    });
  });
})(describe, it, beforeEach, expect, inject, module);
