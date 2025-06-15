import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/stores/cartStore";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD'
    }).format(price);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <div className="container mx-auto px-4 py-24">
          <div className="text-center max-w-md mx-auto">
            <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any programs to your cart yet.
            </p>
            <Link to="/programs">
              <Button className="bg-[#C9F73A] hover:bg-[#B8E629] text-black">
                Browse Programs
              </Button>
            </Link>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Your Cart</h1>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={item.id} className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <Badge variant="outline">{item.category}</Badge>
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        {item.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {formatPrice(item.originalPrice)}
                          </span>
                        )}
                        <span className="text-xl font-bold text-[#C9F73A]">
                          {formatPrice(item.price)}
                        </span>
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-12 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-lg font-bold mb-2">
                        {formatPrice(item.price * item.quantity)}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
              
              <div className="flex justify-between items-center pt-4">
                <Button variant="outline" onClick={clearCart}>
                  Clear Cart
                </Button>
                <Link to="/programs">
                  <Button variant="ghost">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span>{item.title} × {item.quantity}</span>
                        <span>{formatPrice(item.price * item.quantity)}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-[#C9F73A]">{formatPrice(getTotalPrice())}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-[#C9F73A] hover:bg-[#B8E629] text-black" size="lg">
                    Proceed to Checkout
                  </Button>
                  
                  <div className="text-xs text-muted-foreground text-center">
                    Secure checkout with SSL encryption
                  </div>
                </CardContent>
              </Card>
              
              {/* Benefits */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">What You'll Get</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#C9F73A] rounded-full mr-2"></span>
                      IFPA Accredited Certification
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#C9F73A] rounded-full mr-2"></span>
                      Lifetime Access to Materials
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#C9F73A] rounded-full mr-2"></span>
                      Global Recognition
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#C9F73A] rounded-full mr-2"></span>
                      Career Support
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Cart;