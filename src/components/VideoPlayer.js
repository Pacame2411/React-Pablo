import React from 'react';
import videoSrc from '../assets/video.mp4'; // Asegúrate de que la ruta sea correcta.

function VideoPlayer() {
  return (
    <div className="video">
      <video width="400" controls>
        <source src={videoSrc} type="video/mp4"/>
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
}

export default VideoPlayer;
