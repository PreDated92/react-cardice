import React from 'react';
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../objects/ItemTypes.js'
import ImageSrc from './ImageContainer';
import './Card.css';

function Card(props) {
  // DND
  const [{ isDragging }, drag] = getNewDragFunc(props)

  // Style
  const backgroundColor = props.description;
  const rotate = `${props.rotate}deg`;
  const zIndex = Number(props.id);
  // console.log("Current zIndex value:", Number(props.id));
  const styles = {backgroundColor, rotate, zIndex};

  if (isDragging) {
    return <div ref={drag} />
  }
  return (
    <div 
      ref={drag} 
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

function getNewDragFunc(props) {
  return useDrag(() => ({
    type: ItemTypes.CARD,
    item: { id: props.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }), [props.id]);
}
