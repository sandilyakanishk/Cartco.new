import React, { useState, useEffect } from 'react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) observer.observe(aboutSection);

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Ultimate Mobility',
      description: 'Premium tires and lightweight design for effortless movement anywhere.'
    },
    {
      icon: Award,
      title: 'Built to Last',
      description: 'High-quality materials and professional construction for daily operations.'
    },
    {
      icon: Users,
      title: 'Professional Design',
      description: 'Sleek aesthetics with integrated stove and exhaust systems.'
    },
    {
      icon: TrendingUp,
      title: 'Value Investment',
      description: 'Competitive pricing with premium features and long-term durability.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-100 to-slate-200 relative overflow-hidden">
      {/* Depth Effect Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/8 via-gray-800/5 to-slate-700/10 pointer-events-none" />
      
      {/* Floating depth elements */}
      <div className="absolute top-16 right-12 w-72 h-72 bg-gradient-radial from-gray-500/18 via-slate-400/10 to-transparent rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-20 left-20 w-88 h-88 bg-gradient-radial from-slate-600/15 via-gray-500/8 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      {/* Layered background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_25%,rgba(71,85,105,0.22),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_75%,rgba(100,116,139,0.18),transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(75,85,99,0.12),transparent_60%)] pointer-events-none" />
      
      {/* Geometric depth elements */}
      <div className="absolute top-32 left-16 w-20 h-20 bg-slate-400/20 rounded-lg blur-sm animate-pulse rotate-12" />
      <div className="absolute bottom-32 right-24 w-28 h-28 bg-gray-500/15 rounded-full blur-md animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Small Logo Particles */}
      <div className="absolute top-24 left-1/5 w-7 h-7 opacity-8 blur-md animate-float">
        <img src="/file.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-48 right-1/4 w-9 h-9 opacity-12 blur-sm animate-float" style={{ animationDelay: '2.5s' }}>
        <img src="/file.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-40 left-1/3 w-6 h-6 opacity-6 blur-lg animate-float" style={{ animationDelay: '4s' }}>
        <img src="/file.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-72 left-12 w-8 h-8 opacity-10 blur-md animate-float" style={{ animationDelay: '1.5s' }}>
        <img src="/file.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-64 right-12 w-5 h-5 opacity-8 blur-sm animate-float" style={{ animationDelay: '3.5s' }}>
        <img src="/file.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-56 right-1/3 w-10 h-10 opacity-12 blur-lg animate-float" style={{ animationDelay: '5s' }}>
        <img src="/file.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-56 left-1/4 w-7 h-7 opacity-6 blur-md animate-float" style={{ animationDelay: '2s' }}>
        <img src="/file.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-88 right-20 w-6 h-6 opacity-10 blur-sm animate-float" style={{ animationDelay: '4.5s' }}>
        <img src="/file.svg" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Choose CartCo */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Why Choose CartCo?</h2>
            <p className="text-lg text-primary-600 max-w-3xl mx-auto">
              We combine innovation, quality, and affordability with built-in cooking solutions for street entrepreneurs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-all duration-300 border border-light-300 group-hover:scale-110">
                    <Icon size={32} className="text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-3">{value.title}</h3>
                  <p className="text-primary-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* About CartCo */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-primary-900">About CartCo</h2>
            <div className="space-y-4 text-primary-600 leading-relaxed">
              <p>
                We help entrepreneurs take their food business anywhere. Our mission is to provide 
                innovative, high-quality food carts with integrated cooking solutions that empower 
                street vendors to succeed in the competitive food industry.
              </p>
              <p>
                Based in Lucknow, we understand the Indian street food culture and have designed 
                our carts with built-in stoves, professional exhaust systems, and premium mobility 
                features that meet local needs and regulations.
              </p>
              <p>
                Every cart is built with attention to detail, using premium materials and modern 
                manufacturing techniques. We're not just selling carts – we're empowering dreams 
                and building the future of mobile food entrepreneurship.
              </p>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-light-300 animate-float">
              <svg 
                viewBox="0 0 400 300" 
                className="w-full h-auto"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background Scene */}
                <rect width="400" height="300" fill="rgba(247, 250, 252, 0.1)"/>
                
                {/* Street Scene */}
                <rect y="250" width="400" height="50" fill="rgba(226, 232, 240, 0.3)"/>
                
                {/* Buildings */}
                <rect x="20" y="120" width="80" height="130" fill="rgba(203, 213, 225, 0.4)" stroke="rgba(148, 163, 184, 0.6)"/>
                <rect x="120" y="100" width="70" height="150" fill="rgba(203, 213, 225, 0.4)" stroke="rgba(148, 163, 184, 0.6)"/>
                <rect x="210" y="110" width="90" height="140" fill="rgba(203, 213, 225, 0.4)" stroke="rgba(148, 163, 184, 0.6)"/>
                <rect x="320" y="90" width="60" height="160" fill="rgba(203, 213, 225, 0.4)" stroke="rgba(148, 163, 184, 0.6)"/>
                
                {/* Food Cart in Scene */}
                <g transform="translate(150, 180)">
                  <rect width="100" height="50" rx="5" fill="#4A5568" stroke="#2D3748" strokeWidth="1"/>
                  <rect x="10" y="10" width="80" height="30" rx="3" fill="#F7FAFC"/>
                  <circle cx="20" cy="65" r="12" fill="#374151"/>
                  <circle cx="80" cy="65" r="12" fill="#374151"/>
                  <rect x="85" y="20" width="15" height="2" fill="#94A3B8"/>
                </g>
                
                {/* People */}
                <g transform="translate(100, 200)">
                  <circle cx="10" cy="15" r="8" fill="#FDE68A"/>
                  <rect x="5" y="23" width="10" height="20" rx="2" fill="#3B82F6"/>
                  <rect x="3" y="30" width="4" height="13" fill="#FDE68A"/>
                  <rect x="13" y="30" width="4" height="13" fill="#FDE68A"/>
                </g>
                
                <g transform="translate(280, 200)">
                  <circle cx="10" cy="15" r="8" fill="#FDE68A"/>
                  <rect x="5" y="23" width="10" height="20" rx="2" fill="#EF4444"/>
                  <rect x="3" y="30" width="4" height="13" fill="#FDE68A"/>
                  <rect x="13" y="30" width="4" height="13" fill="#FDE68A"/>
                </g>
                
                {/* Sun */}
                <circle cx="350" cy="50" r="20" fill="#FCD34D"/>
              </svg>
              
              {/* Stats Overlays */}
              <div className="absolute top-4 left-4 bg-primary-700 text-white px-3 py-2 rounded-lg text-sm font-bold shadow-md">
                500+ Happy Customers
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;