import React from 'react';
import { ShoppingCart, Truck, Building2, ArrowRight, Check, Users, TrendingUp, Zap } from 'lucide-react';
import ImageModal from './ImageModal';

interface OurCartsProps {
  onNavigate: (section: string) => void;
}

const OurCarts: React.FC<OurCartsProps> = ({ onNavigate }) => {
  const [selectedImage, setSelectedImage] = React.useState<{
    src: string;
    alt: string;
    title: string;
    description: string;
    index: number;
  } | null>(null);

  const carts = [
    {
      id: 'small',
      title: 'Small Cart',
      subtitle: 'Perfect for Beginners',
      colorScheme: 'green',
      colorClasses: {
        primary: 'from-green-500 to-green-600',
        bg: 'bg-green-50',
        text: 'text-green-700',
        border: 'border-green-200',
        button: 'bg-green-600 hover:bg-green-700',
        badge: 'bg-green-100 text-green-800'
      },
      dimensions: {
        range: '3.5–5 ft length × 2–2.5 ft width',
        options: ['3.5×2.5 ft', '4×2 ft', '5×2 ft', '5×2.5 ft']
      },
      targetAudience: 'Solo vendors, small street setups, new vendors starting their food business journey',
      description: 'Ideal for entrepreneurs just starting out or those focusing on specific items like momos, golgappas, or simple street snacks.',
      features: [
        'Ultra Portable Design',
        'Quick Setup & Breakdown',
        'Energy Efficient Operation',
        'Perfect for Corner Spots',
        'Low Initial Investment',
        'Easy to Maneuver'
      ],
      bestFor: ['Momos & Dumplings', 'Golgappas & Chaat', 'Tea & Coffee', 'Simple Snacks'],
      icon: ShoppingCart,
      images: [
        'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4393028/pexels-photo-4393028.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4393036/pexels-photo-4393036.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      thumbnail: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'medium',
      title: 'Medium Cart',
      subtitle: 'Balanced Performance',
      colorScheme: 'yellow',
      colorClasses: {
        primary: 'from-yellow-500 to-yellow-600',
        bg: 'bg-yellow-50',
        text: 'text-yellow-700',
        border: 'border-yellow-200',
        button: 'bg-yellow-600 hover:bg-yellow-700',
        badge: 'bg-yellow-100 text-yellow-800'
      },
      dimensions: {
        range: '6 ft length × 3–4 ft width',
        options: ['6×3 ft', '6×4 ft']
      },
      targetAudience: 'Growing businesses, vendors needing more workspace and equipment flexibility',
      description: 'Perfect balance of mobility and functionality for established vendors ready to expand their menu offerings.',
      features: [
        'Balanced Mobility & Space',
        'Extended Cooking Area',
        'Professional Appearance',
        'Versatile Menu Options',
        'Enhanced Storage',
        'Customer-Friendly Design'
      ],
      bestFor: ['Coffee & Beverages', 'Chinese Fast Food', 'Multi-Item Menus', 'Breakfast Items'],
      icon: Truck,
      images: [
        'https://images.pexels.com/photos/4393036/pexels-photo-4393036.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4393028/pexels-photo-4393028.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      thumbnail: 'https://images.pexels.com/photos/4393036/pexels-photo-4393036.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'large',
      title: 'Large Cart',
      subtitle: 'Maximum Capacity',
      colorScheme: 'red',
      colorClasses: {
        primary: 'from-red-500 to-red-600',
        bg: 'bg-red-50',
        text: 'text-red-700',
        border: 'border-red-200',
        button: 'bg-red-600 hover:bg-red-700',
        badge: 'bg-red-100 text-red-800'
      },
      dimensions: {
        range: '8–11 ft length × 5–6 ft width',
        options: ['8×5 ft', '10×5 ft', '11×6 ft']
      },
      targetAudience: 'High-volume vendors, professional setups, established food businesses',
      description: 'Professional-grade solution for serious entrepreneurs running high-volume operations with diverse menu requirements.',
      features: [
        'Maximum Workspace',
        'Advanced Equipment Setup',
        'High-Volume Capacity',
        'Professional Grade Build',
        'Multiple Cooking Stations',
        'Premium Storage Solutions'
      ],
      bestFor: ['Juice & Smoothies', 'Pav Bhaji & Curries', 'Full Chaat Menu', 'Multi-Cuisine Options'],
      icon: Building2,
      images: [
        'https://images.pexels.com/photos/4393028/pexels-photo-4393028.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4393036/pexels-photo-4393036.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      thumbnail: 'https://images.pexels.com/photos/4393028/pexels-photo-4393028.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const handleImageClick = (cart: typeof carts[0], imageIndex: number = 0) => {
    setSelectedImage({
      src: cart.images[imageIndex],
      alt: `${cart.title} - ${cart.subtitle}`,
      title: cart.title,
      description: cart.description,
      index: imageIndex
    });
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section id="our-carts" className="py-20 bg-gradient-to-b from-gray-100 to-slate-200 relative overflow-hidden">
          {/* Depth Effect Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/12 via-slate-800/8 to-gray-700/10 pointer-events-none" />
          
          {/* Floating depth elements */}
          <div className="absolute top-24 left-8 w-80 h-80 bg-gradient-radial from-slate-500/20 via-gray-400/12 to-transparent rounded-full blur-2xl animate-float" />
          <div className="absolute bottom-16 right-12 w-96 h-96 bg-gradient-radial from-gray-600/18 via-slate-500/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2.5s' }} />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-radial from-slate-700/15 via-gray-600/8 to-transparent rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />
          
          {/* Layered radial gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(71,85,105,0.18),transparent_75%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_75%,rgba(100,116,139,0.15),transparent_65%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(75,85,99,0.12),transparent_70%)] pointer-events-none" />
          
          {/* Geometric depth shapes */}
          <div className="absolute top-40 right-32 w-16 h-16 bg-slate-300/25 rounded-lg blur-sm animate-pulse rotate-45" />
          <div className="absolute bottom-40 left-24 w-24 h-24 bg-gray-400/20 rounded-full blur-md animate-pulse" style={{ animationDelay: '1.5s' }} />
          
          {/* Small Logo Particles */}
          <div className="absolute top-32 left-1/5 w-7 h-7 opacity-8 blur-md animate-float">
            <img src="/file.svg" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute top-56 right-1/6 w-9 h-9 opacity-12 blur-sm animate-float" style={{ animationDelay: '2s' }}>
            <img src="/file.svg" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute bottom-48 left-1/4 w-6 h-6 opacity-6 blur-lg animate-float" style={{ animationDelay: '3.5s' }}>
            <img src="/file.svg" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute top-80 left-12 w-8 h-8 opacity-10 blur-md animate-float" style={{ animationDelay: '1s' }}>
            <img src="/file.svg" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute bottom-72 right-16 w-5 h-5 opacity-8 blur-sm animate-float" style={{ animationDelay: '4s' }}>
            <img src="/file.svg" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute top-68 right-1/3 w-10 h-10 opacity-12 blur-lg animate-float" style={{ animationDelay: '2.5s' }}>
            <img src="/file.svg" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute bottom-60 left-1/3 w-7 h-7 opacity-6 blur-md animate-float" style={{ animationDelay: '5s' }}>
            <img src="/file.svg" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute top-44 right-20 w-6 h-6 opacity-10 blur-sm animate-float" style={{ animationDelay: '3s' }}>
            <img src="/file.svg" alt="" className="w-full h-full object-contain" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">
                Choose Your Perfect Cart Size
              </h2>
              <p className="text-lg text-primary-600 max-w-3xl mx-auto mb-8">
                From compact street-side solutions to large-scale operations, we have the perfect cart for your 
                business type and food specialization. Each size is designed with integrated cooking systems.
              </p>
              
              {/* Size Guide Legend */}
              <div className="flex justify-center items-center space-x-8 mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-primary-700">Small - Starter</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm font-medium text-primary-700">Medium - Growth</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className="text-sm font-medium text-primary-700">Large - Professional</span>
                </div>
              </div>
            </div>

            {/* Comparison Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {carts.map((cart) => {
                const Icon = cart.icon;
                return (
                  <div
                    key={cart.id}
                    className={`group bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-3 border-2 ${cart.colorClasses.border} relative`}
                  >
                    {/* Color Indicator */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cart.colorClasses.primary}`}></div>
                    
                    {/* Size Badge */}
                    <div className={`absolute top-4 right-4 ${cart.colorClasses.badge} px-3 py-1 rounded-full text-xs font-bold z-10`}>
                      {cart.colorScheme.toUpperCase()}
                    </div>

                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden">
                      <button
                        onClick={() => handleImageClick(cart)}
                        className="w-full h-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-t-2xl"
                        aria-label={`View ${cart.title} gallery`}
                      >
                        <img
                          src={cart.thumbnail}
                          alt={cart.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                          onError={(e) => {
                            e.currentTarget.src = 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=400';
                          }}
                        />
                      </button>
                      <div className={`absolute inset-0 bg-gradient-to-t ${cart.colorClasses.primary} opacity-20 group-hover:opacity-30 transition-opacity pointer-events-none`} />
                      <div className={`absolute top-4 left-4 ${cart.colorClasses.bg} backdrop-blur-sm p-2 rounded-lg border ${cart.colorClasses.border}`}>
                        <Icon size={20} className={cart.colorClasses.text} />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      {/* Header */}
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-primary-900 mb-1">{cart.title}</h3>
                        <p className={`text-sm font-semibold ${cart.colorClasses.text} mb-3`}>{cart.subtitle}</p>
                        
                        {/* Dimensions */}
                        <div className={`${cart.colorClasses.bg} rounded-lg p-4 border ${cart.colorClasses.border} mb-4`}>
                          <h4 className="font-bold text-primary-900 mb-2">Dimensions</h4>
                          <p className={`text-sm font-semibold ${cart.colorClasses.text} mb-2`}>{cart.dimensions.range}</p>
                          <div className="flex flex-wrap gap-1 justify-center">
                            {cart.dimensions.options.map((option, index) => (
                              <span key={index} className="text-xs bg-white/80 text-primary-700 px-2 py-1 rounded border">
                                {option}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Target Audience */}
                      <div className="mb-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Users size={16} className={cart.colorClasses.text} />
                          <h4 className="font-semibold text-primary-900">Perfect For</h4>
                        </div>
                        <p className="text-sm text-primary-600 leading-relaxed">
                          {cart.targetAudience}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-primary-600 mb-4 text-sm leading-relaxed">
                        {cart.description}
                      </p>

                      {/* Best For Items */}
                      <div className="mb-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <TrendingUp size={16} className={cart.colorClasses.text} />
                          <h4 className="font-semibold text-primary-900">Best For</h4>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {cart.bestFor.map((item, index) => (
                            <span key={index} className={`text-xs ${cart.colorClasses.badge} px-2 py-1 rounded`}>
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <div className="flex items-center space-x-2 mb-3">
                          <Zap size={16} className={cart.colorClasses.text} />
                          <h4 className="font-semibold text-primary-900">Key Features</h4>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                          {cart.features.map((feature, index) => (
                            <div key={index} className="flex items-center text-sm text-primary-600">
                              <Check size={14} className={`${cart.colorClasses.text} mr-2 flex-shrink-0`} />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Image Gallery Indicator */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex space-x-1">
                          {cart.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => handleImageClick(cart, index)}
                              className={`w-2 h-2 rounded-full ${cart.colorClasses.text.replace('text-', 'bg-').replace('-700', '-300')} hover:${cart.colorClasses.text.replace('text-', 'bg-').replace('-700', '-500')} transition-colors focus:outline-none focus:ring-1 focus:ring-primary-500`}
                              aria-label={`View image ${index + 1} of ${cart.title}`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-primary-500 font-medium">Click to view gallery</span>
                      </div>

                      {/* CTA Button */}
                      <button 
                        onClick={() => onNavigate('contact')}
                        className={`w-full ${cart.colorClasses.button} text-white py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg hover:shadow-xl transform hover:scale-105`}
                      >
                        <span>Get Quote for {cart.title}</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Comparison Table */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-light-300 shadow-lg mb-16">
              <h3 className="text-2xl font-bold text-primary-900 mb-6 text-center">Quick Comparison</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-light-300">
                      <th className="text-left py-3 px-4 font-semibold text-primary-900">Feature</th>
                      <th className="text-center py-3 px-4 font-semibold text-green-700">Small Cart</th>
                      <th className="text-center py-3 px-4 font-semibold text-yellow-700">Medium Cart</th>
                      <th className="text-center py-3 px-4 font-semibold text-red-700">Large Cart</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-light-200">
                      <td className="py-3 px-4 font-medium text-primary-800">Size Range</td>
                      <td className="py-3 px-4 text-center text-sm text-primary-600">3.5–5 × 2–2.5 ft</td>
                      <td className="py-3 px-4 text-center text-sm text-primary-600">6 × 3–4 ft</td>
                      <td className="py-3 px-4 text-center text-sm text-primary-600">8–11 × 5–6 ft</td>
                    </tr>
                    <tr className="border-b border-light-200">
                      <td className="py-3 px-4 font-medium text-primary-800">Best For</td>
                      <td className="py-3 px-4 text-center text-sm text-primary-600">Solo vendors</td>
                      <td className="py-3 px-4 text-center text-sm text-primary-600">Growing business</td>
                      <td className="py-3 px-4 text-center text-sm text-primary-600">High-volume ops</td>
                    </tr>
                    <tr className="border-b border-light-200">
                      <td className="py-3 px-4 font-medium text-primary-800">Mobility</td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Excellent</span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Good</span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">Moderate</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-primary-800">Investment Level</td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Low</span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Medium</span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">High</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Custom Cart CTA */}
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-12 border border-light-300 shadow-lg">
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Need Something Custom?</h3>
              <p className="text-primary-600 mb-6 max-w-2xl mx-auto">
                Every business is unique. If our standard sizes don't fit your specific needs, we offer fully 
                customizable carts tailored to your requirements and food specializations.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Get Custom Quote
              </button>
            </div>
          </div>
      </section>
      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={handleCloseModal}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
          title={selectedImage.title}
          description={selectedImage.description}
          currentIndex={selectedImage.index}
          totalImages={3}
          onPrevious={() => {
            const newIndex = selectedImage.index > 0 ? selectedImage.index - 1 : 2;
            const currentCart = carts.find(cart => cart.images.includes(selectedImage.src));
            if (currentCart) handleImageClick(currentCart, newIndex);
          }}
          onNext={() => {
            const newIndex = selectedImage.index < 2 ? selectedImage.index + 1 : 0;
            const currentCart = carts.find(cart => cart.images.includes(selectedImage.src));
            if (currentCart) handleImageClick(currentCart, newIndex);
          }}
        />
      )}
    </>
  );
};

export default OurCarts;