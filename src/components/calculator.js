import React, { useEffect, useState } from 'react';
import CalcButton from './calcButton';
import Display from './display';

function Calculator() {
    let currentValue = 0;
    let prevValue = 0;

    function calculate() {}
    return (
        <div className="Calculator">
            <Display />
            <div className="calc-button-group grid grid-cols-4">
                <CalcButton classes="clear bg-gray-500" display="AC" />
                <CalcButton classes="pos-neg bg-gray-500" display="+/-" />
                <CalcButton classes="percentage bg-gray-500" display="%" />
                <CalcButton classes="division bg-orange-400" display="÷" />
            </div>
            <div className="calc-button-group grid grid-cols-4">
                <CalcButton classes="division bg-gray-400" display="7" />
                <CalcButton classes="division bg-gray-400" display="8" />
                <CalcButton classes="division bg-gray-400" display="9" />
                <CalcButton classes="division bg-orange-400" display="×" />
            </div>
            <div className="calc-button-group grid grid-cols-4">
                <CalcButton classes="division bg-gray-400" display="4" />
                <CalcButton classes="division bg-gray-400" display="5" />
                <CalcButton classes="division bg-gray-400" display="6" />
                <CalcButton classes="division bg-orange-400" display="-" />
            </div>
            <div className="calc-button-group grid grid-cols-4">
                <CalcButton classes="division bg-gray-400" display="1" />
                <CalcButton classes="division bg-gray-400" display="2" />
                <CalcButton classes="division bg-gray-400" display="3" />
                <CalcButton classes="division bg-orange-400" display="+" />
            </div>
            <div className="calc-button-group grid grid-cols-4">
                <CalcButton classes="col-span-2 bg-gray-400" display="0" />
                <CalcButton classes="division bg-gray-400" display="." />
                <CalcButton classes="division bg-orange-400" display="=" />
            </div>
        </div>
    );
}

export default Calculator;
