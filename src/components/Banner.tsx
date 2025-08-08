"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const banners = [
    {
      id: 1,
      title: "FREEDOM SALE",
      subtitle: "UP TO 70% OFF",
      description: "Transform your home with premium furniture",
      ctaText: "SHOP NOW",
      bgImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      offer: "CODE: FREEDOM70"
    },
    {
      id: 2,
      title: "NEW COLLECTION",
      subtitle: "MODERN LIVING",
      description: "Discover our latest furniture designs",
      ctaText: "EXPLORE",
      bgImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      offer: "FREE DELIVERY"
    },
    {
      id: 3,
      title: "BEDROOM SETS",
      subtitle: "UNDER ₹30,000",
      description: "Complete bedroom solutions at unbeatable prices",
      ctaText: "SHOP BEDS",
      bgImage: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      offer: "NO COST EMI"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Banner Slides */}
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <div className="relative w-full h-full">
            <img
              src={banner.bgImage}
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-xl lg:max-w-2xl space-y-4 sm:space-y-6 text-white">
                  {/* Offer Badge */}
                  <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gold-accent/90 backdrop-blur-sm rounded-full text-xs sm:text-sm font-bold text-wood-dark">
                    {banner.offer}
                  </div>
                  
                  {/* Main Content */}
                  <div className="space-y-2 sm:space-y-4">
                    <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                      {banner.title}
                    </h1>
                    <h2 className="text-xl sm:text-3xl lg:text-5xl font-semibold text-gold-accent">
                      {banner.subtitle}
                    </h2>
                    <p className="text-sm sm:text-lg lg:text-xl text-white/90 max-w-lg">
                      {banner.description}
                    </p>
                  </div>
                  
                  {/* CTA Button */}
                  <Button 
                    size="lg" 
                    className="bg-cream text-wood-dark hover:bg-white text-sm sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto font-bold shadow-glow hover:shadow-elegant transition-all duration-300"
                  >
                    {banner.ctaText}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-wood-primary/80 backdrop-blur-sm rounded-full text-cream hover:bg-wood-dark transition-all duration-300 shadow-natural"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-wood-primary/80 backdrop-blur-sm rounded-full text-cream hover:bg-wood-dark transition-all duration-300 shadow-natural"
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-gold-accent scale-110' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;