import React, { useEffect, useReducer, useState } from 'react';
import OperationButton from './operationButton';
import DigitButton from './digitButton';
import Display from './display';

export const ACTIONS = {
    ADD_DIGIT: 'add-digit',
    CHOOSE_OPERATION: 'choose-operation',
    CLEAR: 'clear',
    EVALUATE: 'evaluate',
};

function reducer(state, { type, payload }) {
    switch (type) {
        case ACTIONS.ADD_DIGIT:
            if (state.overwrite) {
                return {
                    ...state,
                    currentOperand: payload.digit,
                    overwrite: false,
                };
            }
            if (payload.digit === '0' && state.currentOperand === '0')
                return state;
            if (payload.digit === '.' && state.currentOperand.includes('.'))
                return state;

            return {
                ...state,
                currentOperand: `${state.currentOperand || ''}${payload.digit}`,
            };
        case ACTIONS.CHOOSE_OPERATION:
            if (state.currentOperand == null && state.previousOperand == null) {
                return state;
            }
            if (state.currentOperand == null) {
                return {
                    ...state,
                    operation: payload.operation,
                };
            }
            if (state.previousOperand == null) {
                return {
                    ...state,
                    operation: payload.operation,
                    previousOperand: state.currentOperand,
                    currentOperand: null,
                };
            }

            return {
                ...state,
                previousOperand: evaluate(state),
                operation: payload.operation,
                currentOperand: null,
            };
        case ACTIONS.CLEAR:
            return {};
        case ACTIONS.EVALUATE:
            if (
                state.operation == null ||
                state.currentOperand == null ||
                state.previousOperand == null
            ) {
                return state;
            }

            return {
                ...state,
                overwrite: true,
                previousOperand: null,
                operation: null,
                currentOperand: evaluate(state),
            };
    }
}

function evaluate({ currentOperand, previousOperand, operation }) {
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if (isNaN(prev) || isNaN(current)) return '';

    let computation = '';

    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '÷':
            computation = prev / current;
            break;
    }

    return computation.toString();
}

const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
    maximumFractionDigits: 0,
});

function formatOperand(operand) {
    if (operand == null) return;
    const [integer, decimal] = operand.split('.');
    if (decimal == null) return INTEGER_FORMATTER.format(integer);
    return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
}

function Calculator() {
    const [{ currentOperand, previousOperand, operation }, dispatch] =
        useReducer(reducer, {});

    return (
        <div className="Calculator">
            <Display
                currentOperand={formatOperand(currentOperand)}
                previousOperand={formatOperand(previousOperand)}
                operation={operation}
            />
            <div className="calc-button-group grid grid-cols-4">
                <button
                    className="clear bg-gray-500"
                    onClick={() => dispatch({ type: ACTIONS.CLEAR })}>
                    AC
                </button>
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
                    operation="*"
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
                <DigitButton
                    classes="division bg-gray-400"
                    digit="."
                    dispatch={dispatch}
                />
                <button
                    className="division bg-orange-400"
                    onClick={() => dispatch({ type: ACTIONS.EVALUATE })}>
                    =
                </button>
            </div>
        </div>
    );
}

export default Calculator;
