import React from 'react';
import { ACTIONS } from './calculator';

function OperationButton({ dispatch, operation, classes }) {
    return (
        <button
            className={`OperationButton text-center ${classes}`}
            onClick={() =>
                dispatch({
                    type: ACTIONS.CHOOSE_OPERATION,
                    payload: { operation },
                })
            }>
            {operation}
        </button>
    );
}

export default OperationButton;
