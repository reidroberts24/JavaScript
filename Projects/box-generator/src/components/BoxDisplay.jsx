import React, { useState } from 'react';

const BoxDisplay = (props) => {
    const boxStyle = {
        width: '100px',
        height: '100px',
        backgroundColor: props.displayColor,
        margin: '10px',
        display: 'inline-block'
    }
    return <div style={ boxStyle }></div>;
}

export default BoxDisplay;