import React from 'react';
import Calculator from './components/calculator';
import { AppProvider } from './AppContext';

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
