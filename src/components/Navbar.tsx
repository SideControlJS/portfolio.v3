import * as React from 'react';
import { Menu, X, Code2, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Jesse Lare</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
              <a href="#projects" className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Projects</a>
              <a href="#skills" className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Skills & Services</a>
              <a href="#contact" className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/SideControlJS" className="text-gray-500 hover:text-gray-900 transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="www.linkedin.com/in/jesselare" className="text-gray-500 hover:text-gray-900 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:jesse.lare@gmail.com" className="text-gray-500 hover:text-gray-900 transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#projects" className="block text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">Projects</a>
            <a href="#skills" className="block text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">Skills</a>
            <a href="#contact" className="block text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}