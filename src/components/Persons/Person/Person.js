import React,{ useContext } from 'react';
import classes from './Person.module.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/AuthContext'


const Person = (props) => {

    const authContext = useContext(AuthContext);

    return (

        <div className={classes.Person}>
            {authContext.authenticated ? "Logged in" : "Not Logged in"}
            <button className={classes.DeleteButton} onClick={props.onDelete}>Delete</button>
            <p>Hello from {props.age} year old <b>{props.name}!</b></p>
            <input onChange={props.onChange} type="text" value={props.name} />
        </div>

    );


};

Person.propTypes = {
    onDelete: PropTypes.func,
    onChange: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
}

export default Person;