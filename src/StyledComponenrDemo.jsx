import React,{Component} from "react";
import  ReactDOM  from "react-dom";
import styled from "styled-components";

function StyledComponentDemo(){
    const Heading=styled.h1`
        background-color:red;
        border:3px solid black;
    `;
    const SubHeading=styled.h2`
    background-color:blue;
    border:3px solid red;
    &:hover{
        background-color:${(props) => props.hoverColor }
    }
    `;
    const Para=styled.p`
    background-color:yellow;
    font-size:25px;
    text-align:center;
    border:3px solid red;
    `;
    return(
        <div>
            <Heading>IEC,Pune</Heading>
            <SubHeading hoverColor="green">**Cource Offered**</SubHeading>
            <Para>HTML</Para>
            <Para>CSS</Para>
            <Para>Java</Para>
            <Para>Jquery</Para>
            <Para>Python</Para>
        </div>
    )
}
export default StyledComponentDemo;