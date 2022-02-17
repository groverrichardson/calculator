import React, { useEffect, useState } from 'react';
import CalcButton from './calcButton';
import Display from './display';
import {
    useCurrentCalc,
    useCurrentVal,
    useInstructions,
    useOperationContext,
    useReset,
    useStagedVal,
    useUpdateCurrentCalc,
    useUpdateCurrentVal,
    useUpdateInstructions,
    useUpdateOperationContext,
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
    const reset = useReset();
    const operation = useOperationContext();
    const updateOperation = useUpdateOperationContext();

    const calculation = evaluate(`${currentVal} + ${stagedVal}`);
    const operations = new Set('add', 'subtract', 'multiply', 'divide');
    const [iteration, updateIteration] = useState(0);

    useEffect(() => {
        console.log(
            `instructions: ${instructions}, currentVal: ${currentVal}, stagedVal: ${stagedVal}. currentCalc: ${currentCalc}, reset: ${reset}, iteration: ${iteration}, operation: ${operation}`
        );

        if (instructions === 'add') updateCurrentCalc(calculate('add'));
        if (instructions === 'subtract')
            updateCurrentCalc(calculate('subtract'));
        if (instructions === 'multiply')
            updateCurrentCalc(calculate('multiply'));
        if (instructions === 'divide') updateCurrentCalc(calculate('divide'));
        if (instructions === 'process' && iteration >= 2)
            updateCurrentCalc(redoCalculate('process'));
        if (instructions === 'process' && iteration <= 1)
            updateCurrentCalc(calculate('process'));

        if (instructions === 'clear') {
            updateCurrentVal('0');
            updateCurrentCalc('0');
            updateStagedVal('0');
            updateIteration(0);
            updateOperation('');
        }
    });

    function calculate(type) {
        if (type === 'add') updateOperation('+');
        if (type === 'subtract') updateOperation('-');
        if (type === 'multiply') updateOperation('*');
        if (type === 'divide') updateOperation('/');

        if (iteration === 0) {
            updateStagedVal(currentVal);
            updateCurrentVal('0');
            updateCurrentCalc(currentVal);
            updateIteration((iteration) => iteration + 1);
            updateInstructions('calculated');

            return currentVal;
        }

        const calculation = evaluate(`${currentCalc}${operation}${currentVal}`);

        updateStagedVal(currentVal);
        updateCurrentVal('0');
        updateCurrentCalc(currentVal);
        updateIteration((iteration) => iteration + 1);
        updateInstructions('calculated');

        return calculation;
    }

    function redoCalculate(type) {
        const redoCalculation = evaluate(
            `${currentCalc}${operation}${stagedVal}`
        );

        updateIteration((iteration) => iteration + 1);
        updateInstructions('calculated');

        return redoCalculation;
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
