import React from "react";
import "./card.style.css";

export const Card = props => (
    <div className='card-container'>
        <img alt='monster' src={props.monster.image} className='card-image'/>
        <h2 className='card-title'>{props.monster.name}</h2>
        <p className='card-description'>{props.monster.description}</p>
    </div>
)