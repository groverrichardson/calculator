import React from 'react';

function Display({ previousOperand, currentOperand, operation }) {
    return (
        <div className="display-container text-right border-2 border-black pb-3 px-5 bg-gray-700 text-white text-bold text-2xl grid grid-rows-2 grid-cols-1">
            <p className="prev-value text-sm self-end">
                {previousOperand}
                {operation}
            </p>
            <p className="current-value text-4xl self-end">{currentOperand}</p>
        </div>
    );
}

export default Display;
