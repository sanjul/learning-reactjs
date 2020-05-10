import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {

    const delStyle = {
        color:'red',
        fontSize : '10px',
        cursor: 'pointer'
    };

    const mediaQueryStyle = {
        '@media (min-width : 500px)' :{
            width: '450px'
        }
    };

    return (
        <div onClick={props.onClick} className="Person" style={mediaQueryStyle}>
            <span style={delStyle} onClick={props.onDelete}>Delete</span>
            <p>Hello from {props.age} year old <b>{props.name}!</b></p>
            <input onChange={props.changed} type="text" value={props.name}/>
        </div>
    )

};

export default Radium(person);