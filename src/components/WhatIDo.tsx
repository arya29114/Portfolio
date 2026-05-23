"use client";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>,
    title: "UI/UX DESIGN",
    desc: "Designing intuitive interfaces that are user friendly."
  },
  {
    num: "02",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    title: "PRODUCT THINKING",
    desc: "Solving the right problems with strategy & empathy."
  },
  {
    num: "03",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
    title: "VISUAL DESIGN",
    desc: "Crafting visuals that communicate, inspire and create impact."
  },
  {
    num: "04",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
    title: "BRAND SYSTEMS",
    desc: "Building cohesive brand experiences across every touchpoint."
  },
  {
    num: "05",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    title: "PROTOTYPING",
    desc: "Bringing ideas to life with interactive prototypes."
  }
];

export default function WhatIDo() {
  return (
    <section id="services" className="w-full bg-[#ebdab7] py-12 px-8 md:px-12 lg:px-16 relative z-10 overflow-hidden font-sans">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-12">
        
        {/* Left Side - Heading Block */}
        <div className="flex-shrink-0 flex flex-col items-start relative lg:pr-12 lg:border-r border-[#b84b1d]/20 w-full lg:w-auto">
          {/* Star Doodle */}
          <div className="absolute -top-6 -right-2 lg:-right-4 lg:-top-8">
             <svg className="w-8 h-8 text-[#C55325]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l2 7 7 2-7 2-2 7-2-7-7-2 7-2z"/></svg>
          </div>
          
          <h2 className="font-anton text-5xl lg:text-[64px] text-[#b84b1d] tracking-normal leading-[0.85] text-left uppercase">
            WHAT<br/>I DO
          </h2>
          
          {/* Hand-drawn underline */}
          <svg className="w-24 h-4 mt-4 text-[#C55325]" viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5,10 Q25,20 50,5 T95,15"/></svg>
          
          <p className="mt-8 text-[#311208] text-[14px] leading-relaxed max-w-[180px]">
            Turning ideas into meaningful digital experiences.
          </p>
        </div>

        {/* Right Side - 5 Column Services Grid */}
        <div className="w-full flex-1">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-0 w-full">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`flex flex-col items-center text-center w-full relative px-4 ${idx !== services.length - 1 ? 'lg:border-r border-[#b84b1d]/15' : ''}`}
              >
                {/* Subtle Designer Doodles behind icons */}
                {idx === 0 && (
                  <div className="absolute top-[-5px] right-[25%] w-10 h-10 border border-[#C55325]/30 border-dotted rounded-sm -z-10 bg-[radial-gradient(#C55325_1px,transparent_1px)] [background-size:6px_6px] opacity-20" />
                )}
                {idx === 1 && (
                  <svg className="absolute top-2 left-[20%] w-14 h-14 text-[#C55325]/30" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5"/></svg>
                )}
                {idx === 2 && (
                  <svg className="absolute -top-2 right-[15%] w-16 h-16 text-[#C55325]/30 border border-dashed border-[#C55325]/30 rounded-full" viewBox="0 0 100 100"></svg>
                )}
                {idx === 3 && (
                  <div className="absolute -top-4 right-[25%] flex gap-1 text-[#C55325]">
                    <span className="text-sm">/</span><span className="text-sm -mt-2">/</span>
                  </div>
                )}
                {idx === 4 && (
                  <svg className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-20 h-20 text-[#C55325]/40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5"><ellipse cx="50" cy="50" rx="45" ry="15" transform="rotate(-15 50 50)"/><circle cx="93" cy="38" r="2" fill="currentColor"/></svg>
                )}

                {/* Circular Badge */}
                <div className="w-16 h-16 rounded-full bg-[#ebdab7] drop-shadow-[0_4px_12px_rgba(49,18,8,0.06)] border border-[#b84b1d]/10 flex items-center justify-center text-[#C55325] mb-5 relative z-10 transition-transform hover:scale-105 duration-300">
                  <div className="w-6 h-6">
                    {service.icon}
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <span className="font-['var(--font-caveat)'] text-[#C55325] text-lg mb-0.5">{service.num}</span>
                  <h3 className="font-anton text-[#b84b1d] text-[15px] uppercase tracking-wider mb-3 leading-tight">{service.title}</h3>
                  <div className="w-6 h-[1px] bg-[#C55325]/40 mb-3" />
                  <p className="text-[#311208] text-[11px] leading-relaxed max-w-[150px]">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
