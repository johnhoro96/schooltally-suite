import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import IntegrationSection from "@/components/IntegrationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import DemoBookingModal from "@/components/DemoBookingModal";

const Index = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onBookDemo={() => setDemoOpen(true)} />
      <HeroSection onBookDemo={() => setDemoOpen(true)} />
      <FeaturesSection />
      <IntegrationSection />
      <TestimonialsSection />
      <PricingSection onBookDemo={() => setDemoOpen(true)} />
      <FAQSection />
      <CTASection onBookDemo={() => setDemoOpen(true)} />
      <Footer />
      <DemoBookingModal open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
};

export default Index;
