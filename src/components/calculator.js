import React, { useEffect, useState } from 'react';
import CalcButton from './calcButton';
import Display from './display';
import {
    useCurrentCalc,
    useCurrentVal,
    useInstructions,
    useReset,
    useStagedVal,
    useUpdateCurrentCalc,
    useUpdateCurrentVal,
    useUpdateInstructions,
    useUpdateReset,
    useUpdateStagedVal,
} from '../AppContext';
import { evaluate } from 'mathjs';

function Calculator() {
    const updateCurrentVal = useUpdateCurrentVal();
    const currentVal = useCurrentVal();
    const currentCalc = useCurrentCalc();
    const updateCurrentCalc = useUpdateCurrentCalc();
    const instructions = useInstructions();
    const updateInstructions = useUpdateInstructions();
    const stagedVal = useStagedVal();
    const updateStagedVal = useUpdateStagedVal();
    const updateReset = useUpdateReset();

    const calculation = evaluate(`${currentVal} + ${stagedVal}`);

    useEffect(() => {
        console.log(
            `instructions: ${instructions}, currentVal: ${currentVal}, stagedVal: ${stagedVal}. currentCalc: ${currentCalc}`
        );
        if (instructions === 'add') {
            updateStagedVal(calculate);
            updateReset(true);
        }

        if (instructions === 'clear') {
            updateCurrentVal('0');
            updateCurrentCalc('');
            updateStagedVal('0');
        }
    });

    function calculate() {
        const calculation = evaluate(`${currentVal} + ${stagedVal}`);
        updateCurrentVal('0');
        updateInstructions('calculated');

        return calculation;
    }

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
                <CalcButton
                    classes={`division bg-orange-400 ${
                        instructions === 'add' ? 'active' : ''
                    }`}
                    display="+"
                />
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
