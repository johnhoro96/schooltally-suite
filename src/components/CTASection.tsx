import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  onBookDemo: () => void;
}

const CTASection = ({ onBookDemo }: CTASectionProps) => {
  return (
    <section className="py-20 md:py-28 gradient-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
            Ready to Modernize Your School's Finances?
          </h2>
          <p className="mt-5 text-lg font-body text-white/70 leading-relaxed">
            Join 500+ schools that trust SchoolTally. Get started with a free 30-day trial and see the Tally integration in action.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-gold text-accent-foreground font-body font-semibold shadow-gold hover:opacity-90 text-base px-8" onClick={onBookDemo}>
              Book a Free Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white font-body text-base hover:bg-white/5">
              <Phone className="mr-2 h-4 w-4" />
              Talk to Sales
            </Button>
          </div>

          <p className="mt-6 text-sm font-body text-white/50">
            No credit card required · Free onboarding · Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
