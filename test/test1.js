var assert = require('chai').assert;

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(1, [1,2,3].indexOf(2));
    });
  });
  describe('#length', function(){
     var arr = [];
     it('should be empty', function(){
        assert.equal(arr.length, 0);
     });
  });
});

describe('Color', function(){
    describe('Hex to RGB', function(){

    });
    describe('RGB to Hex', function(){

    });
});
