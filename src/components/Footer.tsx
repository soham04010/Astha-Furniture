import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Phone, 
  Mail, 
  MapPin,
  Heart
} from "lucide-react";

const Footer = () => {
  const companyLinks = [
    "About Us", "Our Story", "Careers", "Press", "Investors", "Contact Us"
  ];

  const customerLinks = [
    "Track Order", "Shipping Info", "Returns", "Size Guide", "Care Instructions", "FAQ"
  ];

  const categoriesLinks = [
    "Sofas", "Dining Sets", "Bedroom", "Storage", "Office Furniture", "Decor"
  ];

  const policiesLinks = [
    "Privacy Policy", "Terms of Service", "Shipping Policy", "Return Policy"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="bg-wood-primary py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Astha Furniture</h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, design tips, and the latest furniture trends
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email address"
              className="flex-1 bg-background/10 border-background/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button variant="default" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gold-accent mb-2">
                Astha Furniture
              </h2>
              <p className="text-sm text-primary-foreground/80">
                Furniture... handed with love
              </p>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              For over 15 years, we've been crafting beautiful, sustainable furniture that transforms 
              houses into homes. Every piece is made with love and attention to detail.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold-accent" />
                <span>+91-9314444747</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold-accent" />
                <span>hello@asthafurniture.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gold-accent" />
                <span>New Delhi, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-gold-accent">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-gold-accent">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-gold-accent">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-gold-accent">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-gold-accent mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-gold-accent transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold text-gold-accent mb-4">Customer Service</h4>
            <ul className="space-y-2">
              {customerLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-gold-accent transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold text-gold-accent mb-4">Categories</h4>
            <ul className="space-y-2">
              {categoriesLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-gold-accent transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/20" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-sm text-primary-foreground/80">
            <span>© 2024 Astha Furniture. All rights reserved.</span>
            <span>|</span>
            <div className="flex items-center gap-4">
              {policiesLinks.map((link, index) => (
                <span key={link}>
                  <a href="#" className="hover:text-gold-accent transition-colors">
                    {link}
                  </a>
                  {index < policiesLinks.length - 1 && <span className="ml-4">|</span>}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-gold-accent fill-current" />
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
