import { Leaf, Recycle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-8 left-10 animate-float">
          <Leaf className="w-8 h-8 text-primary-light/30" />
        </div>
        <div className="absolute bottom-8 right-10 animate-float" style={{ animationDelay: '1s' }}>
          <Recycle className="w-10 h-10 text-primary-light/20" />
        </div>
        <div className="absolute top-1/2 right-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <Leaf className="w-6 h-6 text-primary-light/40" />
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            AI Smart <span className="text-accent">Garbage System</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-6">
            Revolutionizing Waste Management for Cleaner Cities through AI-Powered Detection, Smart Prioritization & Real-Time Municipal Coordination
          </p>
          <div className="flex items-center justify-center gap-4 text-white/80">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-base">SIH 2025 Hackathon Project</span>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;