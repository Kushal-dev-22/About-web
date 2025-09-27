import React from "react";

interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

interface BenefitCategory {
  title: string;
  subtitle: string;
  theme: "green" | "blue" | "emerald" | "indigo" | "amber" | "teal";
  icon: string;
  items: BenefitItem[];
}

const ImpactAndBenefits: React.FC = () => {
  const benefitCategories: BenefitCategory[] = [
    {
      title: "Citizens Empowered",
      subtitle: "Community-driven accountability and transparency",
      theme: "blue",
      icon: "👥",
      items: [
        {
          icon: "📱",
          title: "Simplified Garbage Reporting",
          description:
            "Easy-to-use platform for reporting waste issues without technical expertise",
        },
        {
          icon: "🔍",
          title: "Enhanced Transparency",
          description:
            "Complete visibility into reporting process and resolution status",
        },
        {
          icon: "⚖️",
          title: "Accountability Promotion",
          description:
            "Enables citizens to hold authorities accountable for civic cleanliness",
        },
        {
          icon: "🌟",
          title: "Civic Duty Engagement",
          description:
            "Promotes active community participation in urban maintenance",
        },
      ],
    },
    {
      title: "Municipal Efficiency",
      subtitle: "Data-driven urban management and optimized operations",
      theme: "indigo",
      icon: "🏛️",
      items: [
        {
          icon: "📊",
          title: "Objective Data Prioritization",
          description:
            "Data analytics to prioritize urgent clean-ups based on real-time needs",
        },
        {
          icon: "📍",
          title: "Reduced Response Time",
          description:
            "Location tagging enables faster targeting and resolution of issues",
        },
        {
          icon: "📋",
          title: "Digital Record Keeping",
          description:
            "Paperless complaint closure with comprehensive performance tracking",
        },
        {
          icon: "📈",
          title: "Performance Metrics",
          description:
            "Track cleaning team efficiency and optimize resource allocation",
        },
      ],
    },
    {
      title: "Environmental Sustainability",
      subtitle: "Proactive pollution prevention and urban ecosystem management",
      theme: "green",
      icon: "🌱",
      items: [
        {
          icon: "⚠️",
          title: "Pollution Prevention",
          description:
            "Prevents waste accumulation and associated environmental contamination",
        },
        {
          icon: "📢",
          title: "Community Awareness",
          description:
            "Promotes environmental consciousness and sustainable practices",
        },
        {
          icon: "🗺️",
          title: "Hotspot Identification",
          description:
            "Identifies recurring waste patterns for targeted interventions",
        },
        {
          icon: "🏙️",
          title: "Urban Planning Support",
          description:
            "Data-driven insights for long-term sustainable city development",
        },
      ],
    },
    {
      title: "Social Benefits",
      subtitle: "Healthier communities and empowered citizens",
      theme: "emerald",
      icon: "❤️",
      items: [
        {
          icon: "🏥",
          title: "Healthier Living Environment",
          description: "Reduces disease risks through timely waste management",
        },
        {
          icon: "🛡️",
          title: "Disease Prevention",
          description:
            "Minimizes health hazards from accumulated waste and contamination",
        },
        {
          icon: "🔊",
          title: "Citizen Empowerment",
          description:
            "Gives communities voice and agency in urban cleanliness",
        },
        {
          icon: "🤝",
          title: "Community Cohesion",
          description:
            "Fosters collective responsibility and neighborhood pride",
        },
      ],
    },
    {
      title: "Economic Benefits",
      subtitle: "Cost optimization and sustainable economic development",
      theme: "amber",
      icon: "💰",
      items: [
        {
          icon: "💸",
          title: "Reduced Operational Costs",
          description:
            "Optimizes municipal spending through efficient resource allocation",
        },
        {
          icon: "🏥",
          title: "Prevented Health Expenditures",
          description:
            "Reduces healthcare costs by preventing waste-related diseases",
        },
        {
          icon: "🌳",
          title: "Environmental Damage Prevention",
          description:
            "Avoids costly cleanup of contaminated sites and ecosystems",
        },
        {
          icon: "📈",
          title: "Economic Incentives",
          description:
            "Creates opportunities for green jobs and sustainable businesses",
        },
      ],
    },
    {
      title: "Environmental Benefits",
      subtitle: "Sustainable waste management and ecosystem protection",
      theme: "teal",
      icon: "🌍",
      items: [
        {
          icon: "♻️",
          title: "Enhanced Waste Segregation",
          description: "Promotes proper sorting and recycling practices",
        },
        {
          icon: "🗑️",
          title: "Reduced Landfill Burden",
          description:
            "Minimizes pressure on landfill sites through efficient processing",
        },
        {
          icon: "🏙️",
          title: "Sustainable Urban Ecosystems",
          description:
            "Supports balanced urban development with environmental consideration",
        },
        {
          icon: "🌿",
          title: "Biodiversity Protection",
          description:
            "Preserves local ecosystems from waste pollution impacts",
        },
      ],
    },
  ];

  const BenefitCard: React.FC<{ category: BenefitCategory }> = ({
    category,
  }) => {
    const themeClasses = {
      green: {
        bg: "bg-green-100",
        border: "border-green-200",
        text: "text-green-800",
        subtitle: "text-green-600",
        iconBg: "bg-green-100",
        iconBorder: "border-green-300",
        hoverBg: "hover:bg-green-50",
        hoverText: "group-hover:text-green-700",
        accent: "bg-green-500",
      },
      blue: {
        bg: "bg-blue-100",
        border: "border-blue-200",
        text: "text-blue-800",
        subtitle: "text-blue-600",
        iconBg: "bg-blue-100",
        iconBorder: "border-blue-300",
        hoverBg: "hover:bg-blue-50",
        hoverText: "group-hover:text-blue-700",
        accent: "bg-blue-500",
      },
      emerald: {
        bg: "bg-emerald-100",
        border: "border-emerald-200",
        text: "text-emerald-800",
        subtitle: "text-emerald-600",
        iconBg: "bg-emerald-100",
        iconBorder: "border-emerald-300",
        hoverBg: "hover:bg-emerald-50",
        hoverText: "group-hover:text-emerald-700",
        accent: "bg-emerald-500",
      },
      indigo: {
        bg: "bg-indigo-100",
        border: "border-indigo-200",
        text: "text-indigo-800",
        subtitle: "text-indigo-600",
        iconBg: "bg-indigo-100",
        iconBorder: "border-indigo-300",
        hoverBg: "hover:bg-indigo-50",
        hoverText: "group-hover:text-indigo-700",
        accent: "bg-indigo-500",
      },
      amber: {
        bg: "bg-amber-100",
        border: "border-amber-200",
        text: "text-amber-800",
        subtitle: "text-amber-600",
        iconBg: "bg-amber-100",
        iconBorder: "border-amber-300",
        hoverBg: "hover:bg-amber-50",
        hoverText: "group-hover:text-amber-700",
        accent: "bg-amber-500",
      },
      teal: {
        bg: "bg-teal-100",
        border: "border-teal-200",
        text: "text-teal-800",
        subtitle: "text-teal-600",
        iconBg: "bg-teal-100",
        iconBorder: "border-teal-300",
        hoverBg: "hover:bg-teal-50",
        hoverText: "group-hover:text-teal-700",
        accent: "bg-teal-500",
      },
    };

    const currentTheme = themeClasses[category.theme];

    return (
      <div
        className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border ${currentTheme.border} h-full flex flex-col `}
      >
        <div className="text-center mb-6">
          <div
            className={`w-14 h-14 ${currentTheme.bg} rounded-full flex items-center justify-center mx-auto mb-0 border-4 ${currentTheme.border}`}
          >
            <span className="text-2xl">{category.icon}</span>
          </div>
          <h3 className={`text-xl font-bold ${currentTheme.text} mb-1`}>
            {category.title}
          </h3>
          <p className={`text-sm ${currentTheme.subtitle}`}>
            {category.subtitle}
          </p>
        </div>

        <div className="space-y-4 flex-1">
          {category.items.map((item, index) => (
            <div
              key={index}
              className={`flex items-start space-x-3 group transition-all duration-200 p-2 rounded-lg ${currentTheme.hoverBg}`}
            >
              <div
                className={`flex-shrink-0 w-10 h-10 ${currentTheme.iconBg} rounded-lg flex items-center justify-center border ${currentTheme.iconBorder}`}
              >
                <span className="text-lg">{item.icon}</span>
              </div>
              <div className="flex-1">
                <h4
                  className={`font-semibold text-gray-900 text-base mb-1 ${currentTheme.hoverText}`}
                >
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-tight">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const ImpactStats: React.FC = () => {
    const stats = [
      { value: "30%", label: "Faster Response Time", icon: "⚡" },
      { value: "45%", label: "Cost Reduction", icon: "💰" },
      { value: "60%", label: "Citizen Participation", icon: "👥" },
      { value: "25%", label: "Waste Reduction", icon: "♻️" },
    ];

    return (
      <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white mb-12">
        <h3 className="text-2xl font-bold text-center mb-8">
          Measurable Impact
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg mb-1">{stat.icon}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      id="impact"
      className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 pb-10 bg-green-500 "
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center pt-10 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Impact & Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            ECO-Clean transforms urban cleanliness through technology-driven
            solutions that benefit citizens, municipalities, and the environment
            alike. Discover how our platform creates sustainable value across
            all stakeholders.
          </p>
        </div>

        {/* Impact Stats */}
        {/* <ImpactStats /> */}

        {/* Main Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {benefitCategories.map((category, index) => (
            <BenefitCard key={index} category={category} />
          ))}
        </div>

        {/* Ecosystem Visualization */}

        {/* Final CTA */}
      </div>
    </section>
  );
};

export default ImpactAndBenefits;
