import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import avatarSarah from "@/assets/avatar-sarah.jpg";
import avatarMarcus from "@/assets/avatar-marcus.jpg";
import avatarEmily from "@/assets/avatar-emily.jpg";
import avatarDavid from "@/assets/avatar-david.jpg";
import avatarLisa from "@/assets/avatar-lisa.jpg";
import avatarAlex from "@/assets/avatar-alex.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechFlow Inc",
      company: "TechFlow Inc",
      content: "NeuroFlow transformed our data processing pipeline. We've seen a 500% increase in efficiency and reduced processing time from hours to minutes.",
      rating: 5,
      avatar: avatarSarah
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Operations",
      company: "ScaleUp Dynamics",
      content: "The AI automation capabilities are incredible. Our team can now focus on strategic work while NeuroFlow handles the repetitive tasks flawlessly.",
      rating: 5,
      avatar: avatarMarcus
    },
    {
      name: "Emily Watson",
      role: "VP Engineering",
      company: "DataFirst Solutions",
      content: "Implementation was seamless and the ROI was immediate. The platform's intelligence adapts to our specific needs better than any solution we've tried.",
      rating: 5,
      avatar: avatarEmily
    },
    {
      name: "David Kim",
      role: "Founder & CEO",
      company: "InnovateLab",
      content: "NeuroFlow's real-time analytics have given us insights we never had before. It's like having a team of data scientists working 24/7.",
      rating: 5,
      avatar: avatarDavid
    },
    {
      name: "Lisa Thompson",
      role: "Director of AI",
      company: "FutureTech Corp",
      content: "The security features are enterprise-grade, and the performance is outstanding. Our clients trust us more knowing we use NeuroFlow.",
      rating: 5,
      avatar: avatarLisa
    },
    {
      name: "Alex Park",
      role: "Lead Developer",
      company: "CloudNative Systems",
      content: "The API is incredibly well-designed and the documentation is comprehensive. Integration took us just a few hours instead of weeks.",
      rating: 5,
      avatar: avatarAlex
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 glass-card border-white/20">
            💬 Testimonials
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Loved by Teams
            <span className="block gradient-text">Around the World</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Join thousands of companies that have transformed their workflows with NeuroFlow. 
            See what our customers have to say about their experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="glass-card p-8 group hover:scale-105 transition-all duration-300"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary/30 group-hover:text-primary/50 transition-colors" />
              </div>

              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  <p className="text-xs text-primary">{testimonial.company}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-8 glass-card p-8 rounded-2xl">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">4.9/5</div>
              <div className="text-sm text-foreground/60">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">10K+</div>
              <div className="text-sm text-foreground/60">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">99%</div>
              <div className="text-sm text-foreground/60">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;