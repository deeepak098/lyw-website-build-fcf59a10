const About = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About LYW</h1>
          <p className="text-xl text-muted-foreground">
            Live Your Way
          </p>
        </div>

        {/* Brand Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              LYW was born from a simple belief: clothing should empower you to live authentically, 
              without compromise. In a world of fast fashion and fleeting trends, we saw a need for 
              something different—timeless pieces that honor both quality and individuality.
            </p>
            <p>
              We create premium everyday clothing for young adults who value simplicity, comfort, 
              and style. Each piece is thoughtfully designed to be versatile, durable, and effortlessly 
              elegant, allowing you to express yourself naturally.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="mb-16 bg-secondary/30 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            To provide accessible, premium-quality clothing that empowers individuals to live 
            confidently and authentically. We believe that great style shouldn't come at the 
            expense of comfort, quality, or the planet.
          </p>
        </section>

        {/* Vision */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Our Vision</h2>
          <p className="text-muted-foreground leading-relaxed">
            We envision a world where clothing is more than just fabric—it's a reflection of 
            who you are and how you choose to live. Through sustainable practices and timeless 
            design, we aim to redefine modern fashion for conscious consumers.
          </p>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Quality</h3>
              <p className="text-muted-foreground">
                We use only premium materials and work with skilled artisans to ensure every 
                piece meets our high standards.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Sustainability</h3>
              <p className="text-muted-foreground">
                From sourcing to production, we're committed to minimizing our environmental 
                impact at every step.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Timelessness</h3>
              <p className="text-muted-foreground">
                We design pieces that transcend trends, ensuring they remain relevant and 
                stylish for years to come.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Authenticity</h3>
              <p className="text-muted-foreground">
                We believe in honest, transparent business practices and staying true to 
                our core principles.
              </p>
            </div>
          </div>
        </section>

        {/* What LYW Means */}
        <section className="bg-accent/10 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-6">What Does "Live Your Way" Mean?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            "Live Your Way" is more than a tagline—it's a philosophy. It's about embracing 
            your unique journey, making conscious choices, and expressing yourself authentically 
            through what you wear and how you live.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether you're building a career, exploring new passions, or simply enjoying everyday 
            moments, LYW is here to support you with clothing that adapts to your lifestyle, 
            not the other way around.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
