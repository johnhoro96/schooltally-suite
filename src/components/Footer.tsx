const Footer = () => {
  const links = {
    Product: ["Features", "Pricing", "Tally Integration", "Security", "Changelog"],
    Company: ["About Us", "Careers", "Blog", "Contact", "Partners"],
    Resources: ["Documentation", "Help Center", "Webinars", "Case Studies", "API"],
    Legal: ["Privacy Policy", "Terms of Service", "GDPR", "Cookie Policy"],
  };

  return (
    <footer className="bg-[hsl(222,47%,11%)] py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-12">
          <div className="col-span-2 sm:col-span-3 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-gold flex items-center justify-center">
                <span className="font-display font-bold text-accent-foreground text-sm">ST</span>
              </div>
              <span className="font-display font-bold text-xl text-white">SchoolTally</span>
            </div>
            <p className="text-sm text-white/50 font-body leading-relaxed">
              School Accounting & Management Software integrated with Tally Prime.
            </p>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-body font-semibold text-white text-sm mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm font-body text-white/50 hover:text-gold transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-body text-white/40">
            © 2026 SchoolTally. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm font-body text-white/40 hover:text-gold transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm font-body text-white/40 hover:text-gold transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm font-body text-white/40 hover:text-gold transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
