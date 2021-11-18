import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BronzeIcon from "./BronzeIcon";
import SilverIcon from "./SilverIcon";
import GoldIcon from "./GoldIcon";
import DiamondIcon from "./DiamondIcon";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const IconContainer = styled.div`
    display: flex;
    border-color: ${props => props.color};
    border-width: 1px;
    border-radius: 50%;
    border-style: ${props => props.dashed ? "dashed" : "solid"};
    margin: 5px 10px;
    padding: 4px;
`;


const Lingot = (props) => {
    let Icon, color;

    switch(props.type) {
        case "bronze":
            color = "#f8d2b7";
            Icon = <BronzeIcon/>;
            break;
        case "silver":
            color = "silver";
            Icon = <SilverIcon/>;
            break;
        case "gold":
            color = "gold";
            Icon = <GoldIcon/>;
            break;
        case "diamond":
            color = "deepskyblue";
            Icon = <DiamondIcon/>;
            break;
        default:
            color = "orange";
            Icon = <div style={{height: "24px", width: "24px"}}></div>
            break;
    }

    return(
        <Container>
            <IconContainer color={color} dashed={props.type === "try"}>
                 {Icon}
            </IconContainer>
            <span style={{fontSize: "12px", fontFamily: "Rubik"}}>{props.number+ " " + props.typeName}</span>
        </Container>
    );
};

Lingot.propTypes = {
    type: PropTypes.string,
    typeName: PropTypes.string,
    number: PropTypes.number
};

export default Lingot;