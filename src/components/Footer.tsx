"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const BinderClip = () => (
  <svg width="40" height="50" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 12H20V24C20 25.1046 19.1046 26 18 26H6C4.89543 26 4 25.1046 4 24V12Z" fill="#111111" stroke="#000000" strokeWidth="1"/>
    <path d="M7 12V6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V12" stroke="#222222" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="18" r="1.5" fill="#333333"/>
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="w-full bg-[#140707] pt-10 pb-2 px-6 md:px-12 lg:px-16 relative overflow-hidden font-sans text-[#E8D8C3] selection:bg-[#C55325] selection:text-[#E8D8C3]">
      
      {/* Background Texture & Glow */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")' }} />
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#C55325] opacity-10 rounded-full blur-[120px] pointer-events-none" />

      {/* Global Star Doodles */}
      <svg className="absolute top-20 left-10 w-8 h-8 text-[#C55325] opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M12 2 Q12 12 2 12 Q12 12 12 22 Q12 12 22 12 Q12 12 12 2z" />
      </svg>
      <svg className="absolute top-[40%] right-10 w-8 h-8 text-[#C55325] opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="12" cy="12" r="6" strokeDasharray="2 2" />
        <path d="M12 2 L12 22 M2 12 L22 12 M5 5 L19 19 M19 5 L5 19" strokeWidth="0.5" />
      </svg>

      <div className="max-w-[1500px] mx-auto relative z-10 flex flex-col gap-6 md:gap-10">
        
        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 relative">
          
          {/* Left Title */}
          <div className="w-full lg:w-[50%] relative z-10">
            <h2 className="font-anton text-[60px] md:text-[80px] lg:text-[90px] uppercase leading-[0.9] tracking-wider text-[#E8D8C3] drop-shadow-md">
              LET'S CREATE<br/>SOMETHING<br/>
              <span className="text-[#C55325]">AMAZING TOGETHER.</span>
            </h2>

            {/* Circular Stamp Doodle */}
            <div className="absolute -bottom-8 lg:-bottom-16 right-0 lg:right-[-40px] w-24 h-24 md:w-32 md:h-32 hidden md:block">
              <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow opacity-90 text-[#C55325]">
                <path id="footer-badge" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent"/>
                <text className="text-[12px] font-sans font-bold uppercase tracking-[0.3em] fill-[#E8D8C3]">
                  <textPath href="#footer-badge">IDEAS • IMPACT • </textPath>
                </text>
                <path d="M 50 35 L 50 65 M 35 50 L 65 50 M 40 40 L 60 60 M 40 60 L 60 40" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
          </div>

          {/* Center/Right Text */}
          <div className="w-full lg:w-[25%] flex flex-col pt-6 relative z-10 lg:-translate-x-4 xl:-translate-x-8">
            {/* Top Annotation */}
            <div className="absolute -top-6 -left-12 lg:-left-48 xl:-left-56 flex flex-col items-start gap-2">
               <p className="font-['var(--font-caveat)'] text-[#E8D8C3] text-xl -rotate-6">Great ideas<br/>start with<br/>a conversation.</p>
               <svg className="w-16 h-12 text-[#E8D8C3] -rotate-12 mt-1" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M40 10 Q 15 25 5 40" />
                 <path d="M15 35 L 5 40 L 10 30" />
               </svg>
            </div>

            <p className="text-[#E8D8C3]/80 text-[15px] font-medium leading-[1.6] mb-6 max-w-[280px]">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <Link href="mailto:hello@aryarajendran.com" className="group flex flex-col items-start w-fit">
              <span className="font-bold tracking-[0.2em] uppercase text-[14px] flex items-center gap-4 text-[#E8D8C3] group-hover:text-[#C55325] transition-colors">
                LET'S CONNECT <span className="text-[#C55325] font-sans font-light text-xl">↗</span>
              </span>
              <svg className="w-full h-3 mt-2 text-[#C55325] opacity-80" viewBox="0 0 100 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M0 5 Q 12.5 0 25 5 T 50 5 T 75 5 T 100 5" className="origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <path d="M0 5 Q 12.5 0 25 5 T 50 5 T 75 5 T 100 5" className="origin-left" />
              </svg>
            </Link>
          </div>

        </div>

        {/* CENTER DIVIDER */}
        <div className="w-full border-t border-[#E8D8C3]/10" />

        {/* BOTTOM COLUMNS */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-6 pb-2 relative">
           
           {/* Column 1: Arya Watermark & Copyright */}
           <div className="w-full lg:w-[35%] flex flex-col justify-end min-h-[100px] relative">
             <div className="absolute -left-6 top-0 opacity-[0.03] pointer-events-none select-none">
               <span className="font-anton text-[140px] md:text-[180px] leading-none text-white tracking-wider">ARYA</span>
             </div>
             <div className="relative z-10 mt-8 md:mt-12">
               <span className="font-['var(--font-caveat)'] text-[#C55325] text-5xl md:text-7xl -rotate-6 block mb-4">Rajendran.</span>
               <p className="text-[#E8D8C3]/40 text-[10px] tracking-[0.2em] uppercase font-bold mt-2">© 2024 Arya Rajendran.</p>
               <p className="text-[#E8D8C3]/40 text-[10px] tracking-[0.2em] uppercase font-bold mt-1">All rights reserved.</p>
             </div>
           </div>

           {/* Quick Links */}
           <div className="w-full sm:w-1/2 lg:w-[15%] relative z-10">
             {/* Small vertical divider on the left */}
             <div className="absolute -left-6 top-0 bottom-0 w-px bg-[#E8D8C3]/10 hidden lg:block">
                <div className="absolute top-0 -left-1 w-2 h-2 rotate-45 border border-[#E8D8C3]/20 bg-[#140707]" />
             </div>
             <h4 className="text-[#E8D8C3] font-bold text-[11px] uppercase tracking-[0.25em] mb-4">QUICK LINKS</h4>
             <ul className="flex flex-col gap-2">
               {['Home', 'About Me', 'What I Do', 'Portfolio', 'Skills', "Let's Connect"].map(link => (
                 <li key={link}>
                   <Link href={`#${link.replace(/\s+/g, '-')}`} className="text-[12px] font-medium tracking-wide text-[#E8D8C3]/70 hover:text-[#E8D8C3] transition-colors flex items-center gap-3">
                     <span className="text-[#C55325] text-[10px] font-bold">›</span> {link}
                   </Link>
                 </li>
               ))}
             </ul>
           </div>

           {/* Let's Connect */}
           <div className="w-full lg:w-[25%] relative z-10 lg:-translate-x-12 xl:-translate-x-24">
             {/* Small vertical divider on the left */}
             <div className="absolute -left-6 top-0 bottom-0 w-px bg-[#E8D8C3]/10 hidden lg:block">
                <div className="absolute top-0 -left-1 w-2 h-2 rotate-45 border border-[#E8D8C3]/20 bg-[#140707]" />
             </div>
             <h4 className="text-[#E8D8C3] font-bold text-[11px] uppercase tracking-[0.25em] mb-4">LET'S CONNECT</h4>
             <ul className="flex flex-col gap-3 text-[12px] font-medium tracking-wide text-[#E8D8C3]/70">
               <li>
                 <a href="mailto:hello@aryarajendran.com" className="flex items-center gap-4 hover:text-[#E8D8C3] transition-colors">
                   <svg className="w-4 h-4 text-[#E8D8C3]/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 4l10 8 10-8"/></svg>
                   hello@aryarajendran.com
                 </a>
               </li>
               <li>
                 <a href="tel:+919876543210" className="flex items-center gap-4 hover:text-[#E8D8C3] transition-colors">
                   <svg className="w-4 h-4 text-[#E8D8C3]/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                   +91 98765 43210
                 </a>
               </li>
             </ul>

             {/* Moved Far Right Sticky Note */}
             <div className="absolute right-[-140px] top-[0px] hidden xl:flex justify-end pointer-events-none scale-[0.75]">
               <div className="relative w-[220px] h-[300px]">
                 <div className="absolute top-4 -left-2 w-[220px] h-[300px] bg-[#a8441c] rotate-[6deg] shadow-lg border border-black/30" />
                 <div className="absolute top-0 left-0 w-[220px] h-[300px] bg-[#D6C4AD] rotate-[10deg] shadow-2xl p-6 border border-black/20 flex items-center justify-start shadow-black/60 relative overflow-hidden">
                   <p className="font-serif font-bold text-[#140707] text-[18px] leading-[1.5] tracking-widest uppercase">
                     DESIGN<br/><br/>IS<br/><br/>THINKING<br/><br/>MADE<br/><br/>VISUAL.
                   </p>
                   <div className="absolute -bottom-4 -right-6 w-20 h-8 bg-[#E8D8C3]/50 rotate-[-15deg] shadow-sm backdrop-blur-sm" />
                 </div>
                 <div className="absolute -top-6 left-1/2 rotate-[10deg] z-10 scale-110 -translate-x-1/2">
                    <BinderClip />
                 </div>
               </div>
             </div>
           </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="w-full pt-0 pb-0 flex justify-end items-center relative z-10 -mt-10">
           <button onClick={scrollToTop} className="group flex items-center gap-4 text-[#C55325] text-[10px] font-bold tracking-[0.2em] hover:text-[#E8D8C3] transition-colors">
             BACK TO TOP
             <div className="w-8 h-8 rounded-full border border-[#C55325] flex items-center justify-center group-hover:border-[#E8D8C3] transition-colors">
               <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
             </div>
           </button>
        </div>

      </div>
    </footer>
  );
}
