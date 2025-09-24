import { Leaf, Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary-dark to-primary py-16 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Logo and Project Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">CleanCity</h3>
                <p className="text-sm text-white/80">AI Smart Garbage System</p>
              </div>
            </div>
            <p className="text-white/90 text-sm leading-relaxed">
              Revolutionizing waste management through AI-powered solutions for cleaner, smarter cities.
            </p>
          </div>

          {/* Project Details */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Project Information</h4>
            <div className="space-y-2 text-white/90 text-sm">
              <p><span className="font-medium">Event:</span> Smart India Hackathon 2025</p>
              <p><span className="font-medium">Category:</span> Smart Cities & Environment</p>
              <p><span className="font-medium">Technology:</span> AI & Machine Learning</p>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="flex items-center justify-center md:justify-end gap-4 mb-4">
              <a
                href="mailto:team@cleancity.ai"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-white/80 text-sm">team@cleancity.ai</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/70 text-sm">
            © 2025 CleanCity Team. Built for Smart India Hackathon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;