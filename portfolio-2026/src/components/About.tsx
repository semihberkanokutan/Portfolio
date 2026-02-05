import React from 'react';

const About = () => {
  const skills = [
    { category: "Languages", items: ["TypeScript", "Python", "C++", "Go"] },
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "PostgreSQL", "Redis"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Linux"] },
  ];

  return (
    <section id="about" className="py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: Bio */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white flex items-center gap-4">
            <span className="text-blue-500">01.</span> About Me
          </h2>
          
          <div className="text-gray-400 space-y-4 text-lg leading-relaxed">
            <p>
              Hello! My name is <span className="text-white font-medium">Your Name</span>. 
              My journey into programming started when I tried to automate my math homework 
              in high school, which sparked a deep curiosity about how software works under the hood.
            </p>
            <p>
              Fast-forward to today, I&apos;m a Computer Science student at <span className="text-white">Your University</span>. 
              My main focus is building scalable, distributed systems and exploring the 
              intersection of performance and user experience.
            </p>
            <p>
              When I&apos;m not at my desk, you&apos;ll probably find me at a hackathon, 
              contributing to open-source projects, or geeking out over mechanical keyboards.
            </p>
          </div>
        </div>

        {/* Right Column: Skills Grid */}
        <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
          <h3 className="text-xl font-semibold text-white mb-6">Technical Arsenal</h3>
          <div className="grid grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.category}>
                <h4 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-3">
                  {skill.category}
                </h4>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-300 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;