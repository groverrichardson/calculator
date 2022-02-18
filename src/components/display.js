import React from 'react';

function Display(props) {
    return (
        <div className="Display text-right border-2 border-black py-5 px-5 bg-gray-700 text-white text-bold text-2xl">
            {currentVal === '0' ? currentCalc : currentVal}
        </div>
    );
}

export default Display;
