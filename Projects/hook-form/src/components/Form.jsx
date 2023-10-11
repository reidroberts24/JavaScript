import React, { useState } from  'react';

const Form = (props) => {
    // main form variables
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    // main form validations
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [pwError, setPwError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    // handler functions
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2 && e.target.value !== "") {
            setFirstNameError("First name must be at least 2 characters!");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2 && e.target.value !== "") {
            setLastNameError("Last name must be at least 2 characters!");
        } else {
            setLastNameError("")
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5 && e.target.value !== "") {
            setEmailError("Email must be at least 5 characters!");
        } else {
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8 && e.target.value !== "") {
            setPwError("Password must be at least 8 characters!");
        } else {
            setPwError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value != password && e.target.value !== "") {
            setConfirmPasswordError("Emails must match!");
        } else {
            setConfirmPasswordError("");
        }
    }
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setHasBeenSubmitted( true );
    };
    


    return (
        <form onSubmit={ createUser }>
            {
            hasBeenSubmitted ?
            <h3>Thank you for submitting the form!</h3> :
            <h3>Welcome, please submit the form!</h3>
            }
            <div>
                <label>First Name: </label>
                <input type='text' value= { firstName } onChange= { handleFirstName }/>
                {
                    firstNameError ?
                    <p>{ firstNameError }</p> :
                    ""
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type='text' value= { lastName } onChange={ handleLastName }/>
                {
                    lastNameError ?
                    <p>{ lastNameError }</p> :
                    ""
                }
            </div>
            <div>
                <label>Email: </label>
                <input type="text" value={ email } onChange={ handleEmail }/>
                {
                    emailError ?
                    <p>{ emailError }</p> :
                    ""
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" value={ password } onChange={ handlePassword }/>
                {
                    pwError ?
                    <p>{ pwError }</p> :
                    ""
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" value={ confirmPassword } onChange={ handleConfirmPassword } />
                {
                    confirmPasswordError ?
                    <p>{ confirmPasswordError }</p> :
                    ""
                }
            </div>
            {
                pwError ?
                <input type="submit" value="Create User" disabled/> :
                <input type="submit" value="Create User"/>
            }
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