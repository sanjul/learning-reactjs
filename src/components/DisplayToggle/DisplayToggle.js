import React, { Component } from 'react';
import classes from './DisplayToggle.module.css';

class DisplayToggle extends Component {

    state = { visible: false };

    toggle = () => {
        // remember, setState() merges properties
        this.setState({ visible: !this.state.visible })
    }

    render() {

        let toggleLabel = "Show ";
        let buttonClass = classes.Visible;

        if (this.state.visible) {
            toggleLabel = "Hide"
            buttonClass = classes.Hidden;

        }

        let classNames = [classes.Toggle, buttonClass]

        return <div>
            <button className={classNames.join(' ')}
                onClick={this.toggle}>
                {toggleLabel} {this.props.objname}
            </button>
            {this.state.visible ? this.props.children : null}
        </div>

    }
}

export default DisplayToggle;