import React from 'react';
import classes from './Person.module.css';
import PropTypes from 'prop-types';


const person = (props) => (
    <div className={classes.Person}>
        <button className={classes.DeleteButton} onClick={props.onDelete}>Delete</button>
        <p>Hello from {props.age} year old <b>{props.name}!</b></p>
        <input onChange={props.onChange} type="text" value={props.name} />
    </div>
);


person.propTypes = {
    onDelete: PropTypes.func,
    onChange: PropTypes.func,
    name: PropTypes.string,
    age : PropTypes.number   
}

export default person;