/*
 * This file is strictly for testing the functions that are found in script.js.
 * These functions are identical to the functions found in script.js.
 */
function hexToRGB(hexValue){
    hexValue = hexValue.replace('#','');
    var redVal = parseInt(hexValue.slice(0,2), 16);
    var greenVal = parseInt(hexValue.slice(2,4), 16);
    var blueVal = parseInt(hexValue.slice(4,6), 16);
    if(!isNaN(redVal)&& !isNaN(greenVal) && !isNaN(blueVal)){
        return 'rgb('+redVal+','+greenVal+','+blueVal+')';
    }
}
function rgbToHex(rgbValue){

}
module.exports = {
    hexToRGB
};
