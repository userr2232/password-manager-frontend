import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon.js'

const BronzeIcon = props => {
    const { size } = props;
    return (
        <Icon size={size}>
            <g transform={"translate(0 3)"}>
            <path d="M23.898 5.79667C23.8975 6.23652 23.7521 6.66467 23.4831 7.01833L23.4763 7.02667L13.8729 19.1225C13.6826 19.3692 13.4443 19.5642 13.176 19.6958C12.7403 19.9104 12.2373 19.9571 11.7677 19.8267C11.3504 19.7096 10.9844 19.4621 10.7263 19.1225L1.116 7.01833C0.847221 6.66456 0.701855 6.23648 0.701143 5.79667C0.697423 5.42867 0.795088 5.06641 0.984 4.7475L2.80543 1.32667L2.81571 1.31C2.9877 1.02005 3.23497 0.779079 3.5328 0.611193C3.83064 0.443308 4.16859 0.35439 4.51286 0.353333H20.0871C20.784 0.353333 21.4183 0.711666 21.7843 1.31L21.8023 1.34333L23.6143 4.7475C23.8063 5.06917 23.9006 5.43333 23.898 5.79667V5.79667Z" fill="#CEF8FF"/>
            <path d="M23.898 5.79667C23.8975 6.23652 23.7521 6.66467 23.4831 7.01833L23.4763 7.02667L13.8729 19.1225C13.6826 19.3692 13.4443 19.5642 13.176 19.6958C12.9045 19.8296 12.6044 19.8992 12.3 19.8992V0.353333H20.0863C20.784 0.353333 21.4183 0.711666 21.7834 1.31L21.8023 1.34333L23.6143 4.7475C23.8063 5.06917 23.9006 5.43333 23.898 5.79667V5.79667Z" fill="#50E6FF"/>
            <path d="M23.898 5.61583H0.701146C0.697808 5.25893 0.795674 4.90804 0.984003 4.60167L2.80543 1.29333L2.81572 1.27833C2.99278 0.995166 3.24204 0.761236 3.53937 0.599185C3.83669 0.437134 4.172 0.352451 4.51286 0.353332H20.0871C20.428 0.352451 20.7633 0.437134 21.0606 0.599185C21.358 0.761236 21.6072 0.995166 21.7843 1.27833L21.8023 1.31L23.6143 4.60167C23.8063 4.91333 23.9006 5.265 23.898 5.61583V5.61583Z" fill="#62EBFF"/>
            <path d="M23.898 5.61583H12.3V0.353332H20.0863C20.4271 0.352451 20.7625 0.437134 21.0598 0.599185C21.3571 0.761236 21.6064 0.995166 21.7834 1.27833L21.8023 1.31L23.6143 4.60167C23.8063 4.91333 23.9006 5.265 23.898 5.61583V5.61583Z" fill="#31CAFF"/>
            <path d="M17.712 5.79667L13.188 19.825C12.8472 19.922 12.485 19.9223 12.144 19.8258L7.66114 5.79667L12.6634 0.353333L17.712 5.79667V5.79667Z" fill="#50E6FF"/>
            <path d="M17.712 5.79667L12.8606 19.8258C12.6806 19.8742 12.492 19.8992 12.3 19.8992V0.353333L17.712 5.79667Z" fill="#31CAFF"/>
            <path d="M17.712 5.61583H7.66029L12.6643 0.353333L17.712 5.61583Z" fill="#CEF8FF"/>
            <path d="M17.712 5.61583H12.3V0.353333L17.712 5.61583Z" fill="#50E6FF"/>
            </g>
        </Icon>
    );
};

BronzeIcon.propTypes = {
    size: PropTypes.number
};

export default BronzeIcon;