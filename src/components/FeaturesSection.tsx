import { Brain, MapPin, Clock, Shield, Trophy, Recycle } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Prioritization",
      description: "System identifies high-priority areas automatically, saving municipal office time.",
      color: "bg-purple-500"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Duplicate Complaint Prevention", 
      description: "Garbage at the same GPS location cannot be reported repeatedly within a set time.",
      color: "bg-blue-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Efficient Resource Management",
      description: "Helps authorities plan worker routes optimally for maximum efficiency.",
      color: "bg-orange-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Real-Time Alerts",
      description: "Municipal offices get instant alerts for large or urgent garbage complaints.",
      color: "bg-red-500"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Reward & Gamification",
      description: "Users and workers are incentivized for timely actions through reward points.",
      color: "bg-yellow-500"
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Future-Ready AI",
      description: "Can classify garbage type (wet, dry, recyclable) for smart disposal systems.",
      color: "bg-green-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Extra Features in Unique Way
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced AI-powered features that make our garbage management system truly intelligent and efficient
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-background/80 backdrop-blur-sm rounded-3xl p-8 shadow-card hover:shadow-hover transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* AI Detection Highlight */}
        <div className="mt-16 bg-gradient-card rounded-3xl p-8 md:p-12 shadow-hover animate-fade-in">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-4">
              AI Detection That Saves Time
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our advanced AI detection system knows how to <span className="font-semibold text-primary">prioritize and efficiently solve</span> sanitation problems. 
              When multiple people upload the same trash within a day, our <span className="font-semibold text-primary">GPS-based duplicate prevention</span> system 
              ensures the location is blocked for reporting for a particular time, <span className="font-semibold text-accent">eliminating confusion</span> and 
              optimizing municipal resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;