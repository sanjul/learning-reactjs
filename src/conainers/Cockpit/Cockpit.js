import React, { Fragment } from 'react';
import classes from './Cockpit.module.css';
import Logo from '../../components/Logo/Logo';
import AuthContext from '../../context/AuthContext'
import LoginIndicator from '../../components/LoginIndicator/LoginIndicator';


const cockpit = props => (

    <Fragment>

        <header className={classes.Header} key="cockpit-header">
            <h1>My react app</h1>
            <Logo />
            <AuthContext.Consumer>
                {context => (
                    <button onClick={context.login}>Login</button>
                )}
            </AuthContext.Consumer>
        </header>

        <div className={classes.Body} key="cockpit-children">
            {props.children}
        </div>

        <footer className={classes.Footer} key="cockpit-footer">
            <span>(c) {new Date().getFullYear()}</span>
            <LoginIndicator/>
        </footer>
    </Fragment>

);

export default cockpit;