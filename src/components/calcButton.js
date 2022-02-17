import React from 'react';
import {
    useCurrentVal,
    useInstructions,
    useReset,
    useUpdateCurrentCalc,
    useUpdateCurrentVal,
    useUpdateInstructions,
    useUpdateReset,
} from '../AppContext';

function CalcButton(props) {
    const numbers = new Set([
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '0',
        '.',
    ]);
    const updateCurrentVal = useUpdateCurrentVal();
    const currentVal = useCurrentVal();
    const updateCurrentCalc = useUpdateCurrentCalc();
    const updateInstructions = useUpdateInstructions();
    const reset = useReset();
    const updateReset = useUpdateReset();

    function handleClick(e) {
        const input = e.target.value;
        const newValue =
            currentVal === '0' || reset === true ? input : currentVal + input;

        updateReset(false);

        if (numbers.has(input)) {
            updateCurrentVal(newValue);
            updateInstructions('inputting');
        }

        if (input === '+') updateInstructions('add');
        if (input === '-') updateInstructions('subtract');
        if (input === '×') updateInstructions('multiply');
        if (input === '÷') updateInstructions('divide');
        if (input === '=') updateInstructions('process');
        if (input === 'AC') updateInstructions('clear');
    }

    return (
        <button
            className={`CalcButton text-center ${props.classes}`}
            value={props.display}
            onClick={(e) => handleClick(e)}>
            {props.display}
        </button>
    );
}

export default CalcButton;
