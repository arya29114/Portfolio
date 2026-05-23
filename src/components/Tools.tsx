"use client";

import { motion } from "framer-motion";

// SVG Components for the Logos
const FigmaIcon = () => (
  <svg width="40" height="60" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-[0.85]">
    <path d="M19 28.5C19 33.7467 14.7467 38 9.5 38C4.25329 38 0 33.7467 0 28.5C0 23.2533 4.25329 19 9.5 19H19V28.5Z" fill="#0ACF83"/>
    <path d="M0 47.5C0 52.7467 4.25329 57 9.5 57C14.7467 57 19 52.7467 19 47.5V38H9.5C4.25329 38 0 42.2533 0 47.5Z" fill="#1ABCFE"/>
    <path d="M19 0L9.5 0C4.25329 0 0 4.25329 0 9.5C0 14.7467 4.25329 19 9.5 19H19V0Z" fill="#F24E1E"/>
    <path d="M38 9.5C38 4.25329 33.7467 0 28.5 0L19 0V19H28.5C33.7467 19 38 14.7467 38 9.5Z" fill="#FF7262"/>
    <path d="M38 28.5C38 23.2533 33.7467 19 28.5 19C23.2533 19 19 23.2533 19 28.5C19 33.7467 23.2533 38 28.5 38C33.7467 38 38 33.7467 38 28.5Z" fill="#A259FF"/>
  </svg>
);

const FramerIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-[1.1]">
    <path d="M12 0H24V12H12V0Z" fill="#00AEEF"/>
    <path d="M0 0H12V12H0V0Z" fill="#00AEEF"/>
    <path d="M0 12H12L24 24V12H0Z" fill="#0055FF"/>
    <path d="M12 12V24L0 12H12Z" fill="#0055FF"/>
  </svg>
);

const PsIcon = () => (
  <div className="w-[50px] h-[50px] bg-[#001E36] rounded-[12px] flex items-center justify-center shadow-inner">
    <span className="font-sans font-bold text-[#31A8FF] text-[26px] tracking-tighter leading-none mt-1">Ps</span>
  </div>
);

const AiIcon = () => (
  <div className="w-[50px] h-[50px] bg-[#330000] rounded-[12px] flex items-center justify-center shadow-inner">
    <span className="font-sans font-bold text-[#FF9A00] text-[26px] tracking-tighter leading-none mt-1">Ai</span>
  </div>
);

// Doodles for specific tools
const FigmaDoodle = () => (
  <div className="absolute -top-4 -left-6 w-12 h-12 pointer-events-none opacity-50 z-0" 
       style={{ backgroundImage: 'radial-gradient(#C64A25 1.5px, transparent 1.5px)', backgroundSize: '6px 6px' }} />
);

const FramerDoodle = () => (
  <svg className="absolute -top-6 -right-6 w-16 h-16 text-[#C64A25] z-0 opacity-70" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3">
    <path d="M5 45 Q 25 5 45 45" />
  </svg>
);

const PsDoodle = () => (
  <svg className="absolute -top-6 -right-4 w-12 h-12 text-[#C64A25] z-0" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M10 5 L 12 10 M 20 2 L 18 8 M 28 8 L 22 12" />
  </svg>
);

const AiDoodle = () => (
  <svg className="absolute -inset-8 w-[calc(100%+64px)] h-[calc(100%+64px)] text-[#C64A25] z-20 pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
    <ellipse cx="50" cy="50" rx="40" ry="12" transform="rotate(-15 50 50)" />
    <circle cx="85" cy="40" r="2" fill="#C64A25" strokeWidth="0" />
  </svg>
);

const toolsData = [
  {
    name: "FIGMA",
    icon: FigmaIcon,
    quote: "Where ideas\ntake shape",
    skills: ["UI/UX Design", "Prototyping", "Design Systems"],
    doodle: FigmaDoodle
  },
  {
    name: "FRAMER",
    icon: FramerIcon,
    quote: "Bringing concepts\nto life on the web",
    skills: ["Web Design", "Interactions", "No-code Development"],
    doodle: FramerDoodle
  },
  {
    name: "PHOTOSHOP",
    icon: PsIcon,
    quote: "Crafting visuals\nwith precision",
    skills: ["Photo Editing", "Compositing", "Visual Enhancement"],
    doodle: PsDoodle
  },
  {
    name: "ILLUSTRATOR",
    icon: AiIcon,
    quote: "Building identities\nthat stand out",
    skills: ["Vector Graphics", "Branding", "Iconography"],
    doodle: AiDoodle
  }
];

export default function Tools() {
  return (
    <section id="tools" className="w-full bg-[#eadab6] py-6 md:py-8 relative z-10 overflow-hidden font-sans text-[#2B1B15]">
      {/* Subtle Grain Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")' }} />

      {/* Global Star Doodles */}
      <motion.svg initial={{ scale: 0, rotate: -45 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ type: "spring", delay: 0.2 }} className="absolute top-4 left-4 md:top-8 md:left-8 w-5 h-5 text-[#C64A25]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2 Q12 12 2 12 Q12 12 12 22 Q12 12 22 12 Q12 12 12 2z" />
      </motion.svg>
      <motion.svg initial={{ scale: 0, rotate: 45 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ type: "spring", delay: 0.4 }} className="absolute top-8 right-6 md:top-12 md:right-10 w-6 h-6 text-[#C64A25]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" />
      </motion.svg>
      <motion.svg initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", delay: 0.6 }} className="absolute bottom-16 right-8 md:right-16 w-5 h-5 text-[#C64A25]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2 Q12 12 2 12 Q12 12 12 22 Q12 12 22 12 Q12 12 12 2z" />
      </motion.svg>

      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16 relative z-10 flex flex-col lg:flex-row gap-6 lg:gap-4">
        
        {/* LEFT COLUMN: Typography */}
        <div className="w-full lg:w-[35%] flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="font-anton text-[50px] md:text-[60px] leading-[0.95] text-[#b94a1d] tracking-wide">
              MY<br/>CREATIVE<br/>TOOLKIT
            </h2>
            
            {/* Wavy Underline */}
            <svg className="w-20 h-3 mt-6 text-[#C64A25]" viewBox="0 0 100 15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0 7.5 Q 12.5 0 25 7.5 T 50 7.5 T 75 7.5 T 100 7.5" />
            </svg>
            
            <p className="mt-3 text-[13px] md:text-[14px] leading-relaxed font-medium max-w-[280px] text-[#4A3B36]">
              The tools and playgrounds<br/>I use to create, iterate<br/>and bring ideas to life.
            </p>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Tool Badges */}
        <div className="w-full lg:w-[65%] relative flex flex-col justify-center mt-6 lg:mt-0">
          
          {/* Wavy Connecting Line Behind Badges */}
          <motion.svg initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 0.6 }} viewport={{ once: true }} transition={{ duration: 2, ease: "easeInOut" }} className="absolute top-[30px] md:top-[40px] left-6 w-[calc(100%-40px)] h-6 text-[#C64A25] z-0 hidden sm:block" viewBox="0 0 800 50" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6">
             <path d="M0 25 Q 100 0 200 25 T 400 25 T 600 25 T 800 25" />
          </motion.svg>

          <div className="flex flex-col sm:flex-row justify-between relative z-10 w-full gap-4 sm:gap-2">
            {toolsData.map((tool, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex flex-col items-center w-full sm:w-1/4 relative group"
              >
                {/* Custom doodle per tool */}
                <tool.doodle />
                
                {/* Circle Badge */}
                <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full bg-[#eadab6] shadow-[0_5px_15px_rgba(43,27,21,0.06),_inset_0_-2px_6px_rgba(43,27,21,0.04),_inset_0_2px_6px_rgba(255,255,255,0.6)] border border-[#C64A25]/10 flex items-center justify-center relative z-10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_rgba(43,27,21,0.1),_inset_0_-2px_6px_rgba(43,27,21,0.04)]">
                  <div className="scale-[0.55] md:scale-[0.65] transition-transform duration-500 group-hover:scale-[0.7]">
                    <tool.icon />
                  </div>
                </div>

                {/* Hand-drawn Arrow Up */}
                <svg className="w-4 h-5 mt-2 mb-1 text-[#C64A25]" viewBox="0 0 20 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 40 Q 12 25 10 5" />
                  <path d="M5 10 L 10 2 L 15 12" />
                </svg>

                {/* Handwritten Quote */}
                <p className="font-['var(--font-caveat)'] text-[#C64A25] text-center text-[16px] md:text-[18px] leading-[1.1] min-h-[40px] whitespace-pre-line px-1">
                  {tool.quote}
                </p>

                <div className="w-5 border-b-[1.5px] border-[#C64A25] mt-1 mb-2 opacity-50" />

                {/* Tool Name */}
                <h3 className="font-anton text-[16px] md:text-[18px] text-[#2B1B15] tracking-widest">{tool.name}</h3>

                {/* Skills List */}
                <ul className="mt-1 flex flex-col items-center gap-[2px] text-[10px] md:text-[11px] font-semibold text-[#4A3B36] text-center">
                  {tool.skills.map(s => <li key={s}>{s}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
