import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
    width:30%;
    border-radius: 0.2em;
    background-color: pink; 
    margin: 1%;
    border: 3px solid black; 
    position: relative; 
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
    &:hover{
        background-color: white;
    }
`;

const Card = props =>{
    return(
        <StyledCard>
             <h3>{props.name}</h3>
             <p>Height: {props.height}</p> 
             <p>Mass: {props.mass}</p>
             <p>Hair Color:{props.hair_color}</p>
             <p>Skin Color: {props.skin_color}</p>
             <p>Birth Year: {props.birth_year}</p>
             <p>Gender: {props.gender}</p>
        </StyledCard>
    );
};

export default Card; 