// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const H1Style = styled.h1`
    color:#0a2342;
    border:solid 2px black;
    width:20%;
    margin:auto;
    padding:10px;
`;

export default function Character(props){

const {characters} = props;

console.log(characters)

    return(
        <div>
            { characters.map((ch,idx)=>{
                return(<H1Style key ={idx}>{ch.name}</H1Style>)
            })}   
        </div>
    )

}