import React from 'react';
import './Card.css';

function Card(props) {  
  return (
    <div style={{
      'background-color': `${props.description}`, 
      'transform': `rotate(${props.rotate}deg)`}} 
      // To fix: this transform prevents hover transform from working
      className="business-card">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
    </div>
  );
}

export default Card;
