import React from 'react';
import {
    useCurrentCalc,
    useCurrentVal,
    useUpdateCurrentCalc,
    useUpdateCurrentVal,
} from '../AppContext';

function CalcButton(props) {
    const numbers = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);
    const updateCurrentVal = useUpdateCurrentVal();
    const currentVal = useCurrentVal();
    const currentCalc = useCurrentCalc();
    const updateCurrentCalc = useUpdateCurrentCalc();

    async function processCalc(type) {
        if (type === 'add') {
            const newValue = await updateCurrentCalc(currentCalc + currentVal);
            updateCurrentVal(newValue);
        }
    }

    function handleClick(e) {
        const input = e.target.value;
        const newValue = currentVal === '0' ? input : currentVal + input;

        if (numbers.has(input)) updateCurrentVal(newValue);
        if (input === '+') processCalc('add');
        if (input === 'AC') {
            updateCurrentVal('0');
            updateCurrentCalc('');
        }
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
