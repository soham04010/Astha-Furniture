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
    <section className="py-16 sm:py-20 bg-gradient-to-b from-cream to-wood-light/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-wood-dark">
            Explore Our Wooden Collection
          </h2>
          <p className="text-wood-medium text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover our carefully handcrafted wooden furniture designed to bring warmth and elegance to your home
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.id} 
              className="group relative overflow-hidden hover:shadow-elegant transition-all duration-500 animate-fade-in border-0 bg-gradient-card shadow-natural hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-80 sm:h-96">
                <img
                  src={category.image}
                  alt={`${category.title} - Premium Wooden Furniture Collection`}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/90 via-wood-primary/50 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                  <span className="bg-gold-accent text-wood-dark px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-glow">
                    {category.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">{category.title}</h3>
                  <p className="text-cream/95 mb-3 sm:mb-4 text-base sm:text-lg">{category.subtitle}</p>
                  <p className="text-gold-accent font-bold text-lg sm:text-xl mb-4 sm:mb-6">{category.price}</p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-gold-accent font-semibold text-lg">
                        {category.price}
                      </div>
                    </div>
                    
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="group/btn bg-cream/20 backdrop-blur-md text-white border-cream/30 hover:bg-cream hover:text-wood-dark transition-all duration-300 font-semibold w-full sm:w-auto"
                    >
                      Shop Collection
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;