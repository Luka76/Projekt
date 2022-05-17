'use strict';
import { Slider } from "./exportedClass";

const jqFirstSlider = $('.slider')[0];
const jqSecondSlider = $('.slider')[1];

$(document).ready(function (){
    const slider1 = new Slider(
        $(jqFirstSlider),
        $('#left-button'),
        $('#right-button')  
    );

    const slider2 = new Slider(
        $(jqSecondSlider),
        $('#left-button'),
        $('#right-button')
    ); 
});
