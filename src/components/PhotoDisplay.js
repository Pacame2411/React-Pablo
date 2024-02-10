import React from 'react';
import imageSrc from '../assets/bogarra.png'; // Asegúrate de que la ruta sea correcta.

function PhotoDisplay() {
  return (
    <div className="bogarra">
      <img src={imageSrc} alt="Bogarra" width="400" height="280"/>
    </div>
  );
}

export default PhotoDisplay;
