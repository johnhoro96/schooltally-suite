import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full gradient-gold" />
              <span className="text-xs font-body font-medium text-muted-foreground">
                Trusted by 500+ Schools Across India
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
              School Accounting,{" "}
              <span className="text-gradient-gold">Simplified</span> with
              Tally Prime
            </h1>

            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8 max-w-lg">
              The only school management software that seamlessly integrates
              with Tally Prime — automate fees, payroll, expenses, and
              compliance in one powerful platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="gradient-gold text-accent-foreground font-body font-semibold shadow-gold hover:opacity-90 transition-opacity text-base px-8"
              >
                Book a Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="font-body text-base"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Overview
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-6 sm:gap-8">
              {[
                { value: "500+", label: "Schools" },
                { value: "₹50Cr+", label: "Managed" },
                { value: "99.9%", label: "Uptime" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl sm:text-2xl font-display font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-body">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-premium">
              <img
                src={heroImage}
                alt="SchoolTally - School Accounting Software integrated with Tally Prime"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl gradient-gold opacity-20 blur-2xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full gradient-navy opacity-10 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
