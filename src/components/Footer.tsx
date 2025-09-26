import { Leaf, Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/20 py-16 text-gray-900 dark:text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Logo and Project Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">CleanCity</h3>
                <p className="text-sm text-emerald-700 dark:text-emerald-300">AI Smart Garbage System</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Revolutionizing waste management through AI-powered solutions for cleaner, smarter cities.
            </p>
          </div>

          {/* Project Details */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Project Information</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-700 dark:text-gray-300"><span className="font-medium text-emerald-800 dark:text-emerald-400">Event:</span> Smart India Hackathon 2025</p>
              <p className="text-gray-700 dark:text-gray-300"><span className="font-medium text-emerald-800 dark:text-emerald-400">Category:</span> Smart Cities & Environment</p>
              <p className="text-gray-700 dark:text-gray-300"><span className="font-medium text-emerald-800 dark:text-emerald-400">Technology:</span> AI & Machine Learning</p>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="flex items-center justify-center md:justify-end gap-4 mb-4">
              <a
                href="mailto:team@cleancity.ai"
                className="w-10 h-10 bg-emerald-500/10 hover:bg-emerald-500/20 dark:bg-emerald-500/20 dark:hover:bg-emerald-500/30 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 text-emerald-700 dark:text-emerald-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-emerald-500/10 hover:bg-emerald-500/20 dark:bg-emerald-500/20 dark:hover:bg-emerald-500/30 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 text-emerald-700 dark:text-emerald-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-emerald-500/10 hover:bg-emerald-500/20 dark:bg-emerald-500/20 dark:hover:bg-emerald-500/30 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 text-emerald-700 dark:text-emerald-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-emerald-700 dark:text-emerald-300 text-sm">team@cleancity.ai</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-500/20 dark:border-emerald-400/20 mt-12 pt-8 text-center">
          <p className="text-emerald-700/80 dark:text-emerald-300/80 text-sm">
            © 2025 CleanCity Team. Built for Smart India Hackathon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;