"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";
import { useState } from "react";

const ProductGrid = () => {
  const [likedProducts, setLikedProducts] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: "Royal Oak Dining Set",
      originalPrice: 45999,
      discountedPrice: 35999,
      discount: 22,
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
      badge: "Best Seller",
      deliveryTime: "2 Days"
    },
    {
      id: 2,
      name: "Premium Sofa Collection",
      originalPrice: 65999,
      discountedPrice: 48999,
      discount: 26,
      rating: 4.9,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
      badge: "Premium",
      deliveryTime: "Ships in 2 Days"
    },
    {
      id: 3,
      name: "Elegant Bedroom Suite",
      originalPrice: 55999,
      discountedPrice: 42999,
      discount: 23,
      rating: 4.7,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=400&fit=crop",
      badge: "New",
      deliveryTime: "Ships in 2 Days"
    },
    {
      id: 4,
      name: "Modern Coffee Table",
      originalPrice: 18999,
      discountedPrice: 14999,
      discount: 21,
      rating: 4.6,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=400&fit=crop",
      badge: "Sale",
      deliveryTime: "Ships in 2 Days"
    },
    {
      id: 5,
      name: "Executive Office Desk",
      originalPrice: 32999,
      discountedPrice: 24999,
      discount: 24,
      rating: 4.8,
      reviews: 145,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      badge: "Popular",
      deliveryTime: "Ships in 2 Days"
    },
    {
      id: 6,
      name: "Luxury Wardrobe",
      originalPrice: 75999,
      discountedPrice: 59999,
      discount: 21,
      rating: 4.9,
      reviews: 112,
      image: "/api/placeholder/300/300",
      badge: "Premium",
      deliveryTime: "Ships in 2 Days"
    }
  ];

  const toggleLike = (productId: number) => {
    setLikedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Top Picks For You
          </h2>
          <p className="text-muted-foreground text-lg">
            Handpicked furniture pieces that combine style, comfort, and quality
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group relative overflow-hidden border-0 shadow-warm hover:shadow-elegant transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                {/* Product Image */}
                <div className="relative overflow-hidden bg-muted/20">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Badge */}
                  <Badge 
                    className={`absolute top-3 left-3 ${
                      product.badge === 'Premium' ? 'bg-gold-accent text-primary' :
                      product.badge === 'Sale' ? 'bg-destructive text-destructive-foreground' :
                      product.badge === 'New' ? 'bg-wood-primary text-primary-foreground' :
                      'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    {product.badge}
                  </Badge>

                  {/* Discount Badge */}
                  <Badge className="absolute top-3 right-3 bg-gold-accent text-primary">
                    {product.discount}% OFF
                  </Badge>

                  {/* Action Buttons */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <Button
                        variant="secondary"
                        size="icon"
                        className="bg-background/90 hover:bg-background shadow-warm"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="secondary"
                        size="icon"
                        className={`shadow-warm transition-colors ${
                          likedProducts.includes(product.id) 
                            ? 'bg-destructive text-destructive-foreground' 
                            : 'bg-background/90 hover:bg-background'
                        }`}
                        onClick={() => toggleLike(product.id)}
                      >
                        <Heart 
                          className={`h-4 w-4 ${
                            likedProducts.includes(product.id) ? 'fill-current' : ''
                          }`} 
                        />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-gold-accent fill-current" />
                      <span className="text-sm font-medium text-foreground">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-wood-primary">
                      ₹{product.discountedPrice.toLocaleString()}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  </div>

                  {/* Delivery Info */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-green-600 font-medium">
                      {product.deliveryTime}
                    </span>
                    <span className="text-sm text-muted-foreground">FREE Delivery</span>
                  </div>

                  {/* Add to Cart Button */}
                  <div className="flex gap-2">
                    <Button 
                      variant="wood" 
                      className="flex-1 group/btn"
                      onClick={() => window.location.href = `/product/${product.id}`}
                    >
                      View Details
                    </Button>
                    <Button 
                      variant="category" 
                      size="icon"
                      className="shadow-warm"
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;