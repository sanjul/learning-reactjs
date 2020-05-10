import React from 'react';
import classes from './Person.module.css';


const person = (props) => (
    <div className={classes.Person}>
        <button className={classes.DeleteButton} onClick={props.onDelete}>Delete</button>
        <p>Hello from {props.age} year old <b>{props.name}!</b></p>
        <input onChange={props.changed} type="text" value={props.name} />
    </div>
);

export default person;