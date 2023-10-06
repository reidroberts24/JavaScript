import React, { useState } from 'react';

function User(props) {
    const [age, setAge] = useState( props.age )
    return (
        <div>
            <h1>{props.name}</h1>
            <p>Age: {props.age}</p>
            <p>Email: {props.email}</p>
            <button onClick={ (event) => setAge(age + 1)}>Celebrate {props.name}'s birthday!</button>
        </div>
    );  
}

export default User;
