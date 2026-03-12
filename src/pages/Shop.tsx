import ProductCard from "@/components/ProductCard";
import SEO from "@/components/SEO";
import { products } from "@/data/products";

const Shop = () => {

  return (
    <div className="min-h-screen">
      <SEO
        title="Shop Premium Clothing | LYW - Live Your Way"
        description="Browse our collection of premium everyday clothing. Quality materials, timeless designs. Free shipping on orders over $100."
        canonical="/shop"
      />
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
