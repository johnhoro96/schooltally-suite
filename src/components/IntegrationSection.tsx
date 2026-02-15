import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  "Connect SchoolTally to your existing Tally Prime installation",
  "All financial transactions auto-sync in real-time",
  "Fee receipts, payroll entries, and expenses post directly to Tally",
  "Generate GST-compliant reports from either platform",
  "Your accountant continues working in Tally — zero learning curve",
];

const IntegrationSection = () => {
  return (
    <section id="integration" className="py-20 md:py-28 gradient-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-gold-light blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-body font-semibold text-gold uppercase tracking-widest">
              Tally Prime Integration
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-primary-foreground leading-tight">
              Seamless Sync with Tally Prime — No Double Entry
            </h2>
            <p className="mt-5 text-lg font-body text-primary-foreground/70 leading-relaxed">
              SchoolTally bridges the gap between school management and
              professional accounting. Every transaction flows directly into
              Tally Prime, giving your accountant the tools they already know.
            </p>

            <div className="mt-8 space-y-4">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 w-6 h-6 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                    <Check className="h-3.5 w-3.5 text-accent-foreground" />
                  </div>
                  <span className="text-primary-foreground/90 font-body">
                    {step}
                  </span>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="mt-10 gradient-gold text-accent-foreground font-body font-semibold shadow-gold hover:opacity-90"
            >
              See How It Works
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Visual representation of sync flow */}
            <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8">
              <div className="space-y-6">
                {[
                  { from: "Fee Collection", to: "Tally Ledger", status: "Synced" },
                  { from: "Salary Processing", to: "Tally Payroll", status: "Synced" },
                  { from: "Expense Entry", to: "Tally Voucher", status: "Synced" },
                  { from: "GST Calculation", to: "Tally GST Module", status: "Synced" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    className="flex items-center gap-4 bg-card/5 rounded-xl p-4 border border-primary-foreground/5"
                  >
                    <div className="flex-1 text-sm font-body font-medium text-primary-foreground">
                      {item.from}
                    </div>
                    <ArrowRight className="h-4 w-4 text-gold flex-shrink-0" />
                    <div className="flex-1 text-sm font-body font-medium text-primary-foreground">
                      {item.to}
                    </div>
                    <span className="text-xs font-body font-semibold text-gold bg-gold/10 px-2.5 py-1 rounded-full">
                      {item.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
