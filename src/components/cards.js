import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './cards.css';

const HoverCard = ({ title, description1, description2, description3, description4, imageUrl, buttonText }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div className="card-wrapper" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="card-custom" ref={cardRef}>
        <img
          src={imageUrl || "https://via.placeholder.com/300x200"}
          alt={title}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <ul className="card-text">
            <li>{description1}</li>
            <li>{description2}</li>
            <li>{description3}</li>
            <li>{description4}</li>
          </ul>
          <Link 
            to="/work" 
            className="btn-primary"
            aria-label={`View ${title} projects`}
            title={`View ${title} projects`}
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
