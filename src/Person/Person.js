import React from 'react';


const person = (props) => {

    const childStyle = {
        backgroundColor : 'grey'
    }

    return (
        <div onClick={props.onClick}>
            <p>Hello from {Math.floor(Math.random() * 30)} year old {props.name}!</p>
            {/* <div>Children:
                <div style={childStyle}>{props.children}</div>
            </div> */}
        </div>
    )

};

export default person;