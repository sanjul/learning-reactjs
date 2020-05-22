import React, { Component } from 'react';
import AuthContext from '../../context/AuthContext';

class LoginIndicator extends Component {


    static contextType = AuthContext;

    render() {
        return this.context.authenticated ? <p>Logged in</p> : <p>Not logged in</p>

    }

}


export default LoginIndicator;