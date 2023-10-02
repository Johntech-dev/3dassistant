import React, { useState, useEffect } from 'react';
import './Assistant.css';

const Assistant = ({ targetButton }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (targetButton) {
      const buttonRect = targetButton.getBoundingClientRect();
      setPosition({ x: buttonRect.left, y: buttonRect.top });
    }
  }, [targetButton]);

  return (
    <div
      className="assistant"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      🎥
    </div>
  );
};

export default Assistant;
