import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Svg = styled.svg`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0;
`;

const Icon = props => {
    const { color, size } = props;
    return (
        <Svg fill={color} height={size} width={size} viewBox={`0 0 24 24`}>
            {props.children}
        </Svg>
    );
};

Icon.defaultProps = {
    color: "#4a4a4a",
    size: 24
};

Icon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired
};

export default Icon;