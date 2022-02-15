import { ThemeContext } from '@emotion/react';
import React from 'react';
import Calculator from './components/calculator';

export const AppContext = React.createContext();

function App() {
    const values = {
        currentCalc: 'Hello There',
    };

    return (
        <AppContext.Provider value={values}>
            <main className="App grid justify-center">
                <Calculator />
            </main>
        </AppContext.Provider>
    );
}

export default App;
