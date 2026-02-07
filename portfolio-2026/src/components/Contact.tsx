import React from 'react';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Get In Touch
        </h2>
        
        <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
          I&apos;m currently looking for new opportunities in 2026. Whether you have a 
          question or just want to say hi, my inbox is always open!
        </p>

        {/* Contact Method: The Big Button */}
        <a 
          href="mailto:okutansemih11@gmail.com" 
          className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all hover:-translate-y-1 mb-16"
        >
          <Mail size={20} />
          Say Hello
        </a>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <a 
            href="https://github.com/semihberkanokutan" 
            target="_blank" 
            className="flex items-center justify-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
          >
            <Github size={18} className="text-blue-400" />
            <span className="text-sm font-medium">GitHub</span>
            <ExternalLink size={14} className="text-gray-500" />
          </a>

          <a 
            href="https://www.linkedin.com/in/semih-berkan-okutan/" 
            target="_blank" 
            className="flex items-center justify-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
          >
            <Linkedin size={18} className="text-blue-400" />
            <span className="text-sm font-medium">LinkedIn</span>
            <ExternalLink size={14} className="text-gray-500" />
          </a>

          <div className="flex items-center justify-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl cursor-default">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Konya, Türkiye</span>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <footer className="mt-24 text-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} - Built with Next.js & Tailwind</p>
      </footer>
    </section>
  );
};

export default Contact;