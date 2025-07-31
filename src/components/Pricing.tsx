import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Crown, Rocket } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "$29",
      period: "/month",
      description: "Perfect for small teams getting started with AI automation",
      features: [
        "Up to 1,000 AI operations/month",
        "Basic analytics dashboard",
        "Email support",
        "Standard integrations",
        "2 team members",
        "Community access"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      icon: Crown,
      price: "$99",
      period: "/month",
      description: "Advanced features for growing businesses and teams",
      features: [
        "Up to 10,000 AI operations/month",
        "Advanced analytics & insights",
        "Priority support",
        "Premium integrations",
        "10 team members",
        "Custom workflows",
        "API access",
        "Advanced security"
      ],
      popular: true,
      cta: "Get Started"
    },
    {
      name: "Enterprise",
      icon: Rocket,
      price: "Custom",
      period: "",
      description: "Unlimited power for large organizations",
      features: [
        "Unlimited AI operations",
        "Custom analytics platform",
        "24/7 dedicated support",
        "Custom integrations",
        "Unlimited team members",
        "White-label solutions",
        "SLA guarantees",
        "On-premise deployment"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 glass-card border-white/20">
            💰 Pricing
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Simple, Transparent
            <span className="block gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day free trial 
            with no setup fees or hidden costs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`glass-card p-8 relative group hover:scale-105 transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-primary glow' : ''
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}

              <div className="text-center mb-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors mb-6 mx-auto">
                  <plan.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-foreground/60 text-sm mb-6">{plan.description}</p>

                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-foreground/60">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${plan.popular ? 'hero-button' : 'glass-card border-white/20'}`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-8 glass-card p-8 rounded-2xl">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium">14-day free trial</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium">No setup fees</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;