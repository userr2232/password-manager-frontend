import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    margin: 10px;
`;

const General = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Progress = styled.div`
    display: flex;
`;

const BronzeProgress = styled.div`
    height: 6px;
    width: 70px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    background-color: chocolate;
    margin-top: 20px;
`;

const GoldProgress = styled.div`
    height: 6px;
    width: 70px;
    background-color: gold;
    margin-top: 20px;
`;

const SilverProgress = styled.div`
    height: 6px;
    width: 170px;
    background-color: silver;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    margin-top: 20px;
`;

const LingotContainer = styled.div`
    display: flex;
    border-color: ${props => props.color};
    border-width: 1px;
    border-radius: 50%;
    border-style: solid;
    margin: 10px;
`;

const lingots = [
    {type: "try", typeName: "Intento", number: 1},
    {type: "bronze", typeName: "Bronce", number: 5},
    {type: "silver", typeName: "Plata", number: 1},
    {type: "gold", typeName: "Oro", number: 5},
    {type: "diamond", typeName: "Diamante", number: 5}
];

const Details = (props) => {
    return (
        <Container>
            <General>
                { props.course }
                <span style={{marginTop: "7px", fontSize: "0.7em"}}>{ props.username }</span>
            </General>
        </Container>
    );
};

Details.propTypes = {
    course: PropTypes.string
};

export default Details;