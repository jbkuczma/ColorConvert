var assert = require('chai').assert;
var externalFunctions = require('../colorConverter.js');

describe('Color Tests', function(){
    describe('Hex to RGB', function(){
        describe('6 character values', function(){
            describe('With #',function(){
                it('#000000 should be rgb(0,0,0)', function(){
                    assert.equal(externalFunctions.hexToRGB('#000000'), 'rgb(0,0,0)');
                });
                it('#FFFFFF should be rgb(255,255,255)', function(){
                    assert.equal(externalFunctions.hexToRGB('#FFFFFF'), 'rgb(255,255,255)');
                });
                it('#4183c4 should be rgb(65,131,196)', function(){
                    assert.equal(externalFunctions.hexToRGB('#4183c4'), 'rgb(65,131,196)');
                });
                it('#9fe2e9 should be rgb(159,226,233)', function(){
                    assert.equal(externalFunctions.hexToRGB('#9fe2e9'), 'rgb(159,226,233)');
                });
            });
            describe('Without #',function(){
                it('000000 should be rgb(0,0,0)', function(){
                    assert.equal(externalFunctions.hexToRGB('000000'), 'rgb(0,0,0)');
                });
                it('FFFFFF should be rgb(255,255,255)', function(){
                    assert.equal(externalFunctions.hexToRGB('FFFFFF'), 'rgb(255,255,255)');
                });
                it('4183c4 should be rgb(65,131,196)', function(){
                    assert.equal(externalFunctions.hexToRGB('4183c4'), 'rgb(65,131,196)');
                });
                it('9fe2e9 should be rgb(159,226,233)', function(){
                    assert.equal(externalFunctions.hexToRGB('9fe2e9'), 'rgb(159,226,233)');
                });
            });
        });
        describe('3 character values', function(){
            describe('With #',function(){
                it('#000 should be rgb(0,0,0)', function(){
                    assert.equal(externalFunctions.hexToRGB('#000'), 'rgb(0,0,0)');
                });
                it('#FFF should be rgb(255,255,255)', function(){
                    assert.equal(externalFunctions.hexToRGB('#FFF'), 'rgb(255,255,255)');
                });
                it('#ABC should be rgb(170,187,204)', function(){
                    assert.equal(externalFunctions.hexToRGB('#ABC'), 'rgb(170,187,204)');
                });
                it('#DEA should be rgb(221,238,170)', function(){
                    assert.equal(externalFunctions.hexToRGB('#DEA'), 'rgb(221,238,170)');
                });
            });
            describe('Without #',function(){
                it('000 should be rgb(0,0,0)', function(){
                    assert.equal(externalFunctions.hexToRGB('000'), 'rgb(0,0,0)');
                });
                it('FFF should be rgb(255,255,255)', function(){
                    assert.equal(externalFunctions.hexToRGB('FFF'), 'rgb(255,255,255)');
                });
                it('ABC should be rgb(170,187,204)', function(){
                    assert.equal(externalFunctions.hexToRGB('ABC'), 'rgb(170,187,204)');
                });
                it('DEA should be rgb(221,238,170)', function(){
                    assert.equal(externalFunctions.hexToRGB('DEA'), 'rgb(221,238,170)');
                });
            });
        });
        describe('Testing non-acceptable inputs', function(){
            describe('With #',function(){
                it('#CAKE should be undefined', function(){
                    assert.equal(externalFunctions.hexToRGB('#CAKE'), undefined);
                });
                it('#123456789 should be undefined', function(){
                    assert.equal(externalFunctions.hexToRGB('#123456789'), undefined);
                });
                it('#01ABCQ should be undefined', function(){
                    assert.equal(externalFunctions.hexToRGB('#01ABCQ'), undefined);
                });
                it('#0110 should be undefined', function(){
                    assert.equal(externalFunctions.hexToRGB('#0110'), undefined);
                });
            });
            describe('Without #',function(){
                it('CAKE should be undefined', function(){
                    assert.equal(externalFunctions.hexToRGB('CAKE'), undefined);
                });
                it('123456789 should be undefined', function(){
                    assert.equal(externalFunctions.hexToRGB('123456789'), undefined);
                });
                it('01ABCQ should be undefined', function(){
                    assert.equal(externalFunctions.hexToRGB('01ABCQ'), undefined);
                });
                it('0110 should be undefined', function(){
                    assert.equal(externalFunctions.hexToRGB('0110'), undefined);
                });
            });
        });
    });
    describe('RGB to Hex', function(){

    });
});

describe('Helper function tests', function(){
    describe('Converting to Hex', function(){
        it('255 should be FF', function(){
            assert.equal(externalFunctions.numberToHex('255'), 'FF');
        });
        it('0 should be 00', function(){
            assert.equal(externalFunctions.numberToHex('0'), '00');
        });
        it('10 should be 0A', function(){
            assert.equal(externalFunctions.numberToHex('10'), '0A');
        });
        it('120 should be 78', function(){
            assert.equal(externalFunctions.numberToHex('120'), '78');
        });
        it('GOAT should be undefined', function(){
            assert.equal(externalFunctions.numberToHex('GOAT'), undefined);
        });
        it('2+2=4 should be undefined', function(){
            assert.equal(externalFunctions.numberToHex('2+2=4'), undefined);
        });
    });
});
