(function(describe, it, beforeEach, expect, inject, module, spyOn) {
  'use strict';
  describe('fizzbuzz', function() {
    beforeEach(module('fizzbuzz'));

    describe('controller', function() {
      var controller, service, scope;

      beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        service = {
          doFizzBuzz: function(number) {}
        };
        spyOn(service, 'doFizzBuzz');
        controller = $controller('FizzBuzzController', {
          $scope: scope,
          FizzBuzzService: service
        });
      }));

      it('should been called "fizzBuzzService"', function() {
        scope.doFizzBuzz(1);

        expect(service.doFizzBuzz).toHaveBeenCalledWith(1);
      });
    });
  });
})(describe, it, beforeEach, expect, inject, module, spyOn);
