import React from 'react';

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

    function handleClick(e) {}

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
