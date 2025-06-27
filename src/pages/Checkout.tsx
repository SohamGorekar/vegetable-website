
import React, { useState } from 'react';
import { MapPin, Clock, CreditCard, Truck, Plus, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const cartItems = [
    { id: 1, name: "Fresh Organic Spinach", price: 25, quantity: 2, unit: "250g" },
    { id: 2, name: "Farm Fresh Tomatoes", price: 40, quantity: 1, unit: "1kg" },
    { id: 3, name: "Organic Carrots", price: 35, quantity: 3, unit: "500g" }
  ];

  const savedAddresses = [
    {
      id: 1,
      name: "Home",
      address: "123 Green Street, Eco Colony, Mumbai - 400001",
      phone: "+91 9876543210",
      landmark: "Near Green Park"
    },
    {
      id: 2,
      name: "Office",
      address: "456 Business Tower, Corporate Zone, Mumbai - 400002",
      phone: "+91 9876543210",
      landmark: "Opposite Metro Station"
    }
  ];

  const deliverySlots = [
    { id: 'morning', time: '8:00 AM - 12:00 PM', available: true, fee: 0 },
    { id: 'afternoon', time: '12:00 PM - 4:00 PM', available: true, fee: 0 },
    { id: 'evening', time: '4:00 PM - 8:00 PM', available: false, fee: 0 },
    { id: 'express', time: 'Express (Within 2 hours)', available: true, fee: 25 }
  ];

  const paymentMethods = [
    { id: 'upi', name: 'UPI Payment', desc: 'Pay via UPI apps', icon: '📱' },
    { id: 'card', name: 'Credit/Debit Card', desc: 'Visa, Mastercard, RuPay', icon: '💳' },
    { id: 'wallet', name: 'Digital Wallet', desc: 'PayTM, PhonePe, etc.', icon: '👛' },
    { id: 'cod', name: 'Cash on Delivery', desc: 'Pay when you receive', icon: '💵' }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = selectedSlot === 'express' ? 25 : 0;
  const total = subtotal + deliveryFee;

  const steps = [
    { id: 1, name: 'Delivery Address', icon: MapPin },
    { id: 2, name: 'Delivery Slot', icon: Clock },
    { id: 3, name: 'Payment', icon: CreditCard },
    { id: 4, name: 'Review Order', icon: Truck }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Checkout</h1>
          
          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    currentStep >= step.id ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`ml-2 hidden sm:block ${
                    currentStep >= step.id ? 'text-green-600 font-medium' : 'text-gray-600'
                  }`}>
                    {step.name}
                  </span>
                  
                  {index < steps.length - 1 && (
                    <div className={`hidden sm:block w-16 h-0.5 ml-4 ${
                      currentStep > step.id ? 'bg-green-600' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Step 1: Delivery Address */}
            {currentStep === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>Delivery Address</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    {savedAddresses.map((address, index) => (
                      <div
                        key={address.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          selectedAddress === index
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-200 hover:border-green-300'
                        }`}
                        onClick={() => setSelectedAddress(index)}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold flex items-center space-x-2">
                              <span>{address.name}</span>
                              {selectedAddress === index && (
                                <span className="text-green-600 text-sm">✓</span>
                              )}
                            </h3>
                            <p className="text-gray-600 mt-1">{address.address}</p>
                            <p className="text-gray-500 text-sm mt-1">
                              Phone: {address.phone} • {address.landmark}
                            </p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full mb-6">
                    <Plus className="w-4 h-4 mr-2" />
                    Add New Address
                  </Button>

                  <Button onClick={() => setCurrentStep(2)} className="w-full bg-green-600 hover:bg-green-700">
                    Continue to Delivery Slot
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Delivery Slot */}
            {currentStep === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-5 h-5" />
                    <span>Choose Delivery Slot</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h3 className="font-medium mb-4">Today, {new Date().toLocaleDateString()}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {deliverySlots.map(slot => (
                        <div
                          key={slot.id}
                          className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                            !slot.available
                              ? 'border-gray-200 bg-gray-50 cursor-not-allowed'
                              : selectedSlot === slot.id
                              ? 'border-green-500 bg-green-50'
                              : 'border-gray-200 hover:border-green-300'
                          }`}
                          onClick={() => slot.available && setSelectedSlot(slot.id)}
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <p className={`font-medium ${!slot.available ? 'text-gray-400' : ''}`}>
                                {slot.time}
                              </p>
                              {slot.fee > 0 && (
                                <p className="text-sm text-orange-600">+₹{slot.fee} express fee</p>
                              )}
                              {!slot.available && (
                                <p className="text-sm text-red-500">Not Available</p>
                              )}
                            </div>
                            {selectedSlot === slot.id && slot.available && (
                              <span className="text-green-600">✓</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button variant="outline" onClick={() => setCurrentStep(1)}>
                      Back
                    </Button>
                    <Button 
                      onClick={() => setCurrentStep(3)} 
                      disabled={!selectedSlot}
                      className="flex-1 bg-green-600 hover:bg-green-700"
                    >
                      Continue to Payment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Payment */}
            {currentStep === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="w-5 h-5" />
                    <span>Payment Method</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    {paymentMethods.map(method => (
                      <div
                        key={method.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          paymentMethod === method.id
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-200 hover:border-green-300'
                        }`}
                        onClick={() => setPaymentMethod(method.id)}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{method.icon}</span>
                          <div>
                            <h3 className="font-medium">{method.name}</h3>
                            <p className="text-gray-600 text-sm">{method.desc}</p>
                          </div>
                          {paymentMethod === method.id && (
                            <span className="text-green-600 ml-auto">✓</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <Button variant="outline" onClick={() => setCurrentStep(2)}>
                      Back
                    </Button>
                    <Button 
                      onClick={() => setCurrentStep(4)} 
                      disabled={!paymentMethod}
                      className="flex-1 bg-green-600 hover:bg-green-700"
                    >
                      Review Order
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 4: Review Order */}
            {currentStep === 4 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Truck className="w-5 h-5" />
                    <span>Review Your Order</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Delivery Details */}
                    <div>
                      <h3 className="font-medium mb-2">Delivery Details</h3>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium">{savedAddresses[selectedAddress].name}</p>
                        <p className="text-gray-600">{savedAddresses[selectedAddress].address}</p>
                        <p className="text-green-600 mt-2">
                          {deliverySlots.find(slot => slot.id === selectedSlot)?.time}
                        </p>
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div>
                      <h3 className="font-medium mb-2">Payment Method</h3>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p>{paymentMethods.find(method => method.id === paymentMethod)?.name}</p>
                      </div>
                    </div>

                    {/* Order Items */}
                    <div>
                      <h3 className="font-medium mb-2">Order Items</h3>
                      <div className="space-y-2">
                        {cartItems.map(item => (
                          <div key={item.id} className="flex justify-between items-center">
                            <span>{item.name} x {item.quantity}</span>
                            <span>₹{item.price * item.quantity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4 mt-6">
                    <Button variant="outline" onClick={() => setCurrentStep(3)}>
                      Back
                    </Button>
                    <Button asChild className="flex-1 bg-green-600 hover:bg-green-700">
                      <Link to="/order-confirmation">
                        Place Order
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between items-center text-sm">
                      <span>{item.name} x {item.quantity}</span>
                      <span>₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee:</span>
                    <span>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg border-t pt-2">
                    <span>Total:</span>
                    <span>₹{total}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
