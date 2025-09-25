import { Leaf, Recycle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-6 md:py-8 bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-3 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
          AI Smart <span className="text-accent drop-shadow-md">Garbage System</span>
        </h1>
        <p className="text-sm md:text-base text-white/90 max-w-xl mx-auto mb-2">
          AI-Powered Waste Management for Cleaner Cities
        </p>
        <div className="flex items-center justify-center gap-1.5 text-white/80 text-xs">
          <div className="w-1 h-1 bg-accent rounded-full animate-pulse"></div>
          <span>SIH 2025</span>
          <div className="w-1 h-1 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;