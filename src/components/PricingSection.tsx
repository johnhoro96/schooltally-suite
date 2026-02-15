import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "₹4,999",
    period: "/month",
    description: "Perfect for small schools up to 500 students",
    features: [
      "Fee Management",
      "Basic Tally Sync",
      "SMS & Email Alerts",
      "Single Branch",
      "Email Support",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "₹9,999",
    period: "/month",
    description: "For growing institutions with advanced needs",
    features: [
      "Everything in Starter",
      "Payroll & HR Module",
      "Advanced Tally Integration",
      "Multi-Branch Support",
      "GST & Compliance Reports",
      "Priority Support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large school groups & trusts",
    features: [
      "Everything in Professional",
      "Unlimited Branches",
      "Custom Integrations",
      "Dedicated Account Manager",
      "On-Premise Deployment Option",
      "SLA Guarantee",
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-body font-semibold text-gold-dark uppercase tracking-widest">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-foreground">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-lg">
            No hidden fees. No setup charges. Start with a free 30-day trial.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? "gradient-navy text-primary-foreground shadow-premium ring-2 ring-gold/30 sm:scale-105"
                  : "bg-background border border-border"
              }`}
            >
              <h3
                className={`font-display font-bold text-xl ${
                  plan.highlighted ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span
                  className={`text-4xl font-display font-bold ${
                    plan.highlighted ? "text-gold" : "text-foreground"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm font-body ${
                    plan.highlighted
                      ? "text-primary-foreground/60"
                      : "text-muted-foreground"
                  }`}
                >
                  {plan.period}
                </span>
              </div>
              <p
                className={`mt-2 text-sm font-body ${
                  plan.highlighted
                    ? "text-primary-foreground/70"
                    : "text-muted-foreground"
                }`}
              >
                {plan.description}
              </p>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check
                      className={`h-4 w-4 flex-shrink-0 ${
                        plan.highlighted ? "text-gold" : "text-gold-dark"
                      }`}
                    />
                    <span
                      className={`text-sm font-body ${
                        plan.highlighted
                          ? "text-primary-foreground/90"
                          : "text-foreground"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full mt-8 font-body font-semibold ${
                  plan.highlighted
                    ? "gradient-gold text-accent-foreground shadow-gold hover:opacity-90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
