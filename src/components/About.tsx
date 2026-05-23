"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const journeyData = [
  { 
    title: "LEARNING DESIGN FUNDAMENTALS", 
    skills: ["VISUAL HIERARCHY", "LAYOUTS", "SOCIAL MEDIA DESIGN"],
    hoverContent: "Learned how hierarchy, spacing, and layout systems guide user attention while creating engaging content across social media platforms."
  },
  { 
    title: "BUILDING PERSONAL PROJECTS", 
    skills: ["EXPLORATION", "EXPERIMENTATION", "PRACTICE"],
    hoverContent: "Created self-initiated projects to test ideas, improve workflows, and develop problem-solving skills through consistent practice."
  },
  { 
    title: "DISCOVERING UI/UX", 
    skills: ["WIREFRAMES", "PROTOTYPES", "USER FLOWS"],
    hoverContent: "Explored the fundamentals of UX by mapping user journeys, building wireframes, and creating interactive prototypes."
  },
  { 
    title: "DESIGNING DIGITAL EXPERIENCES", 
    skills: ["APPS", "WEBSITES", "INTERFACE DESIGN"],
    hoverContent: "Designed user-centered interfaces for apps and websites focused on usability, accessibility, and visual clarity."
  },
  { 
    title: "GROWING EVERY DAY", 
    skills: ["BRANDING", "REPORTS", "CONTENT DESIGN", "CREATIVE THINKING"],
    hoverContent: "Continuously expanding my skills through branding projects, presentation design, content creation, and creative exploration."
  }
];

