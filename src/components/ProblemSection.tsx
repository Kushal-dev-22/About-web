import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, AlertTriangle } from "lucide-react";
import garbageProblem1 from "@/assets/garbage-problem-1.jpg";
import garbageProblem2 from "@/assets/garbage-problem-2.jpg";
import garbageProblem3 from "@/assets/garbage-problem-3.jpg";
import garbageAfter1 from "@/assets/garbage-after-1.jpg";
import garbagePlastic from "@/assets/garbage-plastic-waste.jpg";
import garbageConstruction from "@/assets/garbage-construction-debris.jpg";

const problems = [
  "Many places have no proper sanitation system in place",
  "Garbage remains uncleared for long periods of time",
  "Lack of proper communication with municipal authorities",
  "No efficient system to alert or track complaints"
];

const images = [
  { src: garbageProblem1, type: "Overflowing Street Waste" },
  { src: garbageProblem2, type: "Mixed Household Garbage" }, 
  { src: garbageProblem3, type: "Public Area Littering" },
  { src: garbageAfter1, type: "Accumulated Food Waste" },
  { src: garbagePlastic, type: "Plastic Pollution Dump" },
  { src: garbageConstruction, type: "Construction Debris Waste" }
];

const ProblemSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Problems Faced by the Public
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problems List */}
          <div className="space-y-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-4 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-card">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 flex-1">
                  <p className="text-lg text-foreground leading-relaxed">
                    {problem}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image Gallery */}
          <div className="relative">
            <div className="relative bg-card rounded-3xl p-4 shadow-hover animate-slide-in-right">
              <div className="relative h-80 md:h-96 overflow-hidden rounded-2xl">
                {/* Type heading */}
                <div className="absolute top-4 left-4 z-20 bg-black/70 text-white px-4 py-2 rounded-xl backdrop-blur-sm">
                  <h4 className="text-sm font-semibold">{images[currentImage].type}</h4>
                </div>
                
                <img
                  src={images[currentImage].src}
                  alt={`${images[currentImage].type} - Garbage problem`}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                
                {/* Navigation buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-200"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-200"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentImage ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;