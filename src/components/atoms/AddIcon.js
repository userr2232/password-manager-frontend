import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon.js';

const AddIcon = props => {
    const { size } = props;
    return (
        <Icon size={size}>
            <path d="M12 5V19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5 12H19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </Icon>
    );
}

AddIcon.propTypes = {
    size: PropTypes.number
};

export default AddIcon;