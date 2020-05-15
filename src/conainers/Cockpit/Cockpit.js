import React from 'react';
import classes from './Cockpit.module.css';
import Logo from '../../components/Logo/Logo';
import Aux from '../../hoc/Aux';


const cockpit = props => (

    <Aux>
        <header className={classes.Header} key="cockpit-header">
            <h1>My react app</h1>
            <Logo />
        </header>

        <div className={classes.Body} key="cockpit-children">
            {props.children}
        </div>

        <footer className={classes.Footer} key="cockpit-footer">
            <span>(c) {new Date().getFullYear()}</span>
        </footer>
    </Aux>

);

export default cockpit;