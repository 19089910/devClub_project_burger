import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ContainerOrders = styled.div`
    width: 342px;
    height: 101px;

    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LabelOrder = styled.p`
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;

    margin-bottom: 29px;
    margin-left: 27px;
`;

export const LabelName = styled.p`
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;

    margin-left: 27px;
`;

export const ButtonTrash = styled.button`
    margin-right: 15px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

export const Button = styled(Link)`

`;