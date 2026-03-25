import React from 'react';
import '../../styles/components/graphics/DecorativePattern.css';

const DecorativePattern = ({ type = 'dots', color = 'var(--color-primary-light)' }) => {
  const patterns = {
    dots: (
      <svg className="decorative-pattern" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="2" fill={color} />
        <circle cx="30" cy="10" r="2" fill={color} />
        <circle cx="50" cy="10" r="2" fill={color} />
        <circle cx="70" cy="10" r="2" fill={color} />
        <circle cx="90" cy="10" r="2" fill={color} />
        <circle cx="10" cy="30" r="2" fill={color} />
        <circle cx="30" cy="30" r="2" fill={color} />
        <circle cx="50" cy="30" r="2" fill={color} />
        <circle cx="70" cy="30" r="2" fill={color} />
        <circle cx="90" cy="30" r="2" fill={color} />
        <circle cx="10" cy="50" r="2" fill={color} />
        <circle cx="30" cy="50" r="2" fill={color} />
        <circle cx="50" cy="50" r="2" fill={color} />
        <circle cx="70" cy="50" r="2" fill={color} />
        <circle cx="90" cy="50" r="2" fill={color} />
      </svg>
    ),
    waves: (
      <svg className="decorative-pattern" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,50 Q25,30 50,50 T100,50 T150,50 T200,50" stroke={color} fill="none" strokeWidth="1.5" />
        <path d="M0,70 Q25,50 50,70 T100,70 T150,70 T200,70" stroke={color} fill="none" strokeWidth="1.5" opacity="0.6" />
        <path d="M0,30 Q25,10 50,30 T100,30 T150,30 T200,30" stroke={color} fill="none" strokeWidth="1.5" opacity="0.6" />
      </svg>
    ),
    circles: (
      <svg className="decorative-pattern" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="8" fill="none" stroke={color} strokeWidth="1.5" />
        <circle cx="160" cy="40" r="12" fill="none" stroke={color} strokeWidth="1.5" />
        <circle cx="100" cy="100" r="15" fill="none" stroke={color} strokeWidth="1.5" />
        <circle cx="40" cy="160" r="10" fill="none" stroke={color} strokeWidth="1.5" />
        <circle cx="160" cy="160" r="6" fill="none" stroke={color} strokeWidth="1.5" />
      </svg>
    ),
    lines: (
      <svg className="decorative-pattern" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="20" x2="200" y2="20" stroke={color} strokeWidth="1.5" strokeDasharray="5 5" />
        <line x1="0" y1="50" x2="200" y2="50" stroke={color} strokeWidth="1.5" strokeDasharray="5 5" />
        <line x1="0" y1="80" x2="200" y2="80" stroke={color} strokeWidth="1.5" strokeDasharray="5 5" />
      </svg>
    )
  };

  return (
    <div className="decorative-pattern-wrapper">
      {patterns[type]}
    </div>
  );
};

export default DecorativePattern;