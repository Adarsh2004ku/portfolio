import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  Image as ImageIcon,
  Code,
  Database,
  Cloud,
  Cpu,
} from "lucide-react";
import { projects } from "./data/projects";
import { skills } from "./data/skills";
import { profileConfig } from "./data/profile";

// Icon mapping for skills
const iconMap = {
  Code,
  Database,
  Cloud,
  Cpu,
};

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imageErrors, setImageErrors] = useState({});

  // Handle image loading errors
  const handleImageError = (key, fallback) => {
    setImageErrors((prev) => ({ ...prev, [key]: true }));
  };

  // Get project image path
  const getProjectImage = (project) => {
    if (!project.image) return null;
    // Check if it's an external URL
    if (project.image.startsWith("http")) {
      return project.image;
    }
    // Local image path
    return `/images/projects/${project.image}`;
  };

  // Get profile image path
  const getProfileImage = () => {
    if (!profileConfig.profileImage) return null;
    // Check if it's an external URL
    if (profileConfig.profileImage.startsWith("http")) {
      return profileConfig.profileImage;
    }
    // Local image path
    return profileConfig.profileImage;
  };

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Adarsh Kumar
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {["home", "about", "skills", "projects", "contact"].map(
                  (item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => scrollToSection(item)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                        activeSection === item
                          ? "bg-purple-600 text-white"
                          : "text-gray-300 hover:bg-purple-600/50 hover:text-white"
                      }`}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => scrollToSection(item)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                      activeSection === item
                        ? "bg-purple-600 text-white"
                        : "text-gray-300 hover:bg-purple-600/50 hover:text-white"
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              {getProfileImage() && !imageErrors.profile ? (
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-purple-500/50 shadow-lg shadow-purple-500/50">
                  <img
                    src={getProfileImage()}
                    alt={profileConfig.name}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError("profile", true)}
                  />
                </div>
              ) : (
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-6xl font-bold shadow-lg shadow-purple-500/50">
                  {profileConfig.useInitials ? profileConfig.initials : "AK"}
                </div>
              )}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              {profileConfig.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              {profileConfig.title}
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              {profileConfig.bio}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href={profileConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-all transform hover:scale-105"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href={profileConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all transform hover:scale-105"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href={`mailto:${profileConfig.social.email}`}
                className="flex items-center gap-2 px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg transition-all transform hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
            </div>

            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="animate-bounce mt-8 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <ChevronDown className="w-8 h-8 mx-auto" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">
                    Kaling Institute of Industrial Technology
                  </h4>
                  <p className="text-gray-400">
                    B.Tech in Information Technology
                  </p>
                  <p className="text-gray-500">2022 - 2026 | CGPA: 7.53</p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Holy Mission High School (CBSE)
                  </h4>
                  <p className="text-gray-500">2022 | 74.4%</p>
                </div>
                <div>
                  <h4 className="font-semibold">DAV Public School (CBSE)</h4>
                  <p className="text-gray-500">2020 | 89.6%</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">
                What I Do
              </h3>
              <p className="text-gray-300 mb-4">
                I&apos;m a passionate ML Engineer focused on building
                production-ready machine learning systems. My expertise lies in
                the intersection of data science, MLOps, and cloud
                technologies.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Designing and implementing end-to-end ML pipelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Building scalable data engineering solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Deploying ML models with MLOps best practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Creating data-driven solutions for real-world problems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills &amp; Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, data]) => {
              const IconComponent = iconMap[data.icon] || Code;
              return (
                <div
                  key={category}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-purple-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-lg">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {data.items.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-purple-600/30 rounded-full text-sm text-purple-300 border border-purple-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const projectImage = getProjectImage(project);
              const imageKey = `project-${index}`;
              const hasImageError = imageErrors[imageKey];

              return (
                <div
                  key={project.title}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105 flex flex-col"
                >
                  {/* Project Screenshot */}
                  {projectImage && !hasImageError ? (
                    <div className="w-full h-48 bg-slate-700/50 overflow-hidden">
                      <img
                        src={projectImage}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        onError={() => handleImageError(imageKey, true)}
                      />
                    </div>
                  ) : projectImage ? (
                    <div className="w-full h-48 bg-slate-700/50 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p className="text-xs">Image not found</p>
                      </div>
                    </div>
                  ) : null}

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-purple-400">
                        {project.title}
                      </h3>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          project.status === "Active Development"
                            ? "bg-green-600/30 text-green-300 border border-green-500/30"
                            : "bg-blue-600/30 text-blue-300 border border-blue-500/30"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-4 flex-grow">
                      {project.description}
                    </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-sm text-gray-400 flex items-start gap-2"
                      >
                        <span className="text-purple-400 mt-1">▹</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300 border border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors mt-auto"
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
            <p className="text-gray-300 text-center mb-8 text-lg">
              I&apos;m currently looking for opportunities in Machine Learning
              and Data Engineering roles. Feel free to reach out if you&apos;d
              like to collaborate or just want to connect!
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href={`mailto:${profileConfig.social.email}`}
                className="flex flex-col items-center gap-3 p-6 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all transform hover:scale-105"
              >
                <Mail className="w-8 h-8 text-purple-400" />
                <span className="text-gray-300 text-sm">
                  {profileConfig.social.email}
                </span>
              </a>
              <a
                href={`tel:${profileConfig.social.phone.replace(/-/g, "")}`}
                className="flex flex-col items-center gap-3 p-6 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all transform hover:scale-105"
              >
                <Phone className="w-8 h-8 text-purple-400" />
                <span className="text-gray-300 text-sm">
                  {profileConfig.social.phone}
                </span>
              </a>
              <a
                href={profileConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all transform hover:scale-105"
              >
                <Linkedin className="w-8 h-8 text-purple-400" />
                <span className="text-gray-300 text-sm">
                  Connect on LinkedIn
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900/80 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2024 {profileConfig.name}. Built with React &amp; Tailwind CSS</p>
          <p className="mt-2 text-sm">
            Open to opportunities • Based in {profileConfig.location}
          </p>
        </div>
      </footer>
    </div>
  );
}


