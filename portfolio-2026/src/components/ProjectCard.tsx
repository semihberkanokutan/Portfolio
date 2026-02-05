import { Github, ExternalLink } from 'lucide-react';
import { Project } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all duration-300">
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
        {project.description}
      </p>
      
      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.techStack.map((tech) => (
          <span key={tech} className="px-2 py-1 text-[10px] font-mono text-blue-300 bg-blue-500/10 rounded-md">
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        <a href={project.githubUrl} className="text-gray-400 hover:text-white transition-colors">
          <Github size={20} />
        </a>
        {project.liveUrl && (
          <a href={project.liveUrl} className="text-gray-400 hover:text-white transition-colors">
            <ExternalLink size={20} />
          </a>
        )}
      </div>
    </div>
  );
}