// import * as React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Electrical Contractor Website',
    description: 'An example of a simple yet professional website for an electrical contractor.',
    image: 'https://plus.unsplash.com/premium_photo-1682086494838-6410429123a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://spiffy-truffle-660eaf.netlify.app/',
    githubUrl: 'https://github.com/SideControlJS/electrical-contractor'
  },
  {
    title: 'E-Commerce Backend',
    description: 'Using Object Relational Mapping (ORM) to create a backend for an e-commerce site.',
    image: 'https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['Node.js', 'Express', 'MySQL', 'Insomnia', 'Sequelize'],
    githubUrl: 'https://github.com/SideControlJS/e-commerce'
  },
  {
    title: 'Basic Weather Dashboard',
    description: 'A simple, intuitive mobile friendly weather dashboard using the OpenWeather API.',
    image: 'https://images.unsplash.com/photo-1534068731687-d70176c2e7d5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['JavaScript', 'Bootstrap', 'HTML',],
    liveUrl: 'https://sidecontroljs.github.io/me-weather/',
    githubUrl: 'https://github.com/SideControlJS/me-weather'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Here are some of my recent works that showcase my skills and experience.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={project.image} alt={project.title} />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <p className="mt-3 text-base text-gray-500">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex items-center space-x-4">
                  <a href={project.liveUrl} className="text-sm text-gray-600 hover:text-indigo-600 flex items-center">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </a>
                  <a href={project.githubUrl} className="text-sm text-gray-600 hover:text-indigo-600 flex items-center">
                    <Github className="h-4 w-4 mr-1" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}