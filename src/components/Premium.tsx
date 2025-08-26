import React from 'react';
import { Crown, Zap, Settings, Palette, Star } from 'lucide-react';

interface PremiumProps {
  onNavigate: (section: string) => void;
}

const Premium: React.FC<PremiumProps> = ({ onNavigate }) => {
  const premiumFeatures = [
    {
      icon: Crown,
      title: 'Premium Materials',
      description: 'High-grade steel, advanced composites, and premium finishes.'
    },
    {
      icon: Zap,
      title: 'Extended Warranty',
      description: '5-year comprehensive warranty with priority support.'
    },
    {
      icon: Settings,
      title: 'Custom Design',
      description: 'Tailored to your brand with unlimited customization options.'
    }
  ];

  return (
    <section id="premium" className="py-20 bg-gradient-to-br from-slate-200 via-gray-100 to-slate-200 relative overflow-hidden">
        {/* Depth Effect Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/12 via-gray-800/8 to-slate-700/15 pointer-events-none" />
        
        {/* Multi-layered depth elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-gray-800/25 via-slate-700/15 to-transparent rounded-full blur-3xl animate-ultra-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-slate-700/22 via-gray-600/12 to-transparent rounded-full blur-3xl animate-reverse-drift"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-radial from-gray-700/18 via-slate-600/10 to-transparent rounded-full blur-2xl animate-subtle-drift"></div>
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-radial from-gray-600/15 via-slate-500/8 to-transparent rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-32 left-32 w-72 h-72 bg-gradient-radial from-slate-800/12 via-gray-700/6 to-transparent rounded-full blur-2xl animate-parallax-float"></div>
          <div className="absolute top-40 left-1/3 w-88 h-88 bg-gradient-radial from-gray-900/10 via-slate-800/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        {/* Small Logo Particles */}
        <div className="absolute top-28 left-1/6 w-8 h-8 opacity-10 blur-md animate-ultra-float">
          <img src="/file.svg" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-52 right-1/5 w-6 h-6 opacity-8 blur-lg animate-reverse-drift">
          <img src="/file.svg" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-44 left-1/4 w-9 h-9 opacity-12 blur-sm animate-subtle-drift">
          <img src="/file.svg" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-76 left-16 w-7 h-7 opacity-6 blur-md animate-parallax-float">
          <img src="/file.svg" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-68 right-16 w-5 h-5 opacity-10 blur-lg animate-float">
          <img src="/file.svg" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-64 right-1/4 w-10 h-10 opacity-8 blur-sm animate-ultra-float" style={{ animationDelay: '2s' }}>
          <img src="/file.svg" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-52 left-1/3 w-6 h-6 opacity-12 blur-md animate-reverse-drift" style={{ animationDelay: '3s' }}>
          <img src="/file.svg" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-92 right-12 w-8 h-8 opacity-6 blur-lg animate-subtle-drift" style={{ animationDelay: '1.5s' }}>
          <img src="/file.svg" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-76 left-20 w-7 h-7 opacity-10 blur-sm animate-float" style={{ animationDelay: '4s' }}>
          <img src="/file.svg" alt="" className="w-full h-full object-contain" />
        </div>

        {/* Additional depth layers */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(71,85,105,0.20),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(100,116,139,0.18),transparent_70%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Badge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg mb-6">
            <Crown size={24} />
            <span>PREMIUM COLLECTION</span>
            <Star size={20} />
          </div>
          
          <h2 className="text-4xl font-bold text-primary-900 mb-4">
            Exclusive Professional Solutions
          </h2>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto">
            Discover our premium range of specialized carts and vans, designed for entrepreneurs who 
            demand excellence. Each solution is crafted with premium materials and cutting-edge technology.
          </p>
        </div>

        {/* Main Premium Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary-900">
                Engineered for Excellence
              </h3>
              <p className="text-primary-600 leading-relaxed">
                Our premium collection features E-Rickshaw integration, advanced food van customization, 
                and specialized theme carts. Each unit combines innovative design with practical functionality, 
                delivering unmatched performance for serious food entrepreneurs.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
              {premiumFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-md border border-light-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-primary-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => onNavigate('premium')}
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Request Premium Quote
            </button>
          </div>

          {/* Right: Premium Cart Showcase */}
          <div className="relative">
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-light-300">
              {/* Premium Cart Illustration */}
              <div className="space-y-6">
                {/* E-Rickshaw Cart */}
                <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-xl p-6 border border-blue-400/20 backdrop-blur-sm">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Zap size={16} className="text-white" />
                    </div>
                    <h4 className="font-bold text-primary-900">E-Rickshaw Cart</h4>
                  </div>
                  <p className="text-sm text-primary-600 mb-3">
                    Eco-friendly electric rickshaw with integrated food service station. 
                    Zero emissions, maximum mobility.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Electric Motor', 'Smart Charging', 'Climate Control', 'GPS Tracking'].map((feature) => (
                      <span key={feature} className="text-xs bg-blue-500/20 text-blue-700 px-2 py-1 rounded backdrop-blur-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Food Van */}
                <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-xl p-6 border border-green-400/20 backdrop-blur-sm">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Settings size={16} className="text-white" />
                    </div>
                    <h4 className="font-bold text-primary-900">Food Van Customization</h4>
                  </div>
                  <p className="text-sm text-primary-600 mb-3">
                    Complete van transformation with professional kitchen setup. 
                    Perfect for high-volume operations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Full Kitchen Setup', 'Professional Equipment', 'Custom Branding', 'Storage Solutions'].map((feature) => (
                      <span key={feature} className="text-xs bg-green-500/20 text-green-700 px-2 py-1 rounded backdrop-blur-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Theme Carts */}
                <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-xl p-6 border border-purple-400/20 backdrop-blur-sm">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <Palette size={16} className="text-white" />
                    </div>
                    <h4 className="font-bold text-primary-900">Theme Carts</h4>
                  </div>
                  <p className="text-sm text-primary-600 mb-3">
                    Specialized carts designed for specific cuisines with authentic styling 
                    and equipment.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Theme-Specific Design', 'Authentic Equipment', 'Cultural Branding', 'Specialized Storage'].map((feature) => (
                      <span key={feature} className="text-xs bg-purple-500/20 text-purple-700 px-2 py-1 rounded backdrop-blur-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Premium Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                Premium Only
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Premium;