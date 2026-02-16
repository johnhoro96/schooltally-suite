import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle } from "lucide-react";

interface DemoBookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DemoBookingModal = ({ open, onOpenChange }: DemoBookingModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    schoolName: "",
    email: "",
    phone: "",
    students: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = (val: boolean) => {
    onOpenChange(val);
    if (!val) {
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: "", schoolName: "", email: "", phone: "", students: "" });
      }, 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {submitted ? (
          <div className="flex flex-col items-center text-center py-6 gap-4">
            <CheckCircle className="h-12 w-12 text-gold-dark" />
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">Thank You!</DialogTitle>
              <DialogDescription className="text-base mt-2">
                We've received your demo request. Our team will reach out within 24 hours.
              </DialogDescription>
            </DialogHeader>
            <Button onClick={() => handleClose(false)} className="mt-4 gradient-gold text-accent-foreground font-body font-semibold shadow-gold hover:opacity-90">
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">Book a Free Demo</DialogTitle>
              <DialogDescription>
                Fill in your details and our team will schedule a personalized demo for your school.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="font-body">Full Name</Label>
                <Input id="name" required placeholder="John Doe" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="schoolName" className="font-body">School / Institution Name</Label>
                <Input id="schoolName" required placeholder="Delhi Public School" value={form.schoolName} onChange={(e) => setForm({ ...form, schoolName: e.target.value })} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email" className="font-body">Email Address</Label>
                <Input id="email" type="email" required placeholder="admin@school.edu" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="font-body">Phone Number</Label>
                  <Input id="phone" type="tel" required placeholder="+91 98765 43210" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="students" className="font-body">No. of Students</Label>
                  <Input id="students" type="number" placeholder="500" value={form.students} onChange={(e) => setForm({ ...form, students: e.target.value })} />
                </div>
              </div>
              <Button type="submit" className="w-full gradient-gold text-accent-foreground font-body font-semibold shadow-gold hover:opacity-90 text-base mt-2">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-xs text-center text-muted-foreground font-body">
                No credit card required · Free onboarding
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DemoBookingModal;
