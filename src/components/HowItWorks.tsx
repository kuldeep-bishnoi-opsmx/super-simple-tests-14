import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, Settings, Rocket, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Connect Your Data",
      description: "Seamlessly integrate your existing data sources and workflows with our secure platform.",
      step: "01"
    },
    {
      icon: Settings,
      title: "Configure AI Models",
      description: "Set up custom AI models tailored to your specific business needs and requirements.",
      step: "02"
    },
    {
      icon: Rocket,
      title: "Deploy & Scale",
      description: "Launch your AI-powered workflows and scale automatically as your business grows.",
      step: "03"
    },
    {
      icon: CheckCircle,
      title: "Monitor & Optimize",
      description: "Track performance in real-time and let our AI continuously optimize your processes.",
      step: "04"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 glass-card border-white/20">
            🚀 How It Works
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Get Started in
            <span className="block gradient-text">Four Simple Steps</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Our streamlined process makes it easy to harness the power of AI automation 
            for your business, regardless of your technical expertise.
          </p>
        </div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform -translate-y-1/2"></div>

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card 
                key={index}
                className="glass-card p-8 relative group hover:scale-105 transition-all duration-300"
              >
                {/* Step number */}
                <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm glow">
                  {step.step}
                </div>

                <div className="pt-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors mb-6 mx-auto">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold text-center mb-4 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-foreground/70 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 glass-card p-6 rounded-2xl">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Setup takes less than 10 minutes</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">24/7 support included</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;