import React from 'react';
import './Main.css';

const Main = ({ children }) => {
    return (
        <div className="main">
            <div className="subcontents-container">
                {children.slice(0, 3)}  
            </div>
            <div className="advertisement">
                {children[3]}  
            </div>
        </div>
    );
}

export default Main;