import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, User, Menu, Heart, ChevronDown, MapPin, Phone, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

const Header = () => {
  const categories = [
    {
      name: "Sofas & Recliners",
      subcategories: ["3 Seater Sofas", "2 Seater Sofas", "Sofa Cum Beds", "Recliners", "Sectional Sofas"]
    },
    {
      name: "Living Room",
      subcategories: ["TV Units", "Coffee Tables", "Side Tables", "Bookshelves", "Display Units"]
    },
    {
      name: "Bedroom",
      subcategories: ["Beds", "Wardrobes", "Dressing Tables", "Bedside Tables", "Mattresses"]
    },
    {
      name: "Dining",
      subcategories: ["Dining Sets", "Dining Tables", "Dining Chairs", "Bar Stools", "Crockery Units"]
    },
    {
      name: "Study & Office",
      subcategories: ["Office Chairs", "Study Tables", "Computer Tables", "Bookshelves", "Filing Cabinets"]
    },
    {
      name: "Storage",
      subcategories: ["Wardrobes", "Shoe Racks", "Storage Cabinets", "Chest of Drawers", "Storage Beds"]
    },
    {
      name: "Decor",
      subcategories: ["Wall Art", "Lamps", "Mirrors", "Cushions", "Rugs & Carpets"]
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-wooden shadow-natural backdrop-blur-md">
      {/* Top Bar */}
      <div className="bg-wood-primary/90 py-2 text-xs text-cream">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-cream/90">
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3" />
                <span className="text-xs">+91 8800 123 456</span>
              </div>
              <div className="hidden sm:flex items-center space-x-1">
                <Mail className="h-3 w-3" />
                <span className="text-xs">info@asthafurniture.com</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-cream/90">
              <div className="flex items-center space-x-1">
                <MapPin className="h-3 w-3" />
                <span className="text-xs">Free Delivery Delhi NCR</span>
              </div>
              <Button variant="link" size="sm" className="text-xs p-0 h-auto text-gold-accent hover:text-cream">
                Track Order
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-wood-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-wooden bg-clip-text text-transparent">
                Astha Furniture
              </h1>
              <div className="hidden lg:block ml-3 text-xs text-wood-medium">
                Handcrafted with Love
              </div>
            </div>

            {/* Search Bar - Hidden on mobile */}
            <div className="hidden lg:flex items-center flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Search for furniture, decor and more..."
                  className="w-full pl-4 pr-12 h-10 bg-cream/50 border-wood-primary/30 focus:border-wood-primary focus:bg-cream"
                />
                <Button 
                  size="sm" 
                  className="absolute right-1 top-1 h-8 px-3 bg-wood-primary hover:bg-wood-dark"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Button variant="ghost" size="icon" className="lg:hidden text-wood-primary hover:bg-wood-light/20">
                <Search className="h-5 w-5" />
              </Button>
              
              <Button variant="ghost" size="icon" className="text-wood-primary hover:bg-wood-light/20">
                <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Wishlist</span>
              </Button>
              
              <Button variant="ghost" size="icon" className="text-wood-primary hover:bg-wood-light/20">
                <User className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Account</span>
              </Button>
              
              <Button variant="ghost" size="icon" className="relative text-wood-primary hover:bg-wood-light/20">
                <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="absolute -top-1 -right-1 bg-gold-accent text-wood-dark text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center font-semibold">
                  2
                </span>
                <span className="sr-only">Cart</span>
              </Button>
              
              <Button variant="ghost" size="icon" className="md:hidden text-wood-primary hover:bg-wood-light/20">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="border-b border-wood-primary/20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <nav className="hidden md:flex items-center h-12 space-x-1 overflow-x-auto">
            {categories.map((category) => (
              <DropdownMenu key={category.name}>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="h-full rounded-none hover:bg-wood-light/30 data-[state=open]:bg-wood-light/40 text-wood-dark hover:text-wood-primary whitespace-nowrap"
                  >
                    <span className="text-sm font-medium">{category.name}</span>
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="w-56 bg-cream border-wood-primary/20 shadow-natural"
                  align="start"
                >
                  {category.subcategories.map((subcategory) => (
                    <DropdownMenuItem 
                      key={subcategory}
                      className="hover:bg-wood-light/20 cursor-pointer text-wood-dark hover:text-wood-primary"
                    >
                      <a href="#" className="w-full text-sm">
                        {subcategory}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
            
            <div className="h-6 w-px bg-wood-primary/30 mx-2" />
            
            <Button variant="ghost" className="h-full rounded-none text-destructive hover:bg-destructive/10 font-semibold">
              🔥 Sale
            </Button>
          </nav>
          
          {/* Mobile Search Bar */}
          <div className="lg:hidden py-3">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search furniture..."
                className="w-full pl-4 pr-12 h-10 bg-cream/50 border-wood-primary/30 focus:border-wood-primary focus:bg-cream"
              />
              <Button 
                size="sm" 
                className="absolute right-1 top-1 h-8 px-3 bg-wood-primary hover:bg-wood-dark"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;