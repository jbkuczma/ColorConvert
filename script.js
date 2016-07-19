// W3C algorithm to determine brightness of color -> change font color
// add this is: ((Red value X 299) + (Green value X 587) + (Blue value X 114)) / 1000
$(document).ready(function(){
    $('#hex').on('input',function(e){
        var hexData = $('#hex').val();
        var rgb = hexToRGB(hexData);
        $('#rgb').val(rgb);
        setBackground(rgb);
    });
    $('#rgb').on('input',function(e){
        var rgbData = $('#rgb').val();
        rgbToHex(rgbData);
    });
});

function hexToRGB(hexValue){
    hexValue = hexValue.replace('#','');
    if(hexValue.length === 3){
        hexValue = hexValue[0] + hexValue[0] + hexValue[1] + hexValue[1] + hexValue[2] + hexValue[2];
    }
    var redVal = parseInt(hexValue.slice(0,2), 16);
    var greenVal = parseInt(hexValue.slice(2,4), 16);
    var blueVal = parseInt(hexValue.slice(4,6), 16);
    if(!isNaN(redVal)&& !isNaN(greenVal) && !isNaN(blueVal) && hexValue.length === 6){
        return 'rgb('+redVal+','+greenVal+','+blueVal+')';
    }
}

function rgbToHex(rgbValue){

}

function determineBrightness(color){

}

function setBackground(color){
    color === undefined ? $('html').css('background-color', '#efefef') : $('html').css('background-color', color);
}
