import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import heroImage from "@/assets/hero-image.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Essential Cotton Tee",
      description: "Premium organic cotton t-shirt in soft beige. Perfect for everyday comfort.",
      price: 29,
      image: product1,
    },
    {
      id: 2,
      name: "Urban Comfort Hoodie",
      description: "Relaxed fit hoodie in charcoal grey. Soft, breathable, timeless.",
      price: 69,
      image: product2,
    },
    {
      id: 3,
      name: "Minimalist Jacket",
      description: "Muted olive utility jacket. Versatile layering piece for any season.",
      price: 119,
      image: product3,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-foreground/20" />
        </div>
        
        <div className="relative z-10 text-center space-y-6 px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Live Your Way
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Premium everyday clothing for modern living
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/shop">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
                Shop Now
              </Button>
            </Link>
            <Link to="/shop">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 px-8 py-6 text-lg"
              >
                Explore Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Collection
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our carefully curated selection of everyday essentials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop">
            <Button size="lg" variant="outline">
              View All Products
            </Button>
          </Link>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Quality First</h3>
              <p className="text-muted-foreground">
                Premium materials and craftsmanship in every piece
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Timeless Design</h3>
              <p className="text-muted-foreground">
                Classic styles that transcend seasonal trends
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Everyday Comfort</h3>
              <p className="text-muted-foreground">
                Designed for real life, made for your way
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
