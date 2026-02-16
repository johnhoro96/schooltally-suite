import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (isSignUp) {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: window.location.origin },
      });
      if (error) {
        toast({ variant: "destructive", title: "Sign up failed", description: error.message });
      } else {
        toast({ title: "Check your email", description: "We've sent you a verification link to confirm your account." });
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        toast({ variant: "destructive", title: "Login failed", description: error.message });
      } else {
        navigate("/");
      }
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 gradient-navy relative items-center justify-center p-12">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold blur-3xl" />
        </div>
        <div className="relative text-center max-w-md">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center">
              <span className="font-display font-bold text-accent-foreground text-lg">ST</span>
            </div>
            <span className="font-display font-bold text-3xl text-primary-foreground">SchoolTally</span>
          </div>
          <h2 className="text-2xl font-display font-bold text-primary-foreground leading-tight">
            School Accounting, <span className="text-gold">Simplified</span>
          </h2>
          <p className="mt-4 text-primary-foreground/60 font-body leading-relaxed">
            Manage fees, payroll, expenses, and compliance — all seamlessly integrated with Tally Prime.
          </p>
        </div>
      </div>

      {/* Right panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-sm">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 font-body"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </button>

          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg gradient-gold flex items-center justify-center">
              <span className="font-display font-bold text-accent-foreground text-sm">ST</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">SchoolTally</span>
          </div>

          <h1 className="text-2xl font-display font-bold text-foreground">
            {isSignUp ? "Create an account" : "Welcome back"}
          </h1>
          <p className="mt-1 text-muted-foreground font-body text-sm">
            {isSignUp ? "Sign up to get started with SchoolTally" : "Sign in to your SchoolTally account"}
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="email" className="font-body">Email</Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="admin@school.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password" className="font-body">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={6}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full gradient-gold text-accent-foreground font-body font-semibold shadow-gold hover:opacity-90 text-base"
            >
              {loading ? "Please wait…" : isSignUp ? "Create Account" : "Sign In"}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground font-body">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-gold-dark font-semibold hover:underline"
            >
              {isSignUp ? "Sign in" : "Sign up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
