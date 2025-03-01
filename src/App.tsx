import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Star, Code, Brain, Terminal, Sun, Moon } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const projects = [
    {
      title: "Blood Bank Management System",
      description: "Developed a web-based system to manage blood donations, donor records, and blood inventory efficiently. Implemented secure user authentication, real-time notifications for donation requests, and a streamlined database using Supabase.",
      github: "https://github.com/SAYANISHAN98/bbmsweb",
      demo: "#",
      image: "https://images.unsplash.com/photo-1583912267550-9333a968635d?auto=format&fit=crop&q=80",
      tools: "React, Supabase, Tailwind"
    },
    {
      title: "Blood Donor App",
      description: "A mobile-friendly app connecting donors with recipients, featuring real-time requests, secure authentication, and push notifications using Supabase.",
      github: "https://github.com/sivavithu/BlOOD_aPP",
      demo: "#",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
      tools: "React Native (Expo), Supabase, Firebase (EAS)"
    },
    {
      title: "Expense-Tracker",
      description: "Developed a web app with a functional UI for managing and tracking financial transactions.",
      github: "https://github.com/sivavithu/expense-tracker",
      demo: "#",
      image: "https://images.unsplash.com/photo-1551288049-b5d1ca341e87?auto=format&fit=crop&q=80",
      tools: "Next.js, Tailwind, Clerk, Neon (PostgreSQL)"
    },
    {
      title: "Complaint-Management",
      description: "Developed a system allowing students to file complaints about hardware repairs in the department, streamlining the reporting process and tracking the status of repairs.",
      github: "https://github.com/sivavithu/Complaint-Management",
      demo: "#",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
      tools: "PHP, MySQL, JavaScript"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-indigo-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors z-50"
        aria-label="Toggle theme"
      >
        {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      {/* Hero Section */}
      <header className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5 dark:opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-blue-400 dark:to-purple-600">
                Sivakumar Vithurshan
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
                Full Stack Developer & AI Enthusiast
              </p>
              <div className="flex gap-4">
                <a href="#contact" className="bg-indigo-600 hover:bg-indigo-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors">
                  Get in Touch
                </a>
                <a href="#projects" className="border border-gray-300 dark:border-white/20 hover:border-gray-400 dark:hover:border-white/40 px-6 py-3 rounded-full font-medium transition-colors">
                  View Projects
                </a>
              </div>
              <div className="mt-4 flex flex-wrap gap-4">
                <a href="mailto:sivavithu15@live.com" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  <Mail className="w-5 h-5" /> sivavithu15@live.com
                </a>
                
                <a href="https://vithu98.vercel.app/" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5" /> Portfolio
                </a>
                <a href="https://www.linkedin.com/in/vithurshan-sivakumar-a55b2379/" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
                <a href="https://github.com/sivavithu" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" /> GitHub
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-500/30 dark:border-blue-500/30">
                <img 
                  src="../images/vithu.jpg" 
                  alt="Sivakumar Vithurshan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50 dark:bg-black/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-white/5 p-6 rounded-xl shadow-lg dark:shadow-none backdrop-blur-sm">
              <Terminal className="w-12 h-12 text-indigo-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
              <p className="text-gray-600 dark:text-gray-400">Building scalable web applications with modern technologies.</p>
            </div>
            <div className="bg-white dark:bg-white/5 p-6 rounded-xl shadow-lg dark:shadow-none backdrop-blur-sm">
              <Brain className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Enthusiast</h3>
              <p className="text-gray-600 dark:text-gray-400">Exploring machine learning and deep learning applications.</p>
            </div>
            <div className="bg-white dark:bg-white/5 p-6 rounded-xl shadow-lg dark:shadow-none backdrop-blur-sm">
              <Code className="w-12 h-12 text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
              <p className="text-gray-600 dark:text-gray-400">Turning complex problems into elegant solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {['Java', 'Python', 'C++', 'PHP', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'Next.js'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-indigo-100 dark:bg-blue-500/20 text-indigo-700 dark:text-blue-300 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Tools</h3>
              <div className="flex flex-wrap gap-3">
                {['Adobe Illustrator', 'MySQL', 'MariaDB', 'PostgreSQL', 'Visual Studio', 'IntelliJ IDEA', 'MATLAB', 'Android Studio'].map((tool) => (
                  <span key={tool} className="px-4 py-2 bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 rounded-full">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white/50 dark:bg-black/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-white/5 rounded-xl overflow-hidden shadow-lg dark:shadow-none">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">Tools Used: {project.tools}</p>
                  <div className="flex gap-4">
                    <a href={project.github} className="flex items-center gap-2 text-indigo-600 dark:text-blue-400 hover:text-indigo-500 dark:hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" /> Code
                    </a>
                    <a href={project.demo} className="flex items-center gap-2 text-indigo-600 dark:text-blue-400 hover:text-indigo-500 dark:hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" /> Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center gap-8 mb-12">
              <a href="https://github.com/sivavithu" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <Github className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/vithurshan-sivakumar-a55b2379/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="mailto:sivavithu15@live.com" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Mail className="w-8 h-8" />
              </a>
            </div>
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-gray-300 dark:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-blue-500 dark:placeholder-gray-400"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-gray-300 dark:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-blue-500 dark:placeholder-gray-400"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-gray-300 dark:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-blue-500 dark:placeholder-gray-400"
                ></textarea>
              </div>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-600 dark:text-gray-400">
        <p>© 2025 Sivakumar Vithurshan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;