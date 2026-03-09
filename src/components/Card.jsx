import React from 'react';
import ImageSrc from './ImageContainer';
import './Card.css';

function Card(props) {  
  const backgroundColor = props.description;
  const rotate = `${props.rotate}deg`;
  const zIndex = Number(props.id);
  // console.log("Current zIndex value:", Number(props.id));
  const styles = {backgroundColor, rotate, zIndex};

  return (
    <div 
      // style={{
      // 'background-color': `${props.description}`, 
      // 'rotate': `${props.rotate}deg`}} 
      style={styles}
      className="business-card">
        <h1>{props.name}</h1>
        { <ImageSrc cardType={props.cardType}/> }
        <p>{props.description}</p>
    </div>
  );
}

export default Card;
