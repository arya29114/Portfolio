import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import WhatIDo from "@/components/WhatIDo";
import About from "@/components/About";
import FeaturedProjects from "@/components/FeaturedProjects";
import Tools from "@/components/Tools";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="bg-[#1A1412]" />
      <Header />
      <main className="relative z-10 min-h-screen flex flex-col font-sans selection:bg-[#C64A25]/30 selection:text-[#EADBB7]">
        <Hero />
        <WhatIDo />
        <About />
        <FeaturedProjects />
        <Tools />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
