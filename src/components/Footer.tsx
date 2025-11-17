export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 border-t border-white/10 py-12 px-6 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-electric-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-hot-pink/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-electric-blue to-cyber-cyan bg-clip-text text-transparent">
                pieops
              </span>
              <span className="text-white">.io</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Empowering businesses with agile, automation-driven cloud solutions
              and innovative engineering services.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#services" className="hover:text-electric-blue transition-colors">
                  CloudOps
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-electric-blue transition-colors">
                  DevOps & SRE
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-electric-blue transition-colors">
                  AI/ML & Data Engineering
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-electric-blue transition-colors">
                  Cyber Security
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-electric-blue transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-electric-blue transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {currentYear} pieops.io. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
