import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AbacusIcon from '../atoms/AbacusIcon';
import Details from './Details'
import ScienceIcon from "../atoms/ScienceIcon";
import DNAIcon from "../atoms/DNAIcon";

const Container = styled.div`
    height: 126px;
    width: 380px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    background-color: white;
    margin-bottom: 20px;
    border-radius: 6px;
    box-shadow: -1px 2px 25px 3px rgba(0, 0, 0, 0.11);
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${props => props.backgroundColor};
    padding: 12px;
    margin: 30px;
`;

const AccountItem = (props) => {
    let Icon, color;
    switch(props.site) {
        case "Facebook":
            color = "#ffbc00";
            Icon = <AbacusIcon size={36}/>;
            break;
        case "Gmail":
            color = "rgb(40, 50, 50)";
            Icon = <ScienceIcon size={36}/>;
            break;
        case "UTEC":
            color = "whitesmoke";
            Icon = <DNAIcon size={36}/>;
            break;
        default:
            color = "whitesmoke";
            Icon = <AbacusIcon size={36}/>;
            break;
    }

    return(
        <Container onClick={() => props.accountSelector({site: props.site, username: props.username, 
                                                        password: props.password, strength: props.strength, 
                                                        lastModified: props.lastModified, created: props.created})}>
            <IconContainer backgroundColor={color}>
                {Icon}
            </IconContainer>
            <Details course={props.site} username={props.username}/>
        </Container>
    );
};

AccountItem.propTypes = {
    courseName: PropTypes.string
};

export default AccountItem;