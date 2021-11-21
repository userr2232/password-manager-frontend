import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AbacusIcon from '../atoms/AbacusIcon';
import Details from './Details'
import ScienceIcon from "../atoms/ScienceIcon";
import DNAIcon from "../atoms/DNAIcon";
import ItemContainer from '../atoms/ItemContainer';
import IconContainer from '../atoms/IconContainer';

const Container = ItemContainer;

const AccountItem = (props) => {
    let Icon, color;
    switch(props.site) {
        case "Facebook":
            color = "#ffffff";
            Icon = <AbacusIcon size={36}/>;
            break;
        case "Gmail":
            color = "#ffffff";
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