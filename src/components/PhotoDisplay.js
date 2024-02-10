// PhotoDisplay.js
import React from 'react';
import imageSrc from '../assets/foto.jpg'; // Importa la imagen

function PhotoDisplay() {
  return (
    <div className="bogarra">
      <img src={imageSrc} alt="Bogarra" width="400" height="280"/>
    </div>
  );
}

export default PhotoDisplay;
