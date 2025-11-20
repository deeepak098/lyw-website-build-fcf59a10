import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const Blog = () => {
  const blogPost = {
    id: 1,
    title: "5 Everyday Wardrobe Essentials for 2025",
    excerpt: "Discover the timeless pieces every modern wardrobe needs this year.",
    date: "January 15, 2025",
    readTime: "5 min read",
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">LYW Blog</h1>
          <p className="text-lg text-muted-foreground">
            Style inspiration, tips, and stories
          </p>
        </div>

        {/* Featured Post */}
        <Card className="mb-8 overflow-hidden hover:shadow-lg transition-shadow">
          <CardHeader className="bg-secondary/30 pb-4">
            <div className="flex items-center text-sm text-muted-foreground space-x-4 mb-3">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {blogPost.date}
              </div>
              <span>•</span>
              <span>{blogPost.readTime}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">
              {blogPost.title}
            </h2>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-muted-foreground mb-6">
              {blogPost.excerpt}
            </p>
            <Link
              to={`/blog/${blogPost.id}`}
              className="text-accent hover:underline font-medium"
            >
              Read full article →
            </Link>
          </CardContent>
        </Card>

        {/* Blog Post Content */}
        <article className="prose prose-lg max-w-none">
          <div className="bg-card border border-border rounded-lg p-8 space-y-6">
            <h2 className="text-3xl font-bold mb-6">
              5 Everyday Wardrobe Essentials for 2025
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Building a versatile wardrobe doesn't require hundreds of pieces. 
              In fact, focusing on quality essentials that work seamlessly together 
              is the key to effortless style. Here are five timeless pieces every 
              modern wardrobe needs in 2025.
            </p>

            <section className="space-y-4">
              <h3 className="text-2xl font-semibold mt-8">1. The Perfect White Tee</h3>
              <p className="text-muted-foreground leading-relaxed">
                A premium white t-shirt is the foundation of any great wardrobe. 
                Look for organic cotton with a comfortable fit that holds its shape 
                after multiple washes. It's versatile enough to pair with everything 
                from jeans to tailored trousers.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-semibold mt-8">2. Classic Neutral Trousers</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether it's beige, charcoal, or olive, a well-fitted pair of neutral 
                trousers elevates any outfit. Wide-leg styles are particularly popular 
                this year, offering both comfort and sophistication.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-semibold mt-8">3. Versatile Layering Piece</h3>
              <p className="text-muted-foreground leading-relaxed">
                A lightweight jacket or cardigan in a neutral color is essential for 
                transitional weather. Look for pieces that can dress up or down, 
                working equally well with casual and formal outfits.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-semibold mt-8">4. Minimalist Sneakers</h3>
              <p className="text-muted-foreground leading-relaxed">
                Clean, white sneakers have become a wardrobe staple for good reason. 
                They're comfortable for all-day wear and pair perfectly with virtually 
                any outfit, from casual to smart-casual.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-semibold mt-8">5. Quality Knit Sweater</h3>
              <p className="text-muted-foreground leading-relaxed">
                A well-made knit sweater in a neutral tone is perfect for layering 
                or wearing on its own. Choose natural fibers like merino wool or 
                cotton blends for breathability and longevity.
              </p>
            </section>

            <section className="mt-12 p-6 bg-accent/10 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">The LYW Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed">
                At LYW, we believe in quality over quantity. Each piece in our 
                collection is designed to be a lasting essential in your wardrobe, 
                allowing you to mix and match effortlessly while staying true to 
                your personal style. Because when you have the right basics, 
                you can truly live your way.
              </p>
            </section>
          </div>
        </article>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-secondary/30 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">
            Ready to build your essential wardrobe?
          </h3>
          <Link
            to="/shop"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium"
          >
            Shop Our Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
