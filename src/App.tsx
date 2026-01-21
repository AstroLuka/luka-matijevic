import { useEffect, useState } from 'react'
import { 
  User, Briefcase, GraduationCap, BookOpen, Award, 
  Mail, Phone, MapPin,
  Menu, X, Star, Code, Cpu, Globe, ChevronDown
} from 'lucide-react'
import './App.css'

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#research', label: 'Research' },
    { href: '#experience', label: 'Experience' },
    { href: '#publications', label: 'Publications' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-semibold text-gradient">Luka Matijević</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

// Hero Section
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-float mb-8">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
            <img 
              src="/profile-photo.jpg" 
              alt="Luka Matijević" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span className="text-gradient">Luka Matijević</span>
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-2">
          Teaching Assistant & PhD Student
        </p>
        
        <p className="text-lg sm:text-xl text-muted-foreground/80 mb-8 max-w-2xl mx-auto">
          Studying environmental effects on galactic dynamics and morphology
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a 
            href="#contact" 
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/30"
          >
            Get in Touch
          </a>
          <a 
            href="#publications" 
            className="px-8 py-3 glass-card text-foreground rounded-full font-medium hover:bg-white/10 transition-all"
          >
            View Publications
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a href="https://orcid.org/0009-0004-2049-7701" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Globe size={24} />
          </a>
          <a href="mailto:luka.matijevic10@hotmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-muted-foreground" size={32} />
      </div>
    </section>
  )
}

// About Section
const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate astrophysicist dedicated to understanding galaxy evolution
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-8">
            <div className="flex items-center gap-4 mb-6">
              <User className="text-primary" size={24} />
              <h3 className="text-xl font-semibold">Biography</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I am a PhD student in Astrophysics at the University of Zagreb, Faculty of Science, 
              Department of Physics. My research focuses on understanding how environmental effects 
              influence the dynamics and morphology of galaxies on sub-kiloparsec scales.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently, I am investigating the peculiar lopsided galaxy NGC 2276 and its interaction 
              with the surrounding intragroup medium, studying the competing effects of ram pressure 
              stripping and tidal interactions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="glass-card-hover p-6">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-primary" size={20} />
                <span className="font-medium">Location</span>
              </div>
              <p className="text-muted-foreground">Zagreb, Croatia</p>
            </div>

            <div className="glass-card-hover p-6">
              <div className="flex items-center gap-3 mb-3">
                <Briefcase className="text-primary" size={20} />
                <span className="font-medium">Current Position</span>
              </div>
              <p className="text-muted-foreground">Teaching Assistant & PhD Researcher</p>
              <p className="text-sm text-muted-foreground/70">University of Zagreb, Department of Physics</p>
            </div>

            <div className="glass-card-hover p-6">
              <div className="flex items-center gap-3 mb-3">
                <Star className="text-primary" size={20} />
                <span className="font-medium">Research Focus</span>
              </div>
              <p className="text-muted-foreground">Galaxy Evolution & Environmental Effects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Research Section
const ResearchSection = () => {
  const researchInterests = [
    {
      title: "Environmental Effects on Galaxies",
      description: "Studying how the surrounding medium affects sub-kpc galactic dynamics and morphology",
    },
    {
      title: "Star Formation Rate/History",
      description: "Investigating star formation patterns in interacting galaxies",
    },
    {
      title: "ISM/IGM Properties",
      description: "Analyzing the interstellar and intergalactic medium characteristics",
    },
    {
      title: "Multi-wavelength Data Analysis",
      description: "Working with ultraviolet, optical, infrared, and radio telescope data",
    },
  ]

  return (
    <section id="research" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">Research Interests</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Exploring the fascinating world of galaxy evolution and dynamics
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {researchInterests.map((interest, index) => (
            <div key={index} className="glass-card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Star className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{interest.title}</h3>
                  <p className="text-muted-foreground text-sm">{interest.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PhD Thesis */}
        <div className="mt-12 glass-card p-8">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="text-primary" size={24} />
            <h3 className="text-xl font-semibold">PhD Thesis</h3>
          </div>
          <p className="text-lg text-foreground mb-2">
            "Environmental effects on the physical and chemical properties of NGC 2276 on small spatial scales"
          </p>
          <p className="text-muted-foreground">
            Under the supervision of Asst. Prof. Neven Tomičić and Dr. Antonino Marasco
          </p>
        </div>
      </div>
    </section>
  )
}

// Experience Section
const ExperienceSection = () => {
  const experiences = [
    {
      title: "Teaching Assistant",
      institution: "University of Zagreb, Faculty of Science, Department of Physics",
      period: "2023 – Present",
      description: "Teaching Physics 1, Physics 2, Introduction to Astrophysics, Physics of the Stars, and Introductory Physics Lab 1",
    },
    {
      title: "Junior Teaching Assistant",
      institution: "University of Zagreb, Faculty of Science, Department of Physics",
      period: "2018 – 2019",
      description: "Assisting students with programming tasks in C and Python languages",
    },
    {
      title: "Student Internship",
      institution: "Xylon d.o.o., Zagreb",
      period: "2021",
      description: "Creating Matlab-Blender interface for animations using simulated camera data on vehicles",
    },
  ]

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic and professional journey in research and education
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="glass-card-hover p-8">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-1/4">
                  <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {exp.period}
                  </span>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  <p className="text-primary mb-3">{exp.institution}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Publications Section
const PublicationsSection = () => {
  const publications = [
    {
      type: "First Author",
      year: "2026",
      title: "The Competing Influence of Ram Pressure and Tidal Interaction in NGC 2276",
      authors: "Matijević, L., Tomičić, N., Marasco, A. et al.",
      journal: "Astronomy & Astrophysics, in press",
    },
    {
      type: "Co-author",
      year: "2026",
      title: "Distinguishing ram pressure from gravitational interactions: Applying the size-shape difference method to real galaxies",
      authors: "Lassen, A. E., Smith, R., et al. incl. Matijević, L.",
      journal: "Astronomy & Astrophysics, in press",
    },
    {
      type: "Co-author",
      year: "2024",
      title: "A 100 kpc ram pressure tail trailing the group galaxy NGC 2276",
      authors: "Roberts, I. D., van Weeren, R. J., et al. incl. Matijević, L.",
      journal: "Astronomy & Astrophysics, 689, A22-A35",
    },
  ]

  const conferences = [
    { title: "Multi-phase, Multi-temperature and Complex", location: "Olbia, Italy", date: "October 2025", type: "Poster" },
    { title: "CL2025: Entering a Golden Age of Galaxy Cluster Studies", location: "Taipei, Taiwan", date: "September 2025", type: "Poster" },
    { title: "Croatian Astronomical Society Scientific Meeting", location: "Rijeka, Croatia", date: "November 2024", type: "Oral" },
    { title: "GASPisa 2024 Scientific Conference", location: "Pisa, Italy", date: "May 2024", type: "Poster" },
    { title: "PhD Student Symposium", location: "Zagreb, Croatia", date: "April 2024", type: "Oral" },
  ]

  return (
    <section id="publications" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">Publications & Conferences</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Research contributions to the field of astrophysics
          </p>
        </div>

        {/* Publications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <BookOpen className="text-primary" size={24} />
            Publications
          </h3>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="glass-card-hover p-6">
                <div className="flex items-start gap-4">
                  <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full shrink-0 mt-1">
                    {pub.type}
                  </span>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm text-muted-foreground">{pub.year}</span>
                    </div>
                    <h4 className="text-lg font-medium mb-2">{pub.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                    <p className="text-sm text-primary">{pub.journal}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conferences */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <Award className="text-primary" size={24} />
            Conference Presentations
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {conferences.map((conf, index) => (
              <div key={index} className="glass-card-hover p-5">
                <div className="flex items-start justify-between mb-3">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    conf.type === "Oral" 
                      ? "bg-primary/20 text-primary" 
                      : "bg-secondary/50 text-muted-foreground"
                  }`}>
                    {conf.type} Presentation
                  </span>
                  <span className="text-sm text-muted-foreground">{conf.date}</span>
                </div>
                <h4 className="font-medium mb-2">{conf.title}</h4>
                <p className="text-sm text-muted-foreground">{conf.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Skills Section
const SkillsSection = () => {
  const skills = {
    programming: [
      { name: "Python", level: "Advanced" },
      { name: "C", level: "Intermediate" },
      { name: "MATLAB", level: "Beginner" },
    ],
    modeling: [
      { name: "Blender", level: "Advanced" },
      { name: "3ds Max", level: "Beginner" },
    ],
    tools: [
      "Linux/UNIX", "LaTeX", "MS Office", "Qtiplot", "SAOImageDS9", 
      "PyQSOFit", "QFitsView", "3DBarolo", "Galfit", "Bagpipes", "SExtractor"
    ],
  }

  const languages = [
    { name: "Croatian", level: "Native" },
    { name: "English", level: "B2 (CEFR)" },
  ]

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technical capabilities and tools for astronomical research
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Programming */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <Code className="text-primary" size={24} />
              <h3 className="text-xl font-semibold">Programming</h3>
            </div>
            <div className="space-y-4">
              {skills.programming.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">{skill.level}</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                      style={{ width: skill.level === "Advanced" ? "90%" : skill.level === "Intermediate" ? "70%" : "50%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3D Modeling */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="text-primary" size={24} />
              <h3 className="text-xl font-semibold">3D Modeling</h3>
            </div>
            <div className="space-y-4">
              {skills.modeling.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">{skill.level}</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                      style={{ width: "90%" }}
                    />
                  </div>
                </div>
              ))}
              <p className="text-xs text-muted-foreground mt-4">
                Modeling, UV unwrapping, texturing, rendering, and animation
              </p>
            </div>
          </div>

          {/* Languages */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="text-primary" size={24} />
              <h3 className="text-xl font-semibold">Languages</h3>
            </div>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm font-medium">{lang.name}</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="mt-12 glass-card p-8">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
            <Briefcase className="text-primary" size={20} />
            Astronomical & Research Tools
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.tools.map((tool, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-secondary/50 text-sm rounded-lg hover:bg-secondary transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Education Section
const EducationSection = () => {
  const education = [
    {
      degree: "Doctoral Study of Physics - Astrophysics",
      institution: "University of Zagreb, Faculty of Science, Department of Physics",
      period: "2023 – Present",
      thesis: "Environmental effects on the physical and chemical properties of NGC 2276 on small spatial scales",
    },
    {
      degree: "Master of Science in Physics (Integrated Program)",
      institution: "University of Zagreb, Faculty of Science, Department of Physics",
      period: "2017 – 2023",
      thesis: "Masses of supermassive black holes in quasars",
    },
  ]

  const courses = [
    { name: "The Diversity of Exoplanets", provider: "University of Geneva (Coursera)", year: "2022" },
    { name: "Data-driven Astronomy", provider: "University of Sydney (Coursera)", year: "2022" },
    { name: "Mobile App Development", provider: "EESTEC LC Zagreb", year: "2022" },
    { name: "Elements of AI", provider: "University of Zagreb & University of Helsinki", year: "2020" },
    { name: "3D Modelling in Autodesk 3ds Max", provider: "Studium College", year: "2020" },
  ]

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic background and continuous learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Education */}
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="glass-card-hover p-6">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="text-primary" size={24} />
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {edu.period}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{edu.degree}</h3>
                <p className="text-muted-foreground mb-3">{edu.institution}</p>
                <div className="border-l-2 border-primary/30 pl-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Thesis:</span> {edu.thesis}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Courses */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <Award className="text-primary" size={20} />
              Additional Courses & Certifications
            </h3>
            <div className="space-y-4">
              {courses.map((course, index) => (
                <div key={index} className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{course.name}</h4>
                    <p className="text-sm text-muted-foreground">{course.provider}</p>
                  </div>
                  <span className="text-sm text-muted-foreground shrink-0 ml-4">
                    {course.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact Section
const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in collaboration or have questions about my research? Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-8">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <a 
                href="mailto:luka.matijevic10@hotmail.com"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">luka.matijevic10@hotmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+385993779292"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+385 99 377 9292</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-lg">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Zagreb, Croatia</p>
                </div>
              </div>

              <a 
                href="https://orcid.org/0009-0004-2049-7701"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Globe className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">ORCID</p>
                  <p className="font-medium">0009-0004-2049-7701</p>
                </div>
              </a>
            </div>
          </div>

          <div className="glass-card p-8">
            <h3 className="text-xl font-semibold mb-6">Affiliations</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary/50 rounded-lg mt-1">
                  <Star className="text-primary" size={16} />
                </div>
                <div>
                  <p className="font-medium">University of Zagreb</p>
                  <p className="text-sm text-muted-foreground">Faculty of Science, Department of Physics</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary/50 rounded-lg mt-1">
                  <Star className="text-primary" size={16} />
                </div>
                <div>
                  <p className="font-medium">Croatian Astronomical Society (HAD)</p>
                  <p className="text-sm text-muted-foreground">Member since 2025</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Note:</span> I'm always open to discussing 
                research collaborations, observing proposals, or academic opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer
const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Luka Matijević. All rights reserved.
        </p>
        <p className="text-muted-foreground/60 text-xs mt-2">
          Astrophysicist | PhD Researcher | University of Zagreb
        </p>
      </div>
    </footer>
  )
}

// Main App
function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ResearchSection />
      <ExperienceSection />
      <PublicationsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
