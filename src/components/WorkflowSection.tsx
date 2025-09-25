import { Camera, Brain, Building2, UserCheck, Trash2, CheckCircle, Trophy, ArrowRight } from "lucide-react";

const workflowSteps = [
  {
    icon: <Camera className="w-10 h-10" />,
    title: "User Uploads Image",
    description: "Citizen captures and uploads garbage image through mobile app",
    color: "bg-blue-500"
  },
  {
    icon: <Brain className="w-10 h-10" />,
    title: "AI Detects Garbage Size",
    description: "AI analyzes image to determine garbage size and priority level",
    color: "bg-purple-500"
  },
  {
    icon: <Building2 className="w-10 h-10" />,
    title: "Alert Sent to Authority",
    description: "Automated alert sent to relevant municipal authority office",
    color: "bg-orange-500"
  },
  {
    icon: <UserCheck className="w-10 h-10" />,
    title: "Task Assigned to Worker",
    description: "Nearest available cleanup worker receives task assignment",
    color: "bg-indigo-500"
  },
  {
    icon: <Trash2 className="w-10 h-10" />,
    title: "Worker Cleans & Uploads",
    description: "Worker cleans location and uploads completion image proof",
    color: "bg-green-500"
  },
  {
    icon: <CheckCircle className="w-10 h-10" />,
    title: "AI Verifies Cleanliness",
    description: "AI verifies cleanup completion by comparing before/after images",
    color: "bg-teal-500"
  },
  {
    icon: <Trophy className="w-10 h-10" />,
    title: "Rewards Given",
    description: "Both reporter and cleanup worker receive reward points",
    color: "bg-yellow-500"
  }
];

const WorkflowSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6 animate-fade-in">
            How It Works
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined workflow ensures efficient garbage cleanup through AI-powered task management
          </p>
        </div>

        {/* Horizontal Workflow */}
        <div className="relative">
          {/* Desktop View */}
          <div className="hidden lg:block">
            <div className="flex items-start justify-between relative px-12">
              {workflowSteps.map((step, index) => (
                <div key={index} className="relative group flex-1 px-4">
                  {/* Step Card */}
                  <div className="text-center max-w-xs mx-auto animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300 relative z-10`}>
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="font-bold text-md text-foreground mb-2">{step.title}</h3>
                    <p className="text-xs text-muted-foreground leading-tight">{step.description}</p>
                  </div>

                  {/* Arrow */}
                  {index < workflowSteps.length - 1 && (
                    <div className="absolute top-10 right-0 transform translate-x-1/2 z-0">
                      <ArrowRight className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile View */}
          <div className="lg:hidden space-y-6">
            {workflowSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-center gap-4 animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`w-14 h-14 ${step.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground text-sm">{step.title}</h3>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className="absolute left-7 top-14 transform -translate-x-1/2">
                    <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-gradient-primary rounded-3xl p-8 shadow-hover animate-fade-in">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your City?
              </h3>
              <p className="text-white/90 text-lg">
                Join us in creating cleaner, healthier communities through smart waste management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;