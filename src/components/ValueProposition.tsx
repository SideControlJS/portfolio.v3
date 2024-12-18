import React from 'react';
import { Server, Layout, Database, Zap } from 'lucide-react';

const benefits = [
  {
    icon: <Layout className="h-6 w-6 text-indigo-600" />,
    title: "End-to-End Solutions",
    description: "From beautiful user interfaces to powerful backend systems, I handle every aspect of your web application. This means seamless integration and consistent quality throughout."
  },
  {
    icon: <Database className="h-6 w-6 text-indigo-600" />,
    title: "Complete Technology Stack",
    description: "Using modern technologies like React, Node.js, and MongoDB, I build scalable, maintainable applications that grow with your business and adapt to changing needs."
  },
  {
    icon: <Server className="h-6 w-6 text-indigo-600" />,
    title: "Technical Background",
    description: "My experience in project management and engineering brings a unique perspective to web development, focusing on practical solutions that solve real business problems."
  }
];

export default function ValueProposition() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What is Full Stack Development?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Full stack development encompasses both the visible parts of your website and the underlying systems that make it work seamlessly. Here’s how my expertise can support your business:
          </p>
        </div>

        <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="absolute top-0 -translate-y-1/2 p-3 bg-white rounded-full shadow-md">
                {benefit.icon}
              </div>
              <h3 className="mt-8 text-lg font-medium text-gray-900">
                {benefit.title}
              </h3>
              <p className="mt-2 text-base text-gray-500">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-indigo-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Why Choose a Full Stack Developer?
          </h3>
          <div className="prose prose-indigo max-w-none">
            <p className="text-gray-600">
            Working with a full stack developer means you get more than a website builder; you gain a partner who understands how every element—from user experience to data security—fits together to serve your business. My systems integration experience ensures that each component works harmoniously, creating a solution that meets your unique needs.
            </p>
            <br />
            <p className="text-gray-600">
            I offer both comprehensive web applications and simpler, effective solutions. Whether you need a website refresh, a landing page, or a straightforward site without complex back-end development, I deliver visually appealing and results-driven designs tailored to your business goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}