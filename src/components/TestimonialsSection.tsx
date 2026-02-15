import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "SchoolTally transformed our accounting process. What used to take 3 days now happens in minutes. The Tally sync is flawless.",
    author: "Rajesh Kumar",
    role: "Principal, Delhi Public School",
    rating: 5,
  },
  {
    quote:
      "Our accountant didn't need any training — everything just flows into Tally automatically. Fee collection has never been this smooth.",
    author: "Priya Sharma",
    role: "Administrator, St. Mary's Convent",
    rating: 5,
  },
  {
    quote:
      "We saved ₹2 lakhs annually by eliminating manual data entry errors. The compliance reports are always audit-ready.",
    author: "Anand Patel",
    role: "Director, Sunrise Academy Group",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-body font-semibold text-gold-dark uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-foreground">
            Trusted by Schools Across India
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-2xl p-8 shadow-premium"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-gold text-gold"
                  />
                ))}
              </div>
              <p className="text-foreground font-body leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <div className="font-body font-semibold text-foreground">
                  {t.author}
                </div>
                <div className="text-sm text-muted-foreground font-body">
                  {t.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
