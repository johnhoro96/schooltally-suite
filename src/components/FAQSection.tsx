import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "How does SchoolTally integrate with Tally Prime?",
    a: "SchoolTally connects directly to your Tally Prime installation via a secure sync bridge. All financial transactions — fee receipts, payroll entries, expense vouchers — are automatically posted to the correct Tally ledgers in real-time. No manual data entry required.",
  },
  {
    q: "Do we need to change our existing Tally setup?",
    a: "No. SchoolTally works with your existing Tally Prime configuration. Your accountant continues using Tally as usual, while the school admin manages fees and operations through SchoolTally. Both systems stay perfectly in sync.",
  },
  {
    q: "Is our financial data secure?",
    a: "Absolutely. We use bank-grade 256-bit SSL encryption, regular security audits, and automated backups. Your data is hosted on enterprise-grade servers with 99.9% uptime guarantee.",
  },
  {
    q: "Can we manage multiple branches?",
    a: "Yes. Our Professional and Enterprise plans support multi-branch management with consolidated reporting. Each branch can have its own Tally company while you get a unified dashboard.",
  },
  {
    q: "What kind of support do you provide?",
    a: "We offer email support for Starter plans, priority phone & chat support for Professional, and a dedicated account manager for Enterprise clients. We also provide free onboarding and training for all plans.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes! All plans come with a 30-day free trial. No credit card required. Our team will help you set up the Tally integration during the trial period.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body font-semibold text-gold-dark uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-premium transition-shadow"
            >
              <AccordionTrigger className="font-body font-semibold text-foreground text-left hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-body leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
