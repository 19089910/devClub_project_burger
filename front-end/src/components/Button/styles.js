import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
    width: 342px;
    height: 68px;
    margin-top: 76px;
    margin-bottom: 50px;
    background: ${props => props.isHome ? `#D93856`:`rgba(255, 255, 255, 0.14)`};
    cursor: pointer;


    
    //letras internas
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700; 
    font-size: 17px; 
    line-height: 28px; 
    text-decoration: none;


    color: #FFFFFF;

    &:hover{ 
        opacity: 0.8; 
    } 
     
    &:active{ 
        opacity: 0.5; 
    }
`;