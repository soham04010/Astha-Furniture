import { Truck, Shield, Headphones, Star, CreditCard, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const Benefits = () => {
  const benefits = [
    {
      icon: Truck,
      title: "FREE Delivery & Installation",
      description: "Across all major cities",
      color: "text-wood-primary"
    },
    {
      icon: Shield,
      title: "NO COST EMI",
      description: "On leading banks",
      color: "text-gold-accent"
    },
    {
      icon: Users,
      title: "100+ Experience Store",
      description: "Get Extra UPTO 10% OFF",
      color: "text-wood-primary"
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Handcrafted with love",
      color: "text-gold-accent"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Expert customer service",
      color: "text-wood-primary"
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Multiple payment options",
      color: "text-gold-accent"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Astha Furniture?
          </h2>
           <p className="text-muted-foreground text-lg">
            We deliver more than just furniture - we deliver experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-warm transition-all duration-300 animate-fade-in border-0 bg-background/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-warm mb-4 ${benefit.color}`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;