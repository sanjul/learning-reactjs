import React from 'react';


const person = (props) => {

    const childStyle = {
        backgroundColor : 'grey'
    }

    return (
        <div onClick={props.onClick}>
            <p>Hello from {Math.floor(Math.random() * 30)} year old {props.name}!</p>
            <input onChange={props.changed} type="text" defaultValue={props.name}/>
        </div>
    )

};

export default person;