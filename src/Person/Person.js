import React from 'react';
import styled from 'styled-components'
// import './Person.css';

const StyledDiv = styled.div`
    width: 60%;
    margin: 15px auto;
    border: 1px solid #162846;
    box-shadow: 0 2px 15px #162846;
    padding: 16px;
    text-align: center;
    background-color:#32363d;

    @media (min-width : 500px) {
        width: 450px
    }
`;


const person = (props) => {

    const delStyle = {
        color:'red',
        fontSize : '10px',
        cursor: 'pointer'
    };


    return (
        <StyledDiv>
            <span style={delStyle} onClick={props.onDelete}>Delete</span>
            <p>Hello from {props.age} year old <b>{props.name}!</b></p>
            <input onChange={props.changed} type="text" value={props.name}/>
        </StyledDiv>
    )

};

export default person;