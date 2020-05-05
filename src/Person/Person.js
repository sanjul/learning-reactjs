import React from 'react';
import './Person.css';

const person = (props) => {

    return (
        <div onClick={props.onClick} class="Person">
            <p>Hello from {Math.floor(Math.random() * 30)} year old {props.name}!</p>
            <input onChange={props.changed} type="text" value={props.name}/>
        </div>
    )

};

export default person;