import { useEffect, useRef } from "react";

// Import images from assets
import image1 from "@/assets/1.jpg";
import image2 from "@/assets/2.jpg";
import image3 from "@/assets/3.jpg";
import image4 from "@/assets/4.jpg";
import image5 from "@/assets/5.jpg";
import image6 from "@/assets/6.jpg";
import image7 from "@/assets/7.jpg";

const ContinuousScroller = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  // All 7 images from assets
  const images = [image1, image2, image3, image4, image5, image6, image7];

  // Duplicate images for seamless looping
  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    if (!containerRef.current) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame - slower movement

    const animate = () => {
      scrollPosition += scrollSpeed;

      if (containerRef.current) {
        // Reset position when scrolled through one set of images
        if (scrollPosition >= containerRef.current.scrollWidth / 2) {
          scrollPosition = 0;
        }
        containerRef.current.style.transform = `translateX(-${scrollPosition}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full overflow-hidden py-8">
      <h2 className="text-5xl font-bold text-foreground mb-6 animate-fade-in text-center pt-0 pb-12">
        App Screenshots
      </h2>

      <div className="relative">
        <div ref={containerRef} className="flex">
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-10 group"
              style={{ width: "20%" }}
            >
              <div className="relative transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:z-10">
                {/* Background shade on hover */}
                <div className="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

                <img
                  src={image}
                  alt={`App screenshot ${(index % images.length) + 1}`}
                  className="w-full h-auto object-contain max-h-55 rounded-lg transition-all duration-300 ease-in-out shadow-xl group-hover:shadow-2xl" // Shadow on image with hover effect
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContinuousScroller;
