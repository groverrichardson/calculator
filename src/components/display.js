import React, { useContext } from 'react';
import { AppContext } from '../App';

function Display() {
    const displayValue = useContext(AppContext);

    return (
        <div className="Display text-right border-2 border-black py-5 px-5 bg-gray-700 text-white text-bold text-2xl">
            {displayValue.currentCalc}
        </div>
    );
}

export default Display;
