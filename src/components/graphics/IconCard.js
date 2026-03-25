import React from 'react';
import '../../styles/components/graphics/IconCard.css';

const IconCard = ({ icon, title, description, color = 'primary' }) => {
  return (
    <div className={`icon-card icon-card--${color}`}>
      <div className="icon-card__icon">
        {icon}
      </div>
      <h3 className="icon-card__title">{title}</h3>
      <p className="icon-card__description">{description}</p>
    </div>
  );
};

export default IconCard;