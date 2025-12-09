
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Championships from './components/Championships';
import Dressage from './components/Dressage';
import Gallery from './components/Gallery';
import Club from './components/Club';
import News from './components/News';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Championships />
        <Dressage />
        <Gallery />
        <Club />
        <News />
      </main>
      <Footer />
    </div>
  );
};

export default App;
