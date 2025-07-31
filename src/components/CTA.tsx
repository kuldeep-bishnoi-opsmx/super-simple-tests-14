import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card p-12 lg:p-16 text-center rounded-3xl glow">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Ready to Transform Your Business?</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Start Your AI Journey
            <span className="block gradient-text">Today</span>
          </h2>

          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using NeuroFlow to automate their workflows, 
            gain deeper insights, and scale their operations with the power of AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="hero-button text-lg px-8 py-6 group">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6 glass-card border-white/20">
              Schedule Demo
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-foreground/60">
              No credit card required • 14-day free trial • Setup in minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;