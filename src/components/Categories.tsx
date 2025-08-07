import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "Dining Sets",
      subtitle: "To Make Bond Over Meals",
      price: "Starting From ₹35,989",
      image:"https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      badge: "Popular"
    },
    {
      id: 2,
      title: "Bedroom Collection",
      subtitle: "Your Comfort Your Way",
      price: "Starting From ₹25,999",
      image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      badge: "New Arrival"
    },
    {
      id: 3,
      title: "Sofa Sets",
      subtitle: "Comfort Meets Style",
      price: "Starting From ₹18,999",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      badge: "Best Seller"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our carefully curated collections designed to transform every space in your home
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.id} 
              className="group relative overflow-hidden border-0 shadow-warm hover:shadow-elegant transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gold-accent text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {category.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-white/80 mb-3">{category.subtitle}</p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-gold-accent font-semibold text-lg">
                        {category.price}
                      </div>
                    </div>
                    
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="group/btn opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Shop Now
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* All Categories Button */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg" className="group">
            View All Categories
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;