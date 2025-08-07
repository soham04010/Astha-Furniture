import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-orange-300">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-sm font-medium">Premium Quality Furniture</span>
              </div>
              <h1 className="text-amber-300 md:text-6xl font-bold leading-tight">
                Transform Your
                <span className="block text-amber-300">Living Space</span>
              </h1>
              <p className="text-amber-300 md:text-xl max-w-lg">
                Discover our exquisite collection of handcrafted wooden furniture that brings 
                warmth and elegance to every corner of your home.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" className="group">
                Shop Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="bg-background/10 border-background/30 text-primary-foreground hover:bg-background/20">
                View Collection
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-accent">10K+</div>
                <div className="text-sm text-primary-foreground/80">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-accent">500+</div>
                <div className="text-sm text-primary-foreground/80">Premium Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-accent">15+</div>
                <div className="text-sm text-primary-foreground/80">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant group">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
                alt="Premium Furniture Collection - Modern Living Room Setup"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              
              {/* Floating Price Tag */}
              <div className="absolute top-6 right-6 bg-background text-foreground px-4 py-2 rounded-lg shadow-warm">
                <div className="text-sm text-muted-foreground">Starting from</div>
                <div className="text-xl font-bold text-wood-primary">₹15,999</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold-accent/20 rounded-full blur-xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-wood-light/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat bg-opacity-10" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30h30v30H30zm15 15h15v15H45z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}
        />
      </div>
    </section>
  );
};

export default Hero;