import React from 'react';
import classes from './Person.module.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/AuthContext'


const person = (props) => (

    <AuthContext.Consumer>
        {context => (
            <div className={classes.Person}>
                {context.authenticated ? "Logged in" : "Not Logged in"}
                <button className={classes.DeleteButton} onClick={props.onDelete}>Delete</button>
                <p>Hello from {props.age} year old <b>{props.name}!</b></p>
                <input onChange={props.onChange} type="text" value={props.name} />
            </div>
        )}
    </AuthContext.Consumer>


);

person.propTypes = {
    onDelete: PropTypes.func,
    onChange: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
}

export default person;