import Header from "../components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ProductGrid from "@/components/ProductGrid";
import Benefits from "@/components/Benefits";

import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Categories />
        <ProductGrid />
        <Benefits />
      </main>
      <Footer />
    </div>
  );
};

export default Index;