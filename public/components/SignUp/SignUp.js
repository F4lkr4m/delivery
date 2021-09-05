import { SignUpController } from '../../controllers/SignUp.js';
import { renderInput } from '../../modules/rendering.js';
import { Validator } from '../../modules/validation.js';
import { maskPhone } from '../../modules/phoneMask.js';
import { getError, nullop } from '../../modules/utils.js';
import SignUpTemplate from './SignUp.pug';

'use strict'

let font_ar = [1,4,5,9,10,40,50,90,100,400,500,900,1000,4000,5000,9000,10000];
let font_rom = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M",
    "MV","V","VV","MX"];

function toRoman(text) {
    if (!text) return "";
    let result = "";
    let n = font_ar.length - 1;
    while (text > 0) {
        if (text >= font_ar[n]) {
            result += font_rom[n];
            text -= font_ar[n];
        }
        else n--;
    }
    return result;
}

function toArab(text) {
    let textUpper = text.toUpperCase();
    let result = 0;
    let posit = 0;
    let n = font_ar.length - 1;
    while (n >= 0 && posit < textUpper.length) {
        if (textUpper.substr(posit, font_rom[n].length) === font_rom[n]) {
            result += font_ar[n];
            posit += font_rom[n].length;
        }
        else n--;
    }
    return result;
}

function roman(value) {
    if (typeof value != 'number' && typeof value != 'string') {
        return '';
    }

    let res = false;
    if (Number.isInteger(value)) {
        res = true
    } else {
        if (parseInt(value)) {
            res = true
        }
    }
    if (res) return toRoman(parseInt(value));
    else return toArab(value);
}

QUnit.test('roman правильно определяет, что был передан не объект и не массив', function (assert) {
    assert.strictEqual(roman({key: '1904'}), '');
    assert.strictEqual(roman(['1990']), '');
    assert.strictEqual(roman([123]), '');
});

'use strict'

function toRoman(number){
    let roman = "";
    const romanNumList = {M:1000,CM:900, D:500,CD:400, C:100, XC:90,L:50, XV: 40, X:10, IX:9, V:5, IV:4, I:1};
    let a;
    if(number < 1 || number > 3999)
        return "Enter a number between 1 and 3999";
    else{
        for(let key in romanNumList){
            a = Math.floor(number / romanNumList[key]);
            if(a >= 0){
                for(let i = 0; i < a; i++){
                    roman += key;
                }
            }
            number = number % romanNumList[key];
        }
    }

    return roman;
}

function toArab(romanNumber){
    romanNumber = romanNumber.toUpperCase();
    const romanNumList = ["CM","M","CD","D","XC","C","XL","L","IX","X","IV","V","I"];
    const corresp = [900,1000,400,500,90,100,40,50,9,10,4,5,1];
    let index =  0, num = 0;
    for(let rn in romanNumList){
        index = romanNumber.indexOf(romanNumList[rn]);
        while(index !== -1){
            num += parseInt(corresp[rn]);
            romanNumber = romanNumber.replace(romanNumList[rn],"-");
            index = romanNumber.indexOf(romanNumList[rn]);
        }
    }
    return num;
}

function roman(value) {
    if (typeof value != 'number' && typeof value != 'string') {
        return '';
    }

    let res = false;
    if (Number.isInteger(value)) {
        res = true
    } else {
        if (parseInt(value)) {
            res = true
        }
    }
    if (res) return toRoman(parseInt(value));
    else return toArab(value);
}