import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] py-20 text-center">
      {/* Availability Badge */}
      <div className="mb-6 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs md:text-sm font-medium animate-pulse">
        Open for 2026 Internship Opportunities
      </div>

      {/* Main Headline */}
      <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter text-white mb-8">
        Building the <br /> 
        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">
          Future of Web.
        </span>
      </h1>

      {/* Description */}
      <p className="max-w-2xl text-gray-400 text-lg md:text-xl leading-relaxed mb-12">
        Im <span className="text-white font-medium">Semih Berkan OKUTAN</span>, a Computer Science student 
        passionate about building robust backend systems and intuitive user experiences. 
        Currently exploring Distributed Systems and Cloud Architecture.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <a 
          href="#projects" 
          className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all text-center"
        >
          Explore Projects
        </a>
        <a 
          href="mailto:your.email@example.com" 
          className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-all text-center"
        >
          Get in Touch
        </a>
      </div>

      {/* Subtle background glow */}
      <div className="absolute top-1/4 -z-10 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full"></div>
    </section>
  );
};

export default Hero;