import React, { useContext, useState } from 'react';

export const AppContext = React.createContext();

export function useApp() {
    return useContext(AppContext);
}

export function AppProvider({ children }) {
    const [currentCalc, updateCurrentCalc] = useState('Hello there');

    return (
        <AppContext.Provider value={currentCalc}>
            {children}
        </AppContext.Provider>
    );
}
