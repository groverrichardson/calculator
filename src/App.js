import React from 'react';
import Calculator from './components/calculator';
import { AppProvider } from './AppContext';

export const AppContext = React.createContext();

function App() {
    return (
        <AppProvider>
            <main className="App grid justify-center">
                <Calculator />
            </main>
        </AppProvider>
    );
}

export default App;
