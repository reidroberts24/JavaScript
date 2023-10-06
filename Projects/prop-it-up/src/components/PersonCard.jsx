import React, { useState } from 'react';

const PersonCard = (props) => {
    const [age, setAge] = useState(props.age);


    return (
        <div>
            <h1>{ props.last }, { props.first }</h1>
            <p>{ age }</p>
            <p>Hair Color: { props.hairColor }</p>
            <button onClick={ () => setAge(age + 1)}>Celebrate { props.first } { props.last }'s birthday!</button>

        </div>
    );
}

export default PersonCard;