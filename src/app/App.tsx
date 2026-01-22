import { useState, useEffect } from "react";
import svgPaths from "@/imports/svg-ffe2y75wzn";

function ArrowsChevronArrowLeft() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Arrows-chevron/Arrow-Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Arrows-chevron/Arrow-Left">
          <path d={svgPaths.p33ca7d00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ArrowsChevronArrowRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Arrows-chevron/Arrow-Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Arrows-chevron/Arrow-Right">
          <path d={svgPaths.p2fadd580} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function NavLink({ children }: { children: string }) {
  return (
    <button className="px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors">
      <p className="css-ew64yg font-['Source_Serif_Pro:Regular',sans-serif] leading-[normal] not-italic text-[#303030] text-[14px] sm:text-[16px] text-center">
        {children}
      </p>
    </button>
  );
}

function ContactButton() {
  return (
    <button className="bg-[#0d7d7b] hover:bg-[#0a6563] transition-colors flex gap-1 items-center justify-center px-3 py-1.5 rounded-full shrink-0">
      <ArrowsChevronArrowLeft />
      <p className="css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] text-[14px] text-center text-white tracking-[-0.14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Stay in touch
      </p>
      <ArrowsChevronArrowRight />
    </button>
  );
}

function Header() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full bg-white z-50 transition-all duration-300 ${
        isFixed ? "fixed top-0 shadow-md" : "relative"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <nav className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Navigation Links */}
          <div className="flex gap-2 sm:gap-6 items-center flex-wrap justify-center">
            <NavLink>Study cases</NavLink>
            <NavLink>For fun cases</NavLink>
            <NavLink>LinkedIn</NavLink>
          </div>

          {/* Contact Button */}
          <ContactButton />
        </nav>
      </div>
    </header>
  );
}

function Intro() {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 items-center text-center px-4 py-8 sm:py-12 max-w-xl mx-auto">
      <p className="css-4hzbpn font-['Source_Serif_Pro:SemiBold_Italic',sans-serif] italic text-black text-[28px] sm:text-[32px] lg:text-[40px]">
        hola!
      </p>
      <div className="font-['Instrument_Sans:Regular',sans-serif] font-normal text-black text-[14px] sm:text-[16px] leading-relaxed" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn mb-4">
          I'm based in México City working at Etsy as Senior Product Designer. I advocate for designing effective experiences that make people & business satisfied and under a unified goal.
        </p>
        <p className="css-4hzbpn">
          Outside work you'll find me painting, seeking for the best coffee in town and taking long walks.
        </p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center justify-center min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] px-4">
        <h1 
          className="css-ew64yg font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[0.9] text-blue-300 text-center text-[60px] sm:text-[120px] md:text-[180px] lg:text-[240px] xl:text-[280px] tracking-[-0.05em]" 
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          i'm lucila
        </h1>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main>
        <Intro />
        <Hero />
      </main>
    </div>
  );
}