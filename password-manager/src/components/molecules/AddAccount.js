import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AddIcon from '../atoms/AddIcon';
import ItemContainer from '../atoms/ItemContainer';
import IconContainer from '../atoms/IconContainer';

const Container = ItemContainer;

const AddAccount = (props) => {
    return (
        <Container onClick={props.addAccount} style={{justifyContent: "center"}}>
            <IconContainer backgroundColor="whitesmoke">
                <AddIcon size={60}/>
            </IconContainer>
        </Container>
    )
};

AddAccount.propTypes = {
    addAccount: PropTypes.func
};

export default AddAccount;