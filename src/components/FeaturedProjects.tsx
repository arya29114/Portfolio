"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  { 
    id: "01", 
    title: "SR Constructions", 
    desc: "Building efficiency. Empowering field teams. Delivering excellence. A centralized web and mobile solution that simplifies construction site management through seamless digital operations.",
    category: "WEB DESIGN", 
    image: "/project-sr-construction.png",
  },
  { 
    id: "02", 
    title: "Offbeat Studios", 
    desc: "A cinematic and immersive digital experience for a creative production agency.",
    category: "WEB DESIGN", 
    image: "/project-offbeat.png",
  },
  { 
    id: "03", 
    title: "MyKard", 
    desc: "A modern digital business card platform enabling professionals to share their identity instantly.",
    category: "MOBILE APP", 
    image: "/project-mykard.jpg",
  },
  { 
    id: "04", 
    title: "Coca Cola", 
    desc: "A bold, refreshing conceptual design celebrating the iconic beverage and its vibrant energy.",
    category: "CASE STUDY", 
    image: "/project-cocacola.jpg",
  }
];

// Reusable Premium Card Component
const ProjectCard = ({ project, className, imgClassName }: { project: typeof projects[0], className?: string, imgClassName?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    whileHover={{ y: -8 }}
    className={`group relative flex flex-col bg-[#2A0F0A] border-[3px] border-[#B84A1C]/70 overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(184,74,28,0.3)] transition-all duration-300 ${className}`}
    style={{
      backgroundImage: "linear-gradient(to bottom, rgba(184,74,28,0.05) 0%, rgba(0,0,0,0.3) 100%)",
      borderRadius: "4px 8px 3px 6px" // Uneven wooden frame look
    }}
  >
    {/* Realistic Masking Tape Accents */}
    <div 
      className="absolute -top-3 right-8 w-20 h-6 bg-[#E8D8C3] shadow-[0_2px_4px_rgba(0,0,0,0.2)] z-30 mix-blend-overlay opacity-80"
      style={{ 
        transform: "rotate(12deg)", 
        clipPath: "polygon(0% 10%, 100% 0%, 98% 90%, 2% 100%)",
        backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.1%22/%3E%3C/svg%3E')"
      }} 
    />
    <div 
      className="absolute -bottom-2 left-6 w-16 h-5 bg-[#E8D8C3] shadow-[0_2px_4px_rgba(0,0,0,0.2)] z-30 mix-blend-overlay opacity-70"
      style={{ 
        transform: "rotate(-8deg)", 
        clipPath: "polygon(2% 0%, 98% 10%, 100% 100%, 0% 90%)",
        backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.1%22/%3E%3C/svg%3E')"
      }} 
    />

    {/* Subtle Paper Texture Overlay */}
    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.5%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />

    {/* Project Image Canvas Area */}
    <div className={`relative w-full overflow-hidden shrink-0 p-3 lg:p-4 bg-[#1A0001]/40 border-b-2 border-[#B84A1C]/30 ${imgClassName}`}>
      {/* Rough Decorative Border Overlay */}
      <div className="absolute inset-0 border-2 border-[#B84A1C]/60 z-20 pointer-events-none" style={{ filter: "url(#rough-edges)" }} />
      
      <div 
        className="relative w-full h-full overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]"
        style={{ 
          borderRadius: "2px 3px 1px 2px"
        }}
      >
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="object-cover object-top group-hover:scale-105 transition-transform duration-[1.5s] ease-out contrast-[1.05]" 
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Grungy Canvas Overlay on Image */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.5%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.15%22 mix-blend-mode=%22multiply%22/%3E%3C/svg%3E')] pointer-events-none" />
      </div>
    </div>

    {/* Card Content */}
    <div className="flex flex-col p-6 lg:p-8 flex-1 relative z-10 justify-between">
      <div>
        <div className="flex justify-between items-start mb-4">
          <span className="bg-[#E8D8C3] text-[#1A0001] text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full shadow-sm">
            {project.category}
          </span>
          <span className="text-[#D8A15B] font-['var(--font-caveat)'] text-lg">{project.id}</span>
        </div>
        <h3 className="font-anton text-2xl lg:text-3xl text-[#E8D8C3] uppercase tracking-wide mb-3">
          {project.title}
        </h3>
        <p className="text-[#E8D8C3]/70 font-sans text-sm leading-relaxed mb-6">
          {project.desc}
        </p>
      </div>

      <div className="flex items-center gap-2 mt-auto text-[#B84A1C] font-bold text-xs uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity duration-300">
        <span>View Project</span>
        <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
      </div>
    </div>
  </motion.div>
);

export default function FeaturedProjects() {
  return (
    <section id="portfolio" className="relative w-full bg-[#1A0001] py-24 px-4 md:px-8 lg:px-16 overflow-hidden z-10 font-sans">
      
      {/* SVG Filters Definition */}
      <svg className="hidden">
        <filter id="rough-edges">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* Background Textures & Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
      
      {/* Soft radial glow behind right side typography */}
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-10 right-10 w-[600px] h-[600px] bg-[#B84A1C] rounded-full mix-blend-screen blur-[120px] pointer-events-none z-0" />
      <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.08, 0.05] }} transition={{ duration: 10, repeat: Infinity, delay: 1 }} className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-[#D8A15B] rounded-full mix-blend-screen blur-[150px] pointer-events-none z-0" />

      {/* Floating Plus Signs (Creative Details) */}
      <motion.div animate={{ y: [-10, 10, -10], rotate: [0, 90, 0] }} transition={{ duration: 15, repeat: Infinity }} className="absolute top-40 left-1/2 text-[#B84A1C]/30 font-mono text-2xl pointer-events-none">+</motion.div>
      <motion.div animate={{ y: [10, -10, 10], rotate: [0, -90, 0] }} transition={{ duration: 20, repeat: Infinity }} className="absolute bottom-40 left-[40%] text-[#D8A15B]/30 font-mono text-3xl pointer-events-none">+</motion.div>
      <motion.div animate={{ y: [-5, 5, -5], rotate: [0, 45, 0] }} transition={{ duration: 12, repeat: Infinity }} className="absolute top-[60%] right-20 text-[#E8D8C3]/20 font-mono text-xl pointer-events-none">+</motion.div>

      {/* Main Asymmetrical Grid Container */}
      <div className="max-w-[1600px] mx-auto relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12">
        
        {/* LEFT SIDE (45%) - Large Featured Project */}
        <div className="w-full lg:w-[45%] flex flex-col pt-0 lg:pt-16 relative">
          <ProjectCard project={projects[0]} className="h-[500px] lg:h-[700px] z-10" imgClassName="h-[55%]" />
        </div>

        {/* RIGHT SIDE (55%) - Typography & Remaining Projects */}
        <div className="w-full lg:w-[55%] flex flex-col">
          
          {/* Oversized Typography Header */}
          <div className="relative mb-12 lg:mb-16 mt-8 lg:mt-0 lg:pl-4">
            
            {/* Designer Doodles */}
            <motion.svg initial={{ opacity: 0 }} whileInView={{ opacity: 0.6 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 1 }} className="absolute -top-6 -left-16 lg:-left-24 w-16 h-16 text-[#D8A15B] hidden lg:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20,80 Q50,20 80,80" />
              <polygon points="75,75 85,80 75,85" fill="currentColor"/>
            </motion.svg>
            <motion.svg initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 0.8, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.5 }} className="absolute top-10 right-10 w-8 h-8 text-[#B84A1C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l2 7 7 2-7 2-2 7-2-7-7-2 7-2z" />
            </motion.svg>

            <motion.h2 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-anton text-6xl md:text-[80px] lg:text-[110px] text-[#E8D8C3] uppercase tracking-normal leading-[0.85] text-left drop-shadow-md"
            >
              GALLERY<br/>
              <span className="text-[#B84A1C]">OF WORK</span>
            </motion.h2>
          </div>

          {/* Right Side Project Grid */}
          <div className="flex flex-col gap-8 lg:gap-10 relative">

            {/* Two Medium Cards Side-by-Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              <ProjectCard project={projects[1]} className="h-[380px]" imgClassName="h-[45%]" />
              <ProjectCard project={projects[2]} className="h-[380px]" imgClassName="h-[45%]" />
            </div>

            {/* One Wide Card Bottom */}
            <ProjectCard project={projects[3]} className="h-[350px] lg:h-[280px] flex-col md:flex-row" imgClassName="h-[45%] md:h-full md:w-[45%] md:border-b-0 md:border-r" />

          </div>
        </div>
        
      </div>
    </section>
  );
}
