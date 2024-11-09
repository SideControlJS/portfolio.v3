import { Code2, Database, Globe, Code, RefreshCw, Laptop } from 'lucide-react';

const technicalSkills = [
  {
    category: 'Full Stack Development',
    icon: <Code2 className="h-6 w-6 text-indigo-600" />,
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'MERN Stack']
  },
  {
    category: 'Frontend',
    icon: <Globe className="h-6 w-6 text-indigo-600" />,
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Tailwind CSS']
  },
  {
    category: 'Backend & Database',
    icon: <Database className="h-6 w-6 text-indigo-600" />,
    technologies: ['RESTful APIs', 'MongoDB', 'MySQL', 'Authentication', 'API Integration']
  }
];

const industryExpertise = [
  {
    category: 'Full Stack Web Development',
    icon: <Code className="h-6 w-6 text-indigo-600" />,
    areas: ['Frontend Development', 'Backend Development', 'Database Management', 'API Integration']
  },
  {
    category: 'Website Refresh',
    icon: <RefreshCw className="h-6 w-6 text-indigo-600" />,
    areas: ['Website Redesign', 'UX/UI Improvements', 'Performance Optimization', 'SEO Enhancements']
  },
  {
    category: 'WordPress Development',
    icon: <Laptop className="h-6 w-6 text-indigo-600" />,
    areas: ['Theme Customization', 'Plugin Integration', 'E-commerce Setup', 'Content Management Support']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Skills & Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Combining technical skills and creativity to deliver tailored web solutions.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Technical Skills</h3>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {skill.icon}
                  <h3 className="ml-3 text-lg font-medium text-gray-900">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-gray-800 border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Services</h3>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {industryExpertise.map((expertise, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {expertise.icon}
                  <h3 className="ml-3 text-lg font-medium text-gray-900">{expertise.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {expertise.areas.map((area, areaIndex) => (
                    <span
                      key={areaIndex}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-gray-800 border border-gray-200"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}