import React from 'react';

const PersonCard = (props) => {
    return (
        <div>
            <h1>{ props.last }, { props.first }</h1>
            <p>{ props.age }</p>
            <p>Hair Color: { props.hairColor }</p>
        </div>
    );
}

export default PersonCard;