import React from 'react';
import classes from './Cockpit.module.css';
import Logo from '../../components/Logo/Logo';



const cockpit = props => [

    <header className={classes.Header}>
        <h1>My react app</h1>
        <Logo />
    </header>,

    <div className={classes.Body}>
        {props.children}
    </div>,
    
    <footer className={classes.Footer}>
        <span>(c) {new Date().getFullYear()}</span>
    </footer>

];

export default cockpit;