import React, { useState } from  'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const createUser = (e) => {

        const newUser = { firstName, lastName, email, password, confirmPassword };

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }
    return (
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label>
                <input type='text' value= { firstName } onChange= { (e) => setFirstName(e.target.value) }/>
            </div>
            <div>
                <label>Last Name: </label>
                <input type='text' value= { lastName } onChange={ (e) => setLastName(e.target.value) }/>
            </div>
            <div>
                <label>Email: </label>
                <input type="text" value={ email } onChange={ (e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" value={ password } onChange={ (e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" value={ confirmPassword } onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User"/>
            <div>
                <h3>Form Data:</h3>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </form>

        
    );
}

export default Form;