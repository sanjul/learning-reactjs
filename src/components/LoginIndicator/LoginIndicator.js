import React, { Component } from 'react';
import AuthContext from '../../context/AuthContext';

class LoginIndicator extends Component {

    componentDidUpdate(){
        console.log("Is authenticated = " + this.context.authenticated);
    }


    static contextType = AuthContext;

    render() {
        return this.context.authenticated ? <p>Logged in</p> : <p>Not logged in</p>

    }

}


export default LoginIndicator;