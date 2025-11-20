import ProductCard from "@/components/ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Essential Cotton Tee",
      description: "Premium organic cotton t-shirt in soft beige. Perfect for everyday comfort and style.",
      price: 29,
      image: product1,
    },
    {
      id: 2,
      name: "Urban Comfort Hoodie",
      description: "Relaxed fit hoodie in charcoal grey. Soft, breathable, and timeless design.",
      price: 69,
      image: product2,
    },
    {
      id: 3,
      name: "Minimalist Jacket",
      description: "Muted olive utility jacket with clean lines. Versatile layering piece for any season.",
      price: 119,
      image: product3,
    },
    {
      id: 4,
      name: "Wide Leg Trousers",
      description: "Elegant beige wide-leg trousers. Comfortable fit with a sophisticated silhouette.",
      price: 89,
      image: product4,
    },
    {
      id: 5,
      name: "Classic White Sneakers",
      description: "Minimalist white sneakers with premium leather. Versatile and comfortable.",
      price: 79,
      image: product5,
    },
    {
      id: 6,
      name: "Cozy Knit Sweater",
      description: "Soft charcoal grey knit sweater. Perfect layering piece for cooler days.",
      price: 95,
      image: product6,
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Collection</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of timeless essentials designed for modern living
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
