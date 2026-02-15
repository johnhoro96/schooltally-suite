import { motion } from "framer-motion";
import {
  Receipt,
  Users,
  BarChart3,
  ShieldCheck,
  Bell,
  BookOpen,
} from "lucide-react";

const features = [
  {
    icon: Receipt,
    title: "Automated Fee Management",
    description:
      "Collect, track, and reconcile fees automatically. Send reminders, generate receipts, and manage concessions — all synced with Tally.",
  },
  {
    icon: Users,
    title: "Payroll & HR Management",
    description:
      "Process salaries, manage attendance, handle PF/ESI compliance, and generate payslips with one-click Tally posting.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Financial Reports",
    description:
      "Get instant balance sheets, P&L statements, and custom reports. Every transaction is mirrored in Tally Prime.",
  },
  {
    icon: ShieldCheck,
    title: "GST & Compliance Ready",
    description:
      "Auto-generate GST returns, TDS reports, and audit-ready financial statements. Stay compliant effortlessly.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Automated SMS & email alerts for fee dues, salary credits, and payment confirmations to parents and staff.",
  },
  {
    icon: BookOpen,
    title: "Expense & Budget Tracking",
    description:
      "Track every rupee across departments. Set budgets, approve expenses, and get variance analysis in real-time.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-body font-semibold text-gold-dark uppercase tracking-widest">
            Features
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-foreground">
            Everything Your School Needs in One Place
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-lg">
            Purpose-built for educational institutions. Manage finances, staff,
            and compliance without switching between tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-background border border-border hover:shadow-premium transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center mb-5 group-hover:shadow-gold transition-shadow">
                <feature.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
