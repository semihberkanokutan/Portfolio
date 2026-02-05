import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-blue-500/30">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}