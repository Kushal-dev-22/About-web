import { CheckCircle, AlertTriangle, Trash2, ShieldCheck, Bell, Award } from "lucide-react";

const SolutionSection = () => {
  const solutionFeatures = [
    {
      icon: <Trash2 className="w-6 h-6 text-green-500" />,
      title: "Waste Segregation",
      items: [
        "AI detects garbage size: Small, Medium, or Large",
        "Automatic classification of waste type: Wet, Dry, Recyclable, Hazardous",
        "Volume estimation for better resource planning"
      ]
    },
    {
      icon: <Bell className="w-6 h-6 text-blue-500" />,
      title: "Municipal Alert System",
      items: [
        "Automatic alerts for large waste piles",
        "GPS-based location tracking for precise identification",
        "Cooldown period to prevent duplicate reports for same location"
      ]
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-purple-500" />,
      title: "Cleaning & Sanitization",
      items: [
        "Before/After image verification by AI",
        "Standardized cleaning protocols",
        "Quality assurance checks"
      ]
    },
    {
      icon: <Award className="w-6 h-6 text-amber-500" />,
      title: "Reward System",
      items: [
        "Points for reporting waste",
        "Incentives for workers completing tasks",
        "Community leaderboards"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-black mb-4">
            AI-Powered Solution
          </h2>
          <div className="w-24 h-1 bg-black mx-auto rounded-full mb-8"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto items-start">
          {/* Left Side - Large Image */}
          <div className="lg:w-2/5 w-full">
            <div className="bg-white/90 rounded-2xl p-8 shadow-2xl">
              <img 
                src="/solution.png" 
                alt="AI-Powered Waste Management"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          
          {/* Right Side - Solution Cards in 2x2 Grid */}
          <div className="lg:w-3/5 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {solutionFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-opacity-10 mr-4" style={{ backgroundColor: `${feature.icon.props.className.includes('text-') ? 'currentColor' : '#3b82f6'}15` }}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;