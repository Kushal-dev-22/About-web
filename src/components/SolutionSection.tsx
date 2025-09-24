import { Smartphone, Brain, Building2, Users, Camera, Award } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "User Upload",
      desc: "Citizens upload images of garbage"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Detection",
      desc: "AI analyzes garbage size and urgency"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Authority Alert",
      desc: "Municipal authorities receive alerts"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Task Assignment",
      desc: "Nearby workers get assigned tasks"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Verification",
      desc: "AI verifies cleanup completion"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Rewards",
      desc: "Both users and workers earn rewards"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Our AI-Powered Solution
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
        </div>

        {/* Solution Description */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-card rounded-3xl p-8 md:p-12 shadow-hover animate-scale-in">
            <p className="text-xl leading-relaxed text-foreground text-center">
              To solve poor communication with municipal authorities, we created an 
              <span className="font-semibold text-primary"> AI-powered system</span>.
              Users upload images of garbage. If the garbage is medium/large, an alert is sent to 
              <span className="font-semibold text-primary"> municipal authorities</span>.
              Authorities create a task for nearby workers. Worker cleans the place and uploads the cleaned image.
              The <span className="font-semibold text-primary">AI verifies</span> the place is clean.
              Complaint closes and both user & worker gain 
              <span className="font-semibold text-accent"> rewards</span>.
            </p>
          </div>
        </div>

        {/* Feature Icons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-card group-hover:shadow-hover group-hover:scale-105 transition-all duration-300">
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;