$(document).ready(function(){
    $('#hex').on('input',function(e){
        var hexData = $('#hex').val();
        hexToRGB(hexData);
    });
    $('#rgb').on('input',function(e){
        var rgbData = $('#rgb').val();
        rgbToHex(rgbData);
    });
});

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
