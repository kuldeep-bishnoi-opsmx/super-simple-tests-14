import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Introducing NeuroFlow AI</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                The Future of
                <span className="block gradient-text">AI Automation</span>
              </h1>
              <p className="text-xl text-foreground/80 max-w-2xl leading-relaxed">
                Transform your workflow with our cutting-edge AI platform. Streamline processes, 
                boost productivity, and unlock unprecedented insights with intelligent automation 
                that adapts to your needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="hero-button text-lg px-8 py-6 group">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 glass-card border-white/20 group">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">99.9%</div>
                <div className="text-sm text-foreground/60">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">10M+</div>
                <div className="text-sm text-foreground/60">Tasks Automated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">500%</div>
                <div className="text-sm text-foreground/60">Efficiency Boost</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative floating">
              <img
                src={heroImage}
                alt="AI Technology"
                className="w-full h-auto rounded-2xl shadow-2xl glow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 glass-card p-4 rounded-xl floating" style={{animationDelay: '0.5s'}}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">AI Processing Active</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 glass-card p-4 rounded-xl floating" style={{animationDelay: '1s'}}>
              <div className="text-2xl font-bold gradient-text">24/7</div>
              <div className="text-xs text-foreground/60">Always Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;