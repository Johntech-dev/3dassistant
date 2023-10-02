import React from 'react';
import './Button.css';

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className="button">
      Click me
    </button>
  );
};

export default Button;
