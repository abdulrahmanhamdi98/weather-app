import React from 'react';
import './App.css';
import Weather from './Weather';

function App() {
    const apiKey = '6195f9149e90bf0b16d61433a1a051eb';  

    return (
        <div className="App">
            <Weather apiKey={apiKey} />
        </div>
    );
}

export default App;
