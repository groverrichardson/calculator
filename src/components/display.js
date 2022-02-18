import React from 'react';

function Display(props) {
    return (
        <div className="display-container text-right border-2 border-black py-5 px-5 bg-gray-700 text-white text-bold text-2xl">
            <p className="prev-value text-sm">Prev Value</p>
            <p className="current-value text-4xl ">test</p>
        </div>
    );
}

export default Display;
