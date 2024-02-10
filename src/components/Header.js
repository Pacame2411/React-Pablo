import React from 'react';
import audioClip from '../assets/Bulgari.wav'; // Ajusta el path según tu estructura de archivos

function Header({ imageUrl }) {
  return (
    <header className="cabecera">
      <h2 className="nombre">Pablo Calleja</h2>
      <img src={imageUrl} alt="Imagen de perfil" className="imagen-perfil"/>
      <audio controls className="audio">
          <source src={audioClip} type="audio/wav"/>
      </audio>
    </header>
  );
}

export default Header;
