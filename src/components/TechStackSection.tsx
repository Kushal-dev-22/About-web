const techStack = [
  {
    category: "Frontend",
    tools: ["React Native", "TypeScript"],
    icon: "📱",
    bgColor: "bg-gradient-to-br from-blue-500 to-cyan-400",
    textColor: "text-blue-600 dark:text-blue-400",
    borderColor: "border-blue-200 dark:border-blue-800/50",
    hoverBg: "hover:bg-blue-50/80 dark:hover:bg-blue-900/10",
  },
  {
    category: "Backend",
    tools: ["Python", "Flask", "FastAPI"],
    icon: "⚙️",
    bgColor: "bg-gradient-to-br from-purple-600 to-pink-500",
    textColor: "text-purple-600 dark:text-purple-400",
    borderColor: "border-purple-200 dark:border-purple-800/50",
    hoverBg: "hover:bg-purple-50/80 dark:hover:bg-purple-900/10",
  },
  {
    category: "AI/ML",
    tools: ["PyTorch", "MobileNetV2"],
    icon: "🤖",
    bgColor: "bg-gradient-to-br from-amber-500 to-pink-500",
    textColor: "text-amber-600 dark:text-amber-400",
    borderColor: "border-amber-200 dark:border-amber-800/50",
    hoverBg: "hover:bg-amber-50/80 dark:hover:bg-amber-900/10",
  },
  {
    category: "Database",
    tools: ["MongoDB"],
    icon: "💾",
    bgColor: "bg-gradient-to-br from-emerald-500 to-teal-400",
    textColor: "text-emerald-600 dark:text-emerald-400",
    borderColor: "border-emerald-200 dark:border-emerald-800/50",
    hoverBg: "hover:bg-emerald-50/80 dark:hover:bg-emerald-900/10",
  },
  {
    category: "DevOps",
    tools: ["Vercel", "GitHub" , "Render"],
    icon: "🚀",
    bgColor: "bg-gradient-to-br from-orange-500 to-red-500",
    textColor: "text-orange-600 dark:text-orange-400",
    borderColor: "border-orange-200 dark:border-orange-800/50",
    hoverBg: "hover:bg-orange-50/80 dark:hover:bg-orange-900/10",
  },
];

export function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="py-16 pb-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4  text-sm font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-full mb-4">
            Technology Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Built With{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
              Modern Tools
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our solution leverages cutting-edge technologies to deliver
            exceptional performance and user experience
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto px-4">
          {techStack.map((category) => (
            <div
              key={category.category}
              className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-500 
                         border-4 ${category.borderColor.replace(
                           "border-",
                           "border-"
                         )} border-opacity-60 dark:border-opacity-40 
                         hover:border-opacity-90 dark:hover:border-opacity-80 hover:-translate-y-1`}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              {/* Category Header */}
              <div className="mb-6 text-center">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto ${category.bgColor} shadow-lg group-hover:scale-110 transition-all duration-300 border-4 border-white/30`}
                >
                  <span className="drop-shadow-md">{category.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {category.category}
                </h3>
              </div>

              {/* Technologies Flex Wrap */}
              <div className="flex flex-wrap gap-2 justify-center">
                {category.tools.map((tool) => (
                  <div
                    key={tool}
                    className={`px-3 py-2 bg-white dark:bg-gray-700/30 rounded-lg text-center transition-all duration-300
                               border-2 ${category.borderColor} ${category.hoverBg}
                               hover:shadow-lg hover:-translate-y-0.5 border-opacity-70 group-hover:border-opacity-100`}
                  >
                    <span
                      className={`text-sm font-medium ${category.textColor} dark:group-hover:opacity-90`}
                    >
                      {tool}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Border Animation */}
              <div
                className={`absolute bottom-0 left-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 -translate-x-1/2 transition-all duration-300`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStackSection;
