import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Trash2, ShoppingBag } from 'lucide-react';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-6">
          <ShoppingBag className="w-24 h-24 mx-auto text-muted-foreground" />
          <h1 className="text-3xl font-bold">Your cart is empty</h1>
          <p className="text-muted-foreground">Add some products to get started</p>
          <Link to="/shop">
            <Button size="lg">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                className="flex gap-6 p-6 border border-border"
              >
                <div className="w-32 h-40 flex-shrink-0 bg-muted overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-grow">
                  <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Size: {item.selectedSize} | Color: {item.selectedColor}
                  </p>
                  <p className="font-bold mb-4">${item.price}</p>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-border">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.selectedSize,
                            item.selectedColor,
                            item.quantity - 1
                          )
                        }
                        className="px-4 py-2 hover:bg-muted transition-colors"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 border-x border-border">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.selectedSize,
                            item.selectedColor,
                            item.quantity + 1
                          )
                        }
                        className="px-4 py-2 hover:bg-muted transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        removeFromCart(item.id, item.selectedSize, item.selectedColor)
                      }
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-bold text-lg">${item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="border border-border p-6 space-y-6 sticky top-24">
              <h2 className="text-2xl font-bold">Order Summary</h2>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">${getCartTotal()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-semibold">Free</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between text-lg">
                  <span className="font-bold">Total</span>
                  <span className="font-bold">${getCartTotal()}</span>
                </div>
              </div>

              <Link to="/checkout" className="block">
                <Button size="lg" className="w-full">
                  Proceed to Checkout
                </Button>
              </Link>

              <Link to="/shop" className="block">
                <Button variant="outline" size="lg" className="w-full">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
