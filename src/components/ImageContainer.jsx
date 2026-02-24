import rock from '../assets/rock.png'
import scissors from '../assets/scissors.png'
import paper from '../assets/paper.png'
import './ImageContainer.css'

function ImageSrc({ cardType } = {}) {
  // 1. Define the mapping object
  const cardImages = {
    rock: rock,
    scissors: scissors,
    paper: paper
  };

  // 2. Look up the value using the key
  // Fallback to null if the key doesn't exist
  const cardImg = cardImages[cardType] || null;

  return (
    <div className="image-container">
        <div className="card-border">
            <img src={cardImg} title={cardType} alt={cardType} className="card-image"/>    
        </div>
    </div>
  );
}

export default ImageSrc;