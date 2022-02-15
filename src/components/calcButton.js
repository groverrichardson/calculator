import React from 'react';

function CalcButton(props) {
    function handleClick(e) {
        console.log(e.target.value);
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
