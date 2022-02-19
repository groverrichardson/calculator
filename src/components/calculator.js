import React, { useEffect, useReducer, useState } from 'react';
import OperationButton from './operationButton';
import DigitButton from './digitButton';
import Display from './display';

export const ACTIONS = {
    ADD_DIGIT: 'add-digit',
    CHOOSE_OPERATION: 'choose-operation',
    CLEAR: 'clear',
    DELETE_DIGIT: 'delete-digit',
    EVALUATE: 'evaluate',
};

function reducer(state, { type, payload }) {
    switch (type) {
        case ACTIONS.ADD_DIGIT:
            return {
                ...state,
                currentOperand: `${state.currentOperand || ''}${payload.digit}`,
            };
    }
}

function Calculator() {
    const [{ currentOperand, previousOperand, operation }, dispatch] =
        useReducer(reducer, {});

    return (
        <div className="Calculator">
            <Display
                currentOperand={currentOperand}
                previousOperand={previousOperand}
                operation={operation}
            />
            <div className="calc-button-group grid grid-cols-4">
                <OperationButton
                    classes="clear bg-gray-500"
                    operation="AC"
                    dispatch={dispatch}
                />
                <OperationButton
                    classes="pos-neg bg-gray-500"
                    operation="+/-"
                    dispatch={dispatch}
                />
                <OperationButton
                    classes="percentage bg-gray-500"
                    operation="%"
                    dispatch={dispatch}
                />
                <OperationButton
                    classes="division bg-orange-400"
                    operation="÷"
                    dispatch={dispatch}
                />
            </div>
            <div className="calc-button-group grid grid-cols-4">
                <DigitButton
                    classes="division bg-gray-400"
                    digit="7"
                    dispatch={dispatch}
                />
                <DigitButton
                    classes="division bg-gray-400"
                    digit="8"
                    dispatch={dispatch}
                />
                <DigitButton
                    classes="division bg-gray-400"
                    digit="9"
                    dispatch={dispatch}
                />
                <OperationButton
                    classes="division bg-orange-400"
                    operation="×"
                    dispatch={dispatch}
                />
            </div>
            <div className="calc-button-group grid grid-cols-4">
                <DigitButton
                    classes="division bg-gray-400"
                    digit="4"
                    dispatch={dispatch}
                />
                <DigitButton
                    classes="division bg-gray-400"
                    digit="5"
                    dispatch={dispatch}
                />
                <DigitButton
                    classes="division bg-gray-400"
                    digit="6"
                    dispatch={dispatch}
                />
                <OperationButton
                    classes="division bg-orange-400"
                    operation="-"
                    dispatch={dispatch}
                />
            </div>
            <div className="calc-button-group grid grid-cols-4">
                <DigitButton
                    classes="division bg-gray-400"
                    digit="1"
                    dispatch={dispatch}
                />
                <DigitButton
                    classes="division bg-gray-400"
                    digit="2"
                    dispatch={dispatch}
                />
                <DigitButton
                    classes="division bg-gray-400"
                    digit="3"
                    dispatch={dispatch}
                />
                <OperationButton
                    classes="division bg-orange-400"
                    operation="+"
                    dispatch={dispatch}
                />
            </div>
            <div className="calc-button-group grid grid-cols-4">
                <DigitButton
                    classes="col-span-2 bg-gray-400"
                    digit="0"
                    dispatch={dispatch}
                />
                <OperationButton
                    classes="division bg-gray-400"
                    operation="."
                    dispatch={dispatch}
                />
                <OperationButton
                    classes="division bg-orange-400"
                    operation="="
                    dispatch={dispatch}
                />
            </div>
        </div>
    );
}

export default Calculator;
