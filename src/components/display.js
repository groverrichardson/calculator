import React from 'react';
import { useApp } from '../AppContext';

function Display() {
    const currentVal = useApp();

    return (
        <div className="Display text-right border-2 border-black py-5 px-5 bg-gray-700 text-white text-bold text-2xl">
            {currentVal}
        </div>
    );
}

export default Display;
