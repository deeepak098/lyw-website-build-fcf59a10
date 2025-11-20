import { Product } from '@/types/product';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';
import product5 from '@/assets/product-5.jpg';
import product6 from '@/assets/product-6.jpg';
import product7 from '@/assets/product-7.jpg';
import product8 from '@/assets/product-8.jpg';
import product9 from '@/assets/product-9.jpg';
import product10 from '@/assets/product-10.jpg';
import product11 from '@/assets/product-11.jpg';
import product12 from '@/assets/product-12.jpg';

export const products: Product[] = [
  {
    id: 1,
    name: 'Essential Cotton Tee',
    description: 'Premium organic cotton t-shirt. Perfect for everyday comfort and style. Features a relaxed fit and soft, breathable fabric.',
    price: 29,
    image: product1,
    category: 'Tops',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
  },
  {
    id: 2,
    name: 'Urban Comfort Hoodie',
    description: 'Relaxed fit hoodie. Soft, breathable, and timeless design with a comfortable hood and kangaroo pocket.',
    price: 69,
    image: product2,
    category: 'Outerwear',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White'],
  },
  {
    id: 3,
    name: 'Minimalist Jacket',
    description: 'Versatile utility jacket with clean lines. Perfect layering piece for any season with multiple pockets.',
    price: 119,
    image: product3,
    category: 'Outerwear',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
  },
  {
    id: 4,
    name: 'Wide Leg Trousers',
    description: 'Elegant wide-leg trousers. Comfortable fit with a sophisticated silhouette. Perfect for both casual and formal occasions.',
    price: 89,
    image: product4,
    category: 'Bottoms',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Black'],
  },
  {
    id: 5,
    name: 'Classic White Sneakers',
    description: 'Minimalist sneakers with premium leather. Versatile and comfortable for all-day wear with cushioned insoles.',
    price: 79,
    image: product5,
    category: 'Footwear',
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['White', 'Black'],
  },
  {
    id: 6,
    name: 'Cozy Knit Sweater',
    description: 'Soft knit sweater. Perfect layering piece for cooler days with a classic crew neck design.',
    price: 95,
    image: product6,
    category: 'Tops',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
  },
  {
    id: 7,
    name: 'Bomber Jacket',
    description: 'Sleek bomber jacket with modern details. Classic silhouette meets contemporary design.',
    price: 139,
    image: product7,
    category: 'Outerwear',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
  },
  {
    id: 8,
    name: 'Classic Button-Up Shirt',
    description: 'Timeless button-up shirt in premium cotton. Versatile piece for both casual and dressy occasions.',
    price: 59,
    image: product8,
    category: 'Tops',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Black'],
  },
  {
    id: 9,
    name: 'Slim Fit Jeans',
    description: 'Modern slim-fit jeans with stretch comfort. Perfect everyday denim with a contemporary cut.',
    price: 89,
    image: product9,
    category: 'Bottoms',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Black'],
  },
  {
    id: 10,
    name: 'Minimalist Dress',
    description: 'Elegant minimalist dress with clean lines. Sophisticated silhouette perfect for any occasion.',
    price: 129,
    image: product10,
    category: 'Dresses',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black'],
  },
  {
    id: 11,
    name: 'Turtleneck Sweater',
    description: 'Classic turtleneck in soft knit fabric. Timeless design for layering or wearing alone.',
    price: 79,
    image: product11,
    category: 'Tops',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
  },
  {
    id: 12,
    name: 'Tailored Blazer',
    description: 'Sophisticated tailored blazer with impeccable fit. Elevate any outfit with this wardrobe essential.',
    price: 179,
    image: product12,
    category: 'Outerwear',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Black'],
  },
];
