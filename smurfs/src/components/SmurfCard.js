import React from "react";
import styled from 'styled-components';


const Cards = styled.div`
    width: 80%;
    display: flex;
    background: blue;
    margin: 10px auto;

`;

const SmurfInfo = styled.h2`
    width: 30%;
    flex-direction: column;
    margin: 10px 0;
    color: white;
`;

const SmurfCard = props => {
    console.log(props)
    return (
       
            <Cards>
                <SmurfInfo>Name: {props.smurfData.name}</SmurfInfo>
                <SmurfInfo>Age: {props.smurfData.age}</SmurfInfo>
                <SmurfInfo>Height: {props.smurfData.height}</SmurfInfo>
            </Cards>
      
    )
}

export default SmurfCard