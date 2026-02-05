import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="flex flex-col mb-12">
        <h2 className="text-3xl font-bold text-white">Featured Work</h2>
        <div className="h-1 w-20 bg-blue-500 mt-2"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}