import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, BarChart3, Shield, Zap, Target, Globe } from "lucide-react";
import featureAi from "@/assets/feature-ai.jpg";
import featureAnalytics from "@/assets/feature-analytics.jpg";
import featureSecurity from "@/assets/feature-security.jpg";
import featureAutomation from "@/assets/feature-automation.jpg";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Processing",
      description: "Leverage cutting-edge neural networks for intelligent decision making and pattern recognition.",
      image: featureAi,
      badge: "Core Feature"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Get instant insights with powerful analytics and customizable dashboards.",
      image: featureAnalytics,
      badge: "Popular"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption and compliance standards.",
      image: featureSecurity,
      badge: "Secure"
    },
    {
      icon: Zap,
      title: "Smart Automation",
      description: "Automate complex workflows with intelligent triggers and adaptive responses.",
      image: featureAutomation,
      badge: "Powerful"
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "AI-powered targeting that learns and adapts to optimize your outcomes.",
      image: featureAi,
      badge: "Smart"
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy across multiple regions with automatic scaling and load balancing.",
      image: featureAnalytics,
      badge: "Scalable"
    }
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 glass-card border-white/20">
            ✨ Features
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Powerful Features for
            <span className="block gradient-text">Modern Businesses</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Discover how our AI-powered platform transforms the way you work with intelligent 
            automation, real-time insights, and enterprise-grade security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass-card p-8 group cursor-pointer"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative mb-6">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                  {feature.badge}
                </Badge>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>

              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>

              <div className="mt-6 flex items-center text-primary group-hover:text-primary-glow transition-colors">
                <span className="text-sm font-medium">Learn more</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;