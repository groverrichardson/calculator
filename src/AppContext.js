import React, { useContext, useState } from 'react';

export const CurrentValContext = React.createContext();
export const UpdateCurrentValContext = React.createContext();
export const CurrentCalc = React.createContext();
export const UpdateCurrentCalc = React.createContext();

export function useCurrentVal() {
    return useContext(CurrentValContext);
}

export function useUpdateCurrentVal() {
    return useContext(UpdateCurrentValContext);
}

export function useCurrentCalc() {
    return useContext(CurrentCalc);
}

export function useUpdateCurrentCalc() {
    return useContext(UpdateCurrentCalc);
}

export function AppProvider({ children }) {
    const [currentVal, updateCurrentVal] = useState('0');
    const [currentCalc, updateCurrentCalc] = useState('');

    return (
        <CurrentValContext.Provider value={currentVal}>
            <UpdateCurrentValContext.Provider value={updateCurrentVal}>
                <CurrentCalc.Provider value={currentCalc}>
                    <UpdateCurrentCalc.Provider value={updateCurrentCalc}>
                        {children}
                    </UpdateCurrentCalc.Provider>
                </CurrentCalc.Provider>
            </UpdateCurrentValContext.Provider>
        </CurrentValContext.Provider>
    );
}
