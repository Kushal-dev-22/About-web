import { Leaf, Recycle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-float">
          <Leaf className="w-12 h-12 text-primary-light/30" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
          <Recycle className="w-16 h-16 text-primary-light/20" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <Leaf className="w-8 h-8 text-primary-light/40" />
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            AI Smart
            <br />
            <span className="text-accent">Garbage System</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing Waste Management for Cleaner Cities
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            <span className="text-white/80 text-lg">SIH 2025 Hackathon Project</span>
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;