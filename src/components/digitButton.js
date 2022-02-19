import React from 'react';
import { ACTIONS } from './calculator';

function DigitButton({ dispatch, digit, classes }) {
    return (
        <button
            className={`DigitButton text-center ${classes}`}
            onClick={() =>
                dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })
            }>
            {digit}
        </button>
    );
}

export default DigitButton;
