import React from 'react';
import './Card.css';

function Card(props) {  
  return (
    <div style={{
      'background-color': `${props.description}`, 
      'rotate': `${props.rotate}deg`}} 
      className="business-card">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
    </div>
  );
}

export default Card;
