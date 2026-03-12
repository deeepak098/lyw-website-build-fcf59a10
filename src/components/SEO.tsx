import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
  image?: string;
  noindex?: boolean;
}

const SEO = ({
  title = "LYW - Live Your Way | Premium Everyday Clothing",
  description = "LYW offers premium everyday clothing for modern living. Discover timeless, minimal designs in quality materials. Shop now.",
  canonical,
  type = "website",
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
  noindex = false,
}: SEOProps) => {
  const siteUrl = "https://lyw.lovable.app";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : undefined;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
