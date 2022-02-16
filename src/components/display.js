import React from 'react';
import { useCurrentVal, useStagedVal } from '../AppContext';

function Display() {
    const currentVal = useCurrentVal();
    const stagedVal = useStagedVal();

    return (
        <div className="Display text-right border-2 border-black py-5 px-5 bg-gray-700 text-white text-bold text-2xl">
            {currentVal === '0' ? stagedVal : currentVal}
        </div>
    );
}

export default Display;
