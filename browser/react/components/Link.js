// Link component

import React, { PropTypes } from 'react';

const Link = (props) => {
    const { active, children, onClick } = props;

    if (active) {
        return ( <span> { children } </span> );
    }

    return (
        <a href="#"
            onClick = {(event) => {
                event.preventDefault();
                onClick();
            }}
        >
            { children }
        </a>
    );
};
