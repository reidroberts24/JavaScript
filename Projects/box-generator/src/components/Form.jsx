import React, { useState } from 'react';

const Form = (props) => {
    const [color, setColor] = useState("")
    const [colorError, setColorError] = useState("")
    
    const isValidColor = ( color ) => {
        const e1 = document.createElement('div');
        e1.style.color = color
        return e1.style.color !== ''
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isValidColor(color)) {
            props.onNewColor(color)
            setColor("")
            setColorError("")
        } else {
            setColorError("Invalid color. Please enter a valid color.")
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <label>Add a color: </label>
                <input type="text" value={ color } onChange={ (e) => setColor(e.target.value) } /> 
                {
                    colorError ?
                    <p>{ colorError }</p> :
                    ""
                }
                <input type="submit" value="Add"/>
            </div>
            
        </form>
    )
}

export default Form;