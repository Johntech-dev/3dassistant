import React, { useState } from 'react';
import Assistant from './Component/Assistant'
import Button from './Component/Button'
import HoverIcon from './Component/HoverIcon'
import './App.css';

const App = () => {
  const [targetButton, setTargetButton] = useState(null);

  const handleButtonClick = () => {
    setTargetButton(document.getElementById('targetButton'));
  };

  return (
    <div className="App">
      <Button onClick={handleButtonClick} />
      <HoverIcon />
      <Assistant targetButton={targetButton} />
      <div id="targetButton" style={{ marginTop: '200px' }}>
        Target Button
      </div>
    </div>
  );
};

export default App;

