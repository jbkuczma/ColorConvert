$(document).ready(function(){
    $('#hex').on('input',function(e){
        var hexData = $('#hex').val();
        var rgb = hexToRGB(hexData);
        $('#rgb').val(rgb);
        setBackground(rgb);
    });
    $('#rgb').on('input',function(e){
        var rgbData = $('#rgb').val();
        var hex = rgbToHex(rgbData);
        $('#hex').val(hex);
        setBackground(hex);
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

function numberToHex(number){
    if(number.length >= 1){
        var hexNumber = Number(number).toString(16);
        if(hexNumber !== undefined && hexNumber !== 'NaN'){
            return hexNumber.length === 1 ? '0' + hexNumber.toUpperCase() : hexNumber.toUpperCase();
        }
    }
}
function rgbToHex(rgbValue){
    rgbValue = rgbValue.replace('rgb(','');
    rgbValue[rgbValue.length - 1] === ')' ? rgbValue = rgbValue.replace(')','') : rgbValue;
    if(rgbValue.split(',').length - 1 === 2 && rgbValue.split(',').length === 3){
        rgbValue = rgbValue.split(',');
        var redToHex = numberToHex(rgbValue[0]);
        var greenToHex = numberToHex(rgbValue[1]);
        var blueToHex = numberToHex(rgbValue[2]);
        if(redToHex !== undefined && greenToHex !== undefined && blueToHex !== undefined){
            return '#'+redToHex+greenToHex+blueToHex;
        }
    }
}

/* uses the formula found here: https://en.wikipedia.org/wiki/Relative_luminance
 * to determine the brightness of the provided color.
 * Y = 0.2126R * 0.7152G + 0.0722B
 */
function determineBrightness(red, green, blue){
    var brightnessLevel = ((parseInt(red) * 0.2126) + (parseInt(green) * 0.7152) + (parseInt(blue) * 0.0722));
    brightnessLevel >= 128 ? $('html').css('color', '#343d46') : $('html').css('color', '#efefef');
}

function setBackground(color){
    color === undefined ? $('html').css({'background-color': '#efefef', 'color': '#343d46'}) : $('html').css('background-color', color);
    if(typeof color === 'string'){
        if(color[0] === '#'){
            var rgbColor = hexToRGB(color);
            rgbColor = rgbColor.slice(4).split(','); //gets rid of 'rgb('
            var red = rgbColor[0];
            var green = rgbColor[1];
            var blue = rgbColor[2];
            determineBrightness(red, green, blue);

        }else{
            var rgbColor = $('#rgb').val();
            rgbColor = rgbColor.slice(4).split(','); //gets rid of 'rgb('
            var red = rgbColor[0];
            var green = rgbColor[1];
            var blue = rgbColor[2];
            determineBrightness(red, green, blue);
        }
    }
}
