import { CheckCircle } from "lucide-react";

const SolutionSection = () => {
  const extraFeatures = [
    "AI Prioritization: System identifies high-priority areas automatically, saving municipal office time.",
    "Duplicate Complaint Prevention: Garbage at the same GPS location cannot be reported repeatedly within a set time.",
    "Efficient Resource Management: Helps authorities plan worker routes optimally for maximum efficiency.",
    "Real-Time Alerts: Municipal offices get instant alerts for large or urgent garbage complaints.",
    "Reward & Gamification: Users and workers are incentivized for timely actions through reward points.",
    "Future-Ready AI: Can classify garbage type (wet, dry, recyclable) for smart disposal systems."
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
            <p className="text-xl leading-relaxed text-foreground text-center mb-8">
              To solve poor communication with municipal authorities, we created an 
              <span className="font-semibold text-primary"> AI-powered system</span>.
              Users upload images of garbage. If the garbage is medium/large, an alert is sent to 
              <span className="font-semibold text-primary"> municipal authorities</span>.
              Authorities create a task for nearby workers. Worker cleans the place and uploads the cleaned image.
              The <span className="font-semibold text-primary">AI verifies</span> the place is clean.
              Complaint closes and both user & worker gain 
              <span className="font-semibold text-accent"> rewards</span>.
            </p>
            
            {/* Extra Features in Unique Way */}
            <div className="mt-8 pt-8 border-t border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Extra Features in Unique Way
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {extraFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;