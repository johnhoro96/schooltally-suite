import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ArrowRight, CheckCircle } from "lucide-react";

const demoSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  schoolName: z.string().trim().min(2, "School name must be at least 2 characters").max(200, "School name is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().regex(/^\+?[\d\s-]{7,15}$/, "Please enter a valid phone number (7–15 digits)"),
  students: z.string().optional(),
});

type DemoFormValues = z.infer<typeof demoSchema>;

interface DemoBookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DemoBookingModal = ({ open, onOpenChange }: DemoBookingModalProps) => {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<DemoFormValues>({
    resolver: zodResolver(demoSchema),
    defaultValues: { name: "", schoolName: "", email: "", phone: "", students: "" },
  });

  const onSubmit = (_data: DemoFormValues) => {
    setSubmitted(true);
  };

  const handleClose = (val: boolean) => {
    onOpenChange(val);
    if (!val) {
      setTimeout(() => {
        setSubmitted(false);
        form.reset();
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-2">
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-body">Full Name</FormLabel>
                    <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="schoolName" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-body">School / Institution Name</FormLabel>
                    <FormControl><Input placeholder="Delhi Public School" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-body">Email Address</FormLabel>
                    <FormControl><Input type="email" placeholder="admin@school.edu" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <div className="grid grid-cols-2 gap-4">
                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body">Phone Number</FormLabel>
                      <FormControl><Input type="tel" placeholder="+91 98765 43210" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="students" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body">No. of Students</FormLabel>
                      <FormControl><Input type="number" placeholder="500" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                <Button type="submit" className="w-full gradient-gold text-accent-foreground font-body font-semibold shadow-gold hover:opacity-90 text-base mt-2">
                  Request Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-xs text-center text-muted-foreground font-body">
                  No credit card required · Free onboarding
                </p>
              </form>
            </Form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DemoBookingModal;
