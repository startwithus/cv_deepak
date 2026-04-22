import { useEffect } from 'react';
import WebGLBackground from './components/WebGLBackground';
import Cursor         from './components/Cursor';
import Navbar         from './components/Navbar';
import Hero           from './components/Hero';
import About          from './components/About';
import Skills         from './components/Skills';
import Experience     from './components/Experience';
import Projects       from './components/Projects';
import Contact        from './components/Contact';
import Footer         from './components/Footer';
import useScrollFadeIn from './hooks/useScrollFadeIn';
import useCursor       from './hooks/useCursor';

export default function App() {
  useScrollFadeIn();
  useCursor();

  return (
    <>
      {/* 3D WebGL animated background */}
      <WebGLBackground />

      {/* Custom cursor */}
      <Cursor />

      {/* Page content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
