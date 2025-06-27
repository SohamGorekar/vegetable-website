
import React from 'react';
import { CheckCircle, MapPin, Clock, CreditCard, Phone, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
  const orderDetails = {
    orderId: "VF2024001234",
    orderDate: new Date().toLocaleDateString(),
    deliveryDate: new Date(Date.now() + 86400000).toLocaleDateString(),
    deliverySlot: "12:00 PM - 4:00 PM",
    paymentMethod: "UPI Payment",
    paymentStatus: "Paid",
    address: "123 Green Street, Eco Colony, Mumbai - 400001",
    phone: "+91 9876543210",
    items: [
      { id: 1, name: "Fresh Organic Spinach", price: 25, quantity: 2, unit: "250g" },
      { id: 2, name: "Farm Fresh Tomatoes", price: 40, quantity: 1, unit: "1kg" },
      { id: 3, name: "Organic Carrots", price: 35, quantity: 3, unit: "500g" }
    ],
    subtotal: 185,
    deliveryFee: 0,
    total: 185
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Success Message */}
        <div className="text-center mb-8">
          <div className="mb-6">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
            <p className="text-lg text-gray-600">
              Thank you for your order. We're preparing your fresh vegetables.
            </p>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 inline-block">
            <p className="text-green-800">
              <strong>Order ID:</strong> {orderDetails.orderId}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Details */}
          <div className="space-y-6">
            {/* Delivery Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span>Delivery Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Delivery Address</p>
                    <p className="text-gray-600">{orderDetails.address}</p>
                  </div>
                  <div>
                    <p className="font-medium">Contact Number</p>
                    <p className="text-gray-600">{orderDetails.phone}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-green-600">
                    <Clock className="w-4 h-4" />
                    <span>Expected delivery: {orderDetails.deliveryDate}, {orderDetails.deliverySlot}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="w-5 h-5 text-green-600" />
                  <span>Payment Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Payment Method:</span>
                    <span className="font-medium">{orderDetails.paymentMethod}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment Status:</span>
                    <span className="text-green-600 font-medium">{orderDetails.paymentStatus}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Tracking */}
            <Card>
              <CardHeader>
                <CardTitle>Order Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="font-medium">Order Confirmed</p>
                      <p className="text-sm text-gray-600">Your order has been placed successfully</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="font-medium text-gray-500">Preparing Order</p>
                      <p className="text-sm text-gray-500">We're selecting the freshest vegetables for you</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="font-medium text-gray-500">Out for Delivery</p>
                      <p className="text-sm text-gray-500">Your order is on the way</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="font-medium text-gray-500">Delivered</p>
                      <p className="text-sm text-gray-500">Order has been delivered</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Items */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  {orderDetails.items.map(item => (
                    <div key={item.id} className="flex items-center space-x-4 pb-4 border-b last:border-b-0">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🥬</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-gray-600 text-sm">Quantity: {item.quantity} {item.unit}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">₹{item.price * item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>₹{orderDetails.subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee:</span>
                    <span className="text-green-600">FREE</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total Paid:</span>
                    <span>₹{orderDetails.total}</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <Button className="w-full" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download Invoice
                  </Button>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link to="/account/orders">
                      Track Your Order
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Need Help?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Contact our customer support team for any queries
                  </p>
                  <Button variant="outline" size="sm">
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Continue Shopping */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold mb-4">Thank you for choosing VeggieFresh!</h3>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link to="/products">
              Continue Shopping
            </Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderConfirmation;
