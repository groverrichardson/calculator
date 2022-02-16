import React, { useContext, useState } from 'react';

export const AppContext = React.createContext();

export function useApp() {
    return useContext(AppContext);
}

export function AppProvider({ children }) {
    const [currentVal, updateCurrentVal] = useState('Hello there');

    return (
        <AppContext.Provider value={currentVal}>{children}</AppContext.Provider>
    );
}
