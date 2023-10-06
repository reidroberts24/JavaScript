import React from 'react';
import './App.css';
import User from './components/User'
    
function App() {
    return (
        <div className="App">
            <User name="John Doe" 
            age={30} 
            email="johndoe@example.com" />
        </div>
    );
}

export default App
