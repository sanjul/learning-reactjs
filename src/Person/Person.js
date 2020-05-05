import React from 'react';
import './Person.css';

const person = (props) => {

    const delStyle = {
        color:'red',
        fontSize : '10px',
        cursor: 'pointer'
    };

    return (
        <div onClick={props.onClick} className="Person">
            <span style={delStyle} onClick={props.onDelete}>Delete</span>
            <p>Hello from {props.age} year old <b>{props.name}!</b></p>
            <input onChange={props.changed} type="text" value={props.name}/>
        </div>
    )

};

export default person;