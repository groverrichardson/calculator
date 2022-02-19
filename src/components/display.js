import React from 'react';

function Display(props) {
    return (
        <div className="display-container text-right border-2 border-black py-5 px-5 bg-gray-700 text-white text-bold text-2xl">
            <p className="prev-value text-sm">{props.previousOperand}</p>
            <p className="current-value text-4xl ">{props.currentOperand}</p>
        </div>
    );
}

export default Display;
