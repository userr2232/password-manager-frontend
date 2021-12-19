import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon.js';

const AddIcon = props => {
    const { size } = props;
    return (
        <Icon size={size}>
            <path d="M12 5V19" stroke="black" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"/>
            <path d="M5 12H19" stroke="black" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"/>
        </Icon>
    );
}

AddIcon.propTypes = {
    size: PropTypes.number
};

export default AddIcon;