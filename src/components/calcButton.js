import React from 'react';

function CalcButton(props) {
    return (
        <button className={`CalcButton text-center ${props.classes}`}>
            {props.display}
        </button>
    );
}

export default CalcButton;
