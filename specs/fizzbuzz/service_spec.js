(function(describe, module, beforeEach) {
  'use strict';

  describe('fizzbuzz', function() {
    beforeEach(module('fizzbuzz'));

    describe('service', function() {
      var service;

      beforeEach(inject(function(FizzBuzzService){
        service = FizzBuzzService;
      }));

      it('should return 1 when input 1', function() {
        expect(service.doFizzBuzz(1)).toEqual(1);
      });

      it('should return "Fizz" when input 3', function() {
        expect(service.doFizzBuzz(3)).toEqual('Fizz');
      });

      it('should return "Buzz" when input 5', function() {
        expect(service.doFizzBuzz(5)).toEqual('Buzz');
      });
    });
  });
})(describe, module, beforeEach);
