import React from 'react';
import './Card.css';

// create card stack to hold and arrange these

function Card(props) {  
  return (
    <div className="business-card">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
