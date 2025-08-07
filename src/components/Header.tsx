import { Search, ShoppingCart, User, Heart, Menu, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const categories = [
    "Sofas", "Dining", "Bedroom", "Storage", "Office", "Decor", "Lighting", "Outdoor"
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91-9314444747</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Find Store</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>Fast Delivery</span>
            <span>Track Order</span>
            <span>Help Center</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background border-b border-border shadow-warm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Main Header Row */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">
                Astha <span className="text-wood-primary">Furniture</span>
              </h1>
              <p className="text-xs text-muted-foreground ml-2 hidden sm:block">
                Furniture... handed with love
              </p>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8 hidden md:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search Products, Color & More..."
                  className="pl-10 pr-4 py-2 w-full bg-muted/50 border-border focus:bg-background transition-colors"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-gold-accent text-primary text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="border-t border-border py-3 hidden md:block">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                {categories.map((category) => (
                  <a
                    key={category}
                    href="#"
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {category}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm">
                  Offers
                </Button>
                <Button variant="secondary" size="sm">
                  Sale
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
