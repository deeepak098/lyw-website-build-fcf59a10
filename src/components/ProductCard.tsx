import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductCard = ({ id, name, description, price, image }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`}>
      <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300 cursor-pointer">
        <div className="aspect-[3/4] overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <CardContent className="p-4 space-y-2">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
          <p className="text-lg font-bold">${price}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
