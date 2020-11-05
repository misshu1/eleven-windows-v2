import React from 'react';

export function Emoji(props) {
    return (
        <span
            role='img'
            aria-label={props.label ? props.label : ''}
            aria-hidden={props.label ? 'false' : 'true'}
        >
            {props.symbol}
        </span>
    );
}
