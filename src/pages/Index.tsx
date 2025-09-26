import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import WorkflowSection from "@/components/WorkflowSection";
import { TechStackSection } from "@/components/TechStackSection";
import ImageSection from "@/components/ImagesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/20">
        <HeroSection />
      </div>
      <div className="pt-12 pb-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/20">
        <ProblemSection />
      </div>
      <div className="pt-4 pb-4 bg-white dark:bg-gray-900">
        <SolutionSection />
      </div>
      <div className="pt-4 pb-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/20">
        <WorkflowSection />
      </div>
      <div className="pt-4 pb-16 bg-white dark:bg-gray-900">
        <TechStackSection />
      </div>
      <div className="pt-4 pb-16 bg-white dark:bg-gray-900">
        <ImageSection />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
