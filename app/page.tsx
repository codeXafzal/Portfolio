'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Scene3D from '@/components/Scene3D';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import About from '@/components/About'
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <main className="relative">
      <SmoothScroll />
      <Navbar />
      <Hero />
      <Projects />

      <Scene3D />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
