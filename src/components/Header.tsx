import { Button } from "@/components/ui/button";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  Heart,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Input } from "@/components/ui/input";

const Header = () => {
  const categories = [
    { name: "Sofas", image: "/icons/sofa.jpg" },
    { name: "Beds", image: "/icons/bed.jpg" },
    { name: "Dining", image: "/icons/dt.png" },
    { name: "Storage", image: "/icons/storage.png" },
    { name: "Decor", image: "/icons/decor.png" },
    { name: "Kitchen", image: "/icons/kitchen.jpg" },
    { name: "Outdoor", image: "/icons/outdoor.png" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Info Bar */}
      <div className="bg-wood-primary text-cream text-xs py-2">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4 gap-2">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="h-3 w-3" />
              <span>+91 8800 123 456</span>
            </div>
            <div className="hidden sm:flex items-center gap-1">
              <Mail className="h-3 w-3" />
              <span>info@asthafurniture.com</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>Free Delivery Delhi NCR</span>
            </div>
            <Button variant="link" size="sm" className="p-0 h-auto text-gold-accent hover:text-cream">
              Track Order
            </Button>
          </div>
        </div>
      </div>

      {/* Main Header Row */}
      <div className="container mx-auto px-4 border-b border-gray-200">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <img src="/astha logo1.png" alt="Astha Furniture" className="h-10 w-auto" /> 
            <div className="hidden sm:block text-xs text-gray-500">
            Astha Furniture
            </div>
          </div>

          {/* Desktop Search */}
          <div className="hidden lg:flex flex-1 max-w-2xl">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search for furniture, decor and more..."
                className="w-full pl-4 pr-12 h-10 bg-gray-50 border-gray-300 focus:border-wood-primary focus:ring-wood-primary"
              />
              <Button
                size="sm"
                className="absolute right-1 top-1 h-8 px-3 bg-wood-primary hover:bg-wood-dark"
              >
                <Search className="h-4 w-4 text-white" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mobile Search */}
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Search className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-gold-accent text-wood-dark text-xs rounded-full h-4 w-4 flex items-center justify-center font-semibold">
                2
              </span>
            </Button>

            {/* Mobile Menu */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Categories Row */}
      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide py-3">
            {categories.map((cat) => (
              <a
                key={cat.name}
                href="#"
                className="flex flex-col items-center min-w-[64px] group"
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-gray-200 group-hover:border-wood-primary transition-all">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="mt-1 text-xs font-medium text-gray-700 group-hover:text-wood-primary">
                  {cat.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
