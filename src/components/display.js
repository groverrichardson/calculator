import React from 'react';

function Display({ previousOperand, currentOperand, operation }) {
    return (
        <div className="display-container text-right border-2 border-black py-5 px-5 bg-gray-700 text-white text-bold text-2xl">
            <p className="prev-value text-sm">
                {previousOperand}
                {operation}
            </p>
            <p className="current-value text-4xl ">{currentOperand}</p>
        </div>
    );
}

export default Display;
