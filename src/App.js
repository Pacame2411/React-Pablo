
import React from 'react';
import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer';
import PhotoDisplay from './components/PhotoDisplay';
import Footer from './components/Footer';
import foto from './assets/foto.jpg';

function App() {
  return (
    <div>
      <Header imageUrl={foto} />
      <VideoPlayer />
      <PhotoDisplay />
      <Footer />
    </div>
  );
}

export default App;