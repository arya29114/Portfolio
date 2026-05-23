"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="absolute top-0 left-0 w-full z-50 px-8 md:px-16 lg:px-24 h-[70px] flex items-center justify-between"
    >
      {/* Top Left: Logo & Role */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-2">
          <span className="font-anton text-3xl tracking-wide text-[#E6D3BC] uppercase leading-none">arya rajendran</span>
          <svg className="w-5 h-5 text-[#B84A1C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M4.9 19.1L19.1 4.9"/>
          </svg>
        </div>
        <span className="text-[10px] text-[#B84A1C] tracking-[0.2em] uppercase mt-1 font-bold">
          UI/UX DESIGNER
        </span>
      </div>
      
      {/* Centered Navigation */}
      <nav className="hidden xl:flex gap-14 absolute left-1/2 -translate-x-1/2">
        {['work', 'about', 'what i do', 'skills', "let's connect"].map((link, i) => (
          <Link key={i} href={`#${link.replace(/\s+/g, '-')}`} className={`text-[17px] font-sans capitalize tracking-wide transition-colors relative group ${i === 0 ? 'text-[#E6D3BC]' : 'text-[#E6D3BC]/60 hover:text-[#E6D3BC]'}`}>
            {link}
            {i === 0 && (
              <span className="absolute -bottom-2 left-0 w-full h-[1.5px] bg-[#B84A1C] opacity-80"></span>
            )}
          </Link>
        ))}
      </nav>

      {/* Top Right: CTA Button */}
      <button className="bg-[#E6D3BC] px-6 py-2.5 rounded-full text-[#140707] text-[13px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-white transition-colors shadow-[0_4px_14px_rgba(230,211,188,0.15)] group border border-[#140707]">
        LET'S TALK 
        <span className="text-lg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
      </button>
    </motion.header>
  );
}
