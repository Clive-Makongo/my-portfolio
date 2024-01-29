import React from 'react';
import './style.css';

function Image(props) {
    return (
        <img className={props.class} id={props.id} src={props.src} alt="" />
    )
}

export default Image;