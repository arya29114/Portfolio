"use client";

import { motion, Variants } from "framer-motion";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
  };

  return (
    <section className="relative h-[100dvh] min-h-[800px] w-full flex items-center justify-center overflow-hidden bg-[#140707] px-6 md:px-12 lg:px-16">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#B84A1C] rounded-full z-0 mix-blend-screen opacity-[0.15] blur-[250px] pointer-events-none" />

      {/* Torn Paper Edges - Wider and more pronounced */}
      <div className="absolute left-0 top-0 bottom-0 w-[40px] md:w-[60px] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHZpZXdCb3g9IjAgMCAxMCAxMDAiPgoJPHBhdGggZD0iTTAsMCBMMTAsNSBMNywxNSBMMTAsMjUgTDUsMzUgTDgsNDUgTDMsNTUgTDcsNjUgTDIsNzUgTDUsODUgTDIsOTUgTDcsMTAwIEwwLDEwMCB6IiBmaWxsPSIjMGEwMzAzIi8+Cjwvc3ZnPg==')] bg-repeat-y bg-[length:100%_200px] z-40 drop-shadow-[5px_0_15px_rgba(0,0,0,0.95)] opacity-90 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-[40px] md:w-[60px] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHZpZXdCb3g9IjAgMCAxMCAxMDAiPgoJPHBhdGggZD0iTTEwLDAgTDAsNSBMMywxNSBMMCwyNSBMNSwzNSBMMiw0NSBMNyw1NSBMMyw2NSBMOCw3NSBMNSw4NSBMOCw5NSBMMywxMDAgTDEwLDEwMCB6IiBmaWxsPSIjMGEwMzAzIi8+Cjwvc3ZnPg==')] bg-repeat-y bg-[length:100%_200px] z-40 drop-shadow-[-5px_0_15px_rgba(0,0,0,0.95)] opacity-90 pointer-events-none" />
      
      {/* Top and Bottom Torn Paper Edges */}
      <div className="absolute top-0 left-0 right-0 h-[20px] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHZpZXdCb3g9IjAgMCAxMDAgMTAiPgoJPHBhdGggZD0iTTAsMCBMMTAsMTAgTDIwLDMgTDMwLDEwIEw0MCw1IEw1MCwxMCBMNjAsMiBMNzAsMTAgTDgwLDYgTDkwLDEwIEwxMDAsMCB6IiBmaWxsPSIjMGEwMzAzIi8+Cjwvc3ZnPg==')] bg-repeat-x bg-[length:150px_100%] z-40 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[30px] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHZpZXdCb3g9IjAgMCAxMDAgMTAiPgoJPHBhdGggZD0iTTAsMTAgTDEwLDAgTDIwLDcgTDMwLDAgTDQwLDUgTDUwLDAgTDYwLDggTDcwLDAgTDgwLDQgTDkwLDAgTDEwMCwxMCB6IiBmaWxsPSIjMGEwMzAzIi8+Cjwvc3ZnPg==')] bg-repeat-x bg-[length:200px_100%] z-40 drop-shadow-[0_-5px_15px_rgba(0,0,0,0.9)] opacity-90 pointer-events-none" />

      {/* Tiny Dotted Grid */}
      <div className="absolute left-[8%] top-[25%] w-24 h-48 bg-[radial-gradient(rgba(216,161,91,0.5)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none z-10" />

      {/* Center Layout Container */}
      <div className="max-w-[1400px] w-full mx-auto relative z-20 flex h-full items-center justify-center pt-0">
        
        {/* Far Left Column (For left-side doodles) */}
        <div className="absolute left-[2%] top-[10%] w-[320px] h-[80%] hidden lg:flex flex-col justify-center items-start gap-16 pointer-events-none z-30 opacity-80 mix-blend-screen overflow-visible">
           
           {/* Section 1: Simplification Flow */}
           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.8 }} className="relative w-full scale-90 origin-left">
             <svg className="w-full h-[80px] text-[rgba(216,161,91,0.5)] overflow-visible" viewBox="0 0 300 80" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
               {/* Box 1 (Image Placeholder) */}
               <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.6, duration: 0.6 }} d="M10,10 Q25,8 40,10 Q42,25 40,40 Q25,42 10,40 Q8,25 10,10 Z" />
               <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.8, duration: 0.3 }} d="M10,10 L40,40 M40,10 L10,40" />
               
               {/* Arrow 1 */}
               <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.1, duration: 0.3 }} d="M50,25 Q65,24 75,25 M70,20 L76,25 L70,30" />
               
               {/* Box 2 (Document) */}
               <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.4, duration: 0.6 }} d="M85,8 Q105,6 125,8 Q127,25 125,42 Q105,44 85,42 Q83,25 85,8 Z" />
               <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.6, duration: 0.4 }} d="M92,15 Q110,14 118,15 M92,25 Q105,24 115,25 M92,35 Q105,34 110,35" />

               {/* Arrow 2 */}
               <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 3.0, duration: 0.3 }} d="M135,25 Q150,24 160,25 M155,20 L161,25 L155,30" />

               {/* Box 3 (Circle) */}
               <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 3.3, duration: 0.6 }} d="M170,8 Q185,6 200,8 Q202,25 200,42 Q185,44 170,42 Q168,25 170,8 Z" />
               <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 3.6, duration: 0.4 }} d="M185,25 A 6 6 0 1 1 196.9,25 A 6 6 0 1 1 185,25" />

               {/* "simplify" Arrow pointing up to Document */}
               <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 4.0, duration: 0.5 }} d="M115,70 Q105,70 105,50 M100,55 L105,48 L110,55" />
             </svg>
             <div className="absolute top-[60px] left-[125px] text-[rgba(216,161,91,0.6)] font-['var(--font-caveat)'] text-[20px]">simplify</div>
           </motion.div>

           {/* Section 2: User Flow */}
           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0, duration: 0.8 }} className="relative w-full pl-2">
             <div className="text-[rgba(216,161,91,0.6)] font-['var(--font-caveat)'] text-[22px] mb-1">user flow</div>
             <div className="text-[rgba(216,161,91,0.6)] font-['var(--font-caveat)'] text-[22px] flex items-center gap-3 ml-6">
               search <span className="font-sans text-sm">→</span> explore <span className="font-sans text-sm">→</span> checkout
             </div>
             {/* Rough double underline */}
             <svg className="w-[80%] h-4 mt-1 text-[rgba(216,161,91,0.4)]" viewBox="0 0 200 10" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="1">
               <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.5, duration: 0.6 }} d="M5,5 Q100,3 195,5" />
               <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.7, duration: 0.6 }} d="M15,8 Q100,6 185,8" />
             </svg>
           </motion.div>
        </div>

        {/* Main Central Typography */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-[80%] flex flex-col items-center text-center relative z-40"
        >
          {/* Small handwritten intro - Pen effect */}
          <motion.div variants={itemVariants} className="mb-6 w-full flex flex-col items-start text-[#B84A1C] relative">
            <div className="text-[32px] tracking-widest relative pl-4 lg:pl-12" style={{ fontFamily: '"Square Peg", cursive' }}>
              <span className="relative z-10 px-2">hi, i'm arya</span>
              {/* Overlay div that unmasks the text left to right to simulate writing */}
              <motion.div 
                initial={{ left: "0%" }}
                animate={{ left: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut", delay: 0.2 }}
                className="absolute top-0 bottom-0 right-0 bg-[#140707] z-20 pointer-events-none"
              />
              {/* Custom Handmade Double Underline (Rough/Overlapping) */}
              <motion.svg className="absolute -bottom-2 left-4 w-[120px] h-5 text-[#B84A1C]" viewBox="0 0 200 20" preserveAspectRatio="none">
                {/* Top line (slightly thinner) */}
                <motion.path 
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.6, duration: 1.0, ease: "easeInOut" }} 
                  d="M10,8 Q50,9 100,6 T190,7" 
                  fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.8"
                />
                {/* Bottom line (slightly thicker, crosses over) */}
                <motion.path 
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.9, duration: 1.2, ease: "easeInOut" }} 
                  d="M15,12 Q40,11 80,13 T185,11" 
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.9"
                />
              </motion.svg>
            </div>
          </motion.div>

          {/* Extremely Large Typography - Centered */}
          <motion.h1
            variants={itemVariants}
            className="text-[12vw] lg:text-[10vw] leading-[0.95] tracking-tight flex flex-col font-anton uppercase text-[#E6D3BC] items-center"
            style={{ 
              WebkitBackgroundClip: "text",
              backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.5%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.08%22/%3E%3C/svg%3E'), linear-gradient(to bottom, #E6D3BC, #E6D3BC)"
            }}
          >
            <span className="drop-shadow-lg z-30 relative">EXPERIENCES</span>
            <span className="drop-shadow-lg z-20 relative">THAT FEEL</span>
            <div className="relative flex items-center justify-center">
              <span 
                className="text-transparent drop-shadow-xl z-10 relative"
                style={{ 
                  WebkitBackgroundClip: "text",
                  backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.5%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.15%22/%3E%3C/svg%3E'), linear-gradient(to bottom, #B84A1C, #B84A1C)"
                }}
              >
                HUMAN.
              </span>
              
              {/* "clarity wins" - Transparent Sticky Note placed beside HUMAN */}
              <motion.div 
                initial={{ opacity: 0, y: 15, rotate: -10 }} 
                animate={{ opacity: 1, y: 0, rotate: 6 }} 
                transition={{ delay: 2.5, duration: 0.8, type: "spring", stiffness: 90 }} 
                className="absolute top-[20%] -right-[130px] w-[100px] h-[90px] border border-[rgba(216,161,91,0.15)] bg-[rgba(216,161,91,0.04)] backdrop-blur-sm flex items-center justify-center shadow-[2px_5px_15px_rgba(0,0,0,0.2)] z-50 pointer-events-none normal-case font-normal text-base tracking-normal"
              >
                {/* Small Masking tape */}
                <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-7 h-3 border border-[rgba(216,161,91,0.1)] bg-[rgba(216,161,91,0.08)] backdrop-blur-lg rotate-[2deg]" />
                <div className="text-[rgba(216,161,91,0.7)] font-['var(--font-caveat)'] text-[24px] text-center leading-tight">clarity<br/>wins</div>
              </motion.div>
            </div>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.div variants={itemVariants} className="mt-8 relative max-w-[500px]">
            <p className="font-mono text-[13px] md:text-[14px] text-[#E6D3BC] leading-[1.8] tracking-tight">
              Crafting digital experiences
              with curiosity, clarity
              and a touch of 
              <span className="relative inline-block px-1 ml-1 font-bold">
                chaos.
                <motion.svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full text-[rgba(216,161,91,0.6)] overflow-visible scale-[1.3]" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <motion.ellipse initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.2, duration: 0.8, ease: "easeInOut" }} cx="50" cy="20" rx="48" ry="18" />
                  <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.8, duration: 0.5, ease: "easeInOut" }} d="M 98 20 Q 120 15 140 -5 M 130 -5 L 140 -5 L 135 5" />
                </motion.svg>
              </span>
            </p>
          </motion.div>

          {/* CTA */}
          <motion.a 
            href="#work" 
            variants={itemVariants} 
            className="mt-12 flex items-center justify-center gap-2 font-mono text-[12px] text-[#E6D3BC] hover:text-[#D8A15B] transition-colors pb-0.5 border-b border-[#E6D3BC]/40 hover:border-[#D8A15B] tracking-widest uppercase"
          >
            VIEW MY WORK <span className="text-base">↗</span>
          </motion.a>
        </motion.div>


        {/* Far Right Column (For right-side doodles - placed under Let's Talk button) */}
        <div className="absolute right-[2%] top-[12%] w-[280px] hidden lg:flex flex-col items-start gap-12 pointer-events-none z-30 opacity-80 mix-blend-screen overflow-visible">

           {/* Section 3: Web Wireframe & Clean Layout */}
           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8, duration: 0.8 }} className="relative w-full flex items-start gap-4 translate-x-4">
             {/* Web Wireframe SVG */}
             <svg className="w-[140px] h-[100px] text-[rgba(216,161,91,0.5)] overflow-visible" viewBox="0 0 140 100" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
               {/* Main Browser Window */}
               <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 3.0, duration: 0.8 }} d="M5,5 L135,5 L135,95 L5,95 Z" />
               {/* Top Nav Bar */}
               <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 3.4, duration: 0.3 }} d="M5,25 L135,25" />
               <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 3.5, duration: 0.2 }} d="M10,12 L35,12 M10,18 L45,18" />
               <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 3.6, duration: 0.2 }} d="M110,10 L130,10 L130,20 L110,20 Z" />
               
               {/* Content Blocks */}
               {/* Left Sidebar */}
               <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 3.8, duration: 0.3 }} d="M10,35 L35,35 L35,65 L10,65 Z" />
               <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 3.9, duration: 0.2 }} d="M15,40 L30,60 M30,40 L15,60" />
               {/* Main Hero Image */}
               <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 4.1, duration: 0.4 }} d="M45,35 L130,35 L130,65 L45,65 Z" />
               <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 4.3, duration: 0.3 }} d="M45,35 L130,65 M130,35 L45,65" />
               {/* Bottom 3 Columns */}
               <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 4.5, duration: 0.2 }} d="M10,75 L45,75 L45,90 L10,90 Z" />
               <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 4.6, duration: 0.2 }} d="M55,75 L90,75 L90,90 L55,90 Z" />
               <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 4.7, duration: 0.2 }} d="M100,75 L130,75 L130,90 L100,90 Z" />

               {/* Dashed line bracket on right side */}
               <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 5.0, duration: 0.5 }} d="M145,5 L145,95 M140,5 L150,5 M140,45 L150,45 M140,95 L150,95" strokeDasharray="4 4" />
             </svg>

             {/* "keep it simple" */}
             <div className="absolute top-[15px] left-[155px] flex items-center">
               <svg className="w-8 h-8 text-[rgba(216,161,91,0.5)] -ml-4" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                 <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 5.2, duration: 0.4 }} d="M30,30 Q15,40 5,20 M10,15 L5,20 L10,25" />
               </svg>
               <div className="text-[rgba(216,161,91,0.6)] font-['var(--font-caveat)'] text-[20px] leading-tight mt-6 -ml-2">keep it<br/>simple</div>
             </div>

             {/* "clarity wins" sticky note was moved to the center layout beside HUMAN. */}
           </motion.div>

        </div>

      </div>
    </section>
  );
}