export default function About() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="about" className="w-full bg-[#1b0000] py-20 px-8 md:px-12 lg:px-16 relative z-10 overflow-hidden">

      {/* Background Glow & Grain */}
      {/* Texture grain overlay - moved to z-50 to cover image and blend it naturally */}
      <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')] opacity-30" />
      </div>

      {/* 3-Column Editorial Grid (25% / 40% / 35%) */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[25%_40%_35%] gap-6 lg:gap-8 relative z-10 items-center">

        {/* LEFT COLUMN (25%) */}
        {/* Overlapping onto center column via -mr-8 and z-30 */}
        <div className="flex flex-col items-start z-30 pt-0 relative h-full lg:-mr-12">
          
          <div className="flex flex-col gap-4">
            <motion.h2 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-anton text-6xl lg:text-[90px] text-[#E6D3BC] lowercase tracking-tight leading-[0.8] flex flex-col"
            >
              <span>about</span>
              <span className="flex items-center gap-4">
                me
              </span>
            </motion.h2>

            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[#B84A1C] font-bold tracking-[0.2em] text-sm mt-4"
            >
              UI/UX DESIGNER
            </motion.h3>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[#E6D3BC]/80 text-[14px] font-mono leading-[1.8] max-w-[300px] mt-4"
            >
              I’m Arya Rajendran, a UI/UX Designer based in Nagpur, Maharashtra, passionate about transforming complex ideas into intuitive, meaningful, and visually engaging digital experiences. I enjoy creating designs that not only look good but also feel natural and easy to use.
            </motion.p>

            <motion.button 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="border border-[#E6D3BC] text-[#E6D3BC] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-[#E6D3BC] hover:text-[#140707] transition-all duration-300 rounded-full mt-6 w-fit"
            >
              DOWNLOAD RESUME
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            </motion.button>
          </div>

          {/* Cream Sticky Note */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-auto pt-16 w-[240px] relative self-start -ml-2 z-40"
          >
            <motion.div 
              animate={{ rotate: [-2, 1, -2] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="bg-[#E8D39A] shadow-[5px_15px_30px_rgba(0,0,0,0.4)] -rotate-3 p-5 pb-6 relative border-b-2 border-r-2 border-black/10 origin-top"
            >
               <div className="absolute -top-3 left-1/4 w-12 h-5 bg-white/40 backdrop-blur-sm rotate-2 shadow-[0_1px_3px_rgba(0,0,0,0.1)] border-t border-white/40" />
               <h4 className="text-[#B84A1C] font-bold text-[11px] uppercase tracking-widest mb-4">CURRENTLY</h4>
               <ul className="flex flex-col gap-3">
                 {[
                   "Exploring motion design",
                   "Designing digital products",
                   "Always learning something new"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-2">
                     <span className="text-[#B84A1C] font-sans font-bold text-sm mt-0.5">→</span>
                     <span className="font-['var(--font-caveat)'] text-[20px] text-[#140707] leading-[1.1]">{item}</span>
                   </li>
                 ))}
               </ul>
            </motion.div>
          </motion.div>

        </div>

        {/* CENTER COLUMN (40%) - Hero Portrait */}
        <div className="relative w-full min-h-[550px] flex justify-center items-center z-10 pointer-events-none mt-8 lg:mt-0">
          
          {/* Decorative Doodles - Draw themselves */}
          <div className="absolute inset-0 z-0">
            {/* Curved dashed line */}
            <svg className="absolute top-[10%] left-[5%] w-48 h-48 text-[#E6D3BC] opacity-40" viewBox="0 0 100 100" fill="none">
              <motion.path 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                d="M 10 90 Q 20 20 90 10" 
                stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" 
              />
            </svg>
            {/* Tiny stars */}
            <motion.svg 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.6, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute top-[15%] right-[10%] w-6 h-6 text-[#E6D3BC]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"
            >
              <path d="M12 2l2 7 7 2-7 2-2 7-2-7-7-2 7-2z" />
            </motion.svg>
            <motion.svg 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.4, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute bottom-[20%] left-[10%] w-4 h-4 text-[#E6D3BC]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"
            >
              <path d="M12 2l2 7 7 2-7 2-2 7-2-7-7-2 7-2z" />
            </motion.svg>
            {/* Small circular accents */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 0.5 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="absolute top-[30%] right-[5%] w-2 h-2 rounded-full border border-[#E6D3BC]" />
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 0.3 }} viewport={{ once: true }} transition={{ delay: 0.8 }} className="absolute bottom-[30%] right-[0%] w-3 h-3 rounded-full border border-[#E6D3BC]" />
          </div>

          {/* Actual portrait image - Floating Animation */}
          <motion.img 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            animate={{ y: [0, -6, 0] }}
            style={{ y: 0 }}
            src="/portrait.png" 
            alt="Arya Portrait" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] lg:w-[130%] max-w-[650px] h-auto object-contain z-10 pointer-events-none origin-bottom" 
          />
        </div>

        {/* RIGHT COLUMN (35%) - Timeline */}
        {/* Pulled 40-60px left (-ml-10 to -ml-16) to close the gap with the portrait */}
        <div className="flex flex-col items-center lg:items-start w-full z-20 pt-0 lg:-ml-14">
          
          <div className="w-full max-w-[360px]">
            <h3 className="font-anton text-[36px] tracking-wide text-[#E6D3BC] flex items-center justify-between mb-8">
              MY JOURNEY ✦
            </h3>

            {/* Vertical Timeline */}
            <div className="flex flex-col gap-5 relative">
              {/* Thin orange line - Draws itself */}
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute left-[7px] top-4 w-[1px] bg-[#B84A1C]/50 origin-top" 
              />

              {journeyData.map((item, idx) => (
                <div key={idx} className="relative group pl-10">
                  {/* Circular Timeline Marker - Sequential Fade+Scale */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="absolute left-0 top-[18px] w-4 h-4 rounded-full border-2 border-[#E6D3BC]/60 bg-[#1b0000] transition-colors duration-300 group-hover:border-[#D8A15B] group-hover:bg-[#B84A1C]/20 z-10" 
                  />
                  
                  {/* Premium Interactive Card */}
                  <motion.div 
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    onHoverStart={() => setHoveredCard(idx)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className="bg-[#d08e51] border border-[rgba(216,161,91,0.3)] rounded-xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.4)] overflow-hidden cursor-default"
                    whileHover={{ 
                      y: -4, 
                      boxShadow: "0 15px 30px rgba(0,0,0,0.6)", 
                      borderColor: "#ffffff", 
                      backgroundColor: "#df9a5c" 
                    }}
                  >
                    <motion.h4 
                      layout 
                      initial={{ color: "#E6D3BC" }}
                      animate={{ color: hoveredCard === idx ? "#000000" : "#E6D3BC" }}
                      transition={{ duration: 0.3 }}
                      className="font-anton text-[16px] tracking-widest mb-3"
                    >
                      {item.title}
                    </motion.h4>
                    
                    {/* Pill Tags */}
                    <motion.div layout className="flex flex-wrap gap-2">
                      {item.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="px-3.5 py-1.5 rounded-full bg-[#B84A1C] text-[#E6D3BC] text-[9px] uppercase tracking-widest font-bold shadow-sm">
                          {skill}
                        </span>
                      ))}
                    </motion.div>

                    {/* Smooth Expanding Hover Content */}
                    <AnimatePresence>
                      {hoveredCard === idx && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, y: 10 }}
                          animate={{ opacity: 1, height: "auto", y: 0 }}
                          exit={{ opacity: 0, height: 0, y: 10 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <p className="mt-4 text-black text-[12px] leading-[1.8] font-mono border-t border-black/20 pt-3">
                            {item.hoverContent}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </motion.div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
