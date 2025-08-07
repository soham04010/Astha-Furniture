import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Heart, ShoppingCart, Star, Truck, Shield, RotateCcw, ArrowLeft, Plus, Minus } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Product = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Sample product data - in real app, fetch based on ID
  const product = {
    id: 1,
    name: "Royal Oak Dining Set",
    originalPrice: 45999,
    discountedPrice: 35999,
    discount: 22,
    rating: 4.8,
    reviews: 156,
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571898670239-5c4c7f87ae7c?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop"
    ],
    badge: "Best Seller",
    deliveryTime: "2 Days",
    description: "Crafted from premium solid oak wood, this dining set combines elegance with durability. Perfect for family gatherings and dinner parties.",
    features: [
      "Premium solid oak construction",
      "Seats 6 people comfortably",
      "Easy assembly with included tools",
      "Scratch and stain resistant finish",
      "10-year warranty included"
    ],
    specifications: {
      dimensions: "180cm x 90cm x 75cm",
      material: "Solid Oak Wood",
      weight: "85 kg",
      color: "Natural Oak",
      style: "Contemporary"
    },
    inStock: true,
    stockCount: 15
  };

  const relatedProducts = [
    {
      id: 7,
      name: "Oak Dining Chairs",
      price: 12999,
      image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=300&h=300&fit=crop"
    },
    {
      id: 8,
      name: "Wooden Sideboard",
      price: 28999,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop"
    },
    {
      id: 9,
      name: "Table Runner Set",
      price: 2499,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>

        {/* Product Details */}
        <div className="max-w-7xl mx-auto px-4 pb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg bg-muted/20">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground">
                  {product.discount}% OFF
                </Badge>
                <Button
                  variant="secondary"
                  size="icon"
                  className={`absolute top-4 right-4 shadow-warm transition-colors ${
                    isLiked ? 'bg-destructive text-destructive-foreground' : ''
                  }`}
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                </Button>
              </div>
              
              {/* Thumbnail Images */}
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-primary' : 'border-muted'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-gold-accent text-primary">{product.badge}</Badge>
                  {product.inStock && (
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      In Stock ({product.stockCount} left)
                    </Badge>
                  )}
                </div>
                <h1 className="text-3xl font-bold text-foreground mb-4">{product.name}</h1>
                
                {/* Rating */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) 
                            ? 'text-gold-accent fill-current' 
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                    <span className="text-sm font-medium text-foreground ml-1">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-bold text-wood-primary">
                    ₹{product.discountedPrice.toLocaleString()}
                  </span>
                  <span className="text-xl text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                  <Badge variant="destructive">Save ₹{(product.originalPrice - product.discountedPrice).toLocaleString()}</Badge>
                </div>
              </div>

              <Separator />

              {/* Description */}
              <div>
                <h3 className="font-semibold text-foreground mb-2">Description</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>

              {/* Features */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="font-medium text-foreground">Quantity:</span>
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button variant="wood" size="lg" className="w-full">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart - ₹{(product.discountedPrice * quantity).toLocaleString()}
                </Button>
                <Button variant="category" size="lg" className="w-full">
                  Buy Now
                </Button>
              </div>

              {/* Delivery Info */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="flex flex-col items-center text-center p-3 bg-muted/50 rounded-lg">
                  <Truck className="h-6 w-6 text-primary mb-2" />
                  <span className="text-sm font-medium">Free Delivery</span>
                  <span className="text-xs text-muted-foreground">{product.deliveryTime}</span>
                </div>
                <div className="flex flex-col items-center text-center p-3 bg-muted/50 rounded-lg">
                  <Shield className="h-6 w-6 text-primary mb-2" />
                  <span className="text-sm font-medium">10 Year Warranty</span>
                  <span className="text-xs text-muted-foreground">Quality Assured</span>
                </div>
                <div className="flex flex-col items-center text-center p-3 bg-muted/50 rounded-lg">
                  <RotateCcw className="h-6 w-6 text-primary mb-2" />
                  <span className="text-sm font-medium">Easy Returns</span>
                  <span className="text-xs text-muted-foreground">30 Days</span>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-6">Specifications</h3>
            <Card className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="font-medium text-foreground capitalize">{key}:</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-6">You May Also Like</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((item) => (
                <Card key={item.id} className="group overflow-hidden border-0 shadow-warm hover:shadow-elegant transition-all duration-500">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">{item.name}</h4>
                    <span className="text-xl font-bold text-wood-primary">
                      ₹{item.price.toLocaleString()}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Product;