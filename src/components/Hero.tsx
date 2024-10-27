import React from 'react';
import { ArrowRight, Terminal, Server, Globe, Code2 } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 lg:w-full lg:max-w-2xl">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
            <div className="sm:text-center lg:text-left">
              <div className="flex items-center mb-8 sm:justify-center lg:justify-start">
                <img
                  src="/profile.jpg"
                  alt="Jesse Lare"
                  className="h-24 w-24 rounded-full object-cover border-4 border-indigo-600 shadow-lg"
                />
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Full Stack Web Developer</span>
                <span className="block text-indigo-600">Industry Expert Turned Developer</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                With a background in project management, engineering management, and a Full Stack Web Development certification, I help small businesses solve complex challenges and elevate their digital presence. I bring technical skill, creativity, and problem-solving expertise to help your business thrive.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Get in touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full bg-indigo-50 sm:h-72 md:h-96 lg:w-full lg:h-full p-8 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4">
            <Terminal className="h-16 w-16 text-indigo-600" />
            <Server className="h-16 w-16 text-indigo-600" />
            <Globe className="h-16 w-16 text-indigo-600" />
            <Code2 className="h-16 w-16 text-indigo-600" />
          </div>
        </div>
      </div>
    </div>
  );
}