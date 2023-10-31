import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PersonForm = () => {
    const [ fName, setFName ] = useState("")
    const [ lName, setLName ] = useState("")

    const handleSubmit = (e) => {
        console.log("Form submitted!") //this is not going to my VS code console it's going to the browser console btw
        e.preventDefault(); //stops default action of the event being triggered (i.e., prevents page refresh)
        axios.post('http://localhost:8000/api/people', { //here is why we need CORS - we're making a post request to the backend server
            fName,      // this is shortcut syntax for fName: fName,
            lName       // this is shortcut syntax for lName: lName
        })
            .then( res => {             // if the promise is resolved 
                console.log(res)        //track our data
                console.log(res.data)   //this is not going to my VS code console it's going to the browser console btw
            })
            .catch( err => console.log(err)) //this is not going to my VS code console it's going to the browser console btw
    }

    return (
        <form onSubmit={ handleSubmit }>
            <p>
                <label>First Name: </label>
                <input type="text" onChange={ (e) => setFName(e.target.value) }/>
                {/* When the user types in this input, our onChange synthetic event 
                    runs this arrow function, setting that event's target's (input) 
    value (what's typed into the input) to our updated state   */}
            </p>
            <p>
                <label>Last Name: </label>
                <input type="text" onChange={ (e) => setLName(e.target.value) }/>
            </p>
            <input type="submit"/>
        </form>
    )
    }
export default PersonForm;