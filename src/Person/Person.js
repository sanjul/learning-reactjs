import React from 'react';
import styled from 'styled-components'
import classes from './Person.module.css';


const person = (props) => {

    const delStyle = {
        color:'red',
        fontSize : '10px',
        cursor: 'pointer'
    };


    return (
        <div className={classes.Person}>
            <span style={delStyle} onClick={props.onDelete}>Delete</span>
            <p>Hello from {props.age} year old <b>{props.name}!</b></p>
            <input onChange={props.changed} type="text" value={props.name}/>
        </div>
    )

};

export default person;