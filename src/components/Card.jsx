import React from 'react';
import ImageSrc from './ImageContainer';
import './Card.css';

function Card(props) {  
  return (
    <div style={{
      'background-color': `${props.description}`, 
      'rotate': `${props.rotate}deg`}} 
      className="business-card">
        <h1>{props.name}</h1>
        { <ImageSrc cardType={props.cardType}/> }
        <p>{props.description}</p>
    </div>
  );
}

export default Card;
