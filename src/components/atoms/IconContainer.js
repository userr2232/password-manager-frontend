import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${props => props.backgroundColor};
    padding: 12px;
    margin: 30px;
`;

export default IconContainer;