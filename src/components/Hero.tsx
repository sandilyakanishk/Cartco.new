import React from 'react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="min-h-screen flex items-center relative bg-gradient-to-br from-gray-50 via-gray-100 to-slate-200 overflow-hidden">
        {/* Depth Effect Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/15 via-slate-800/10 to-gray-700/12 pointer-events-none" />
        
        {/* Floating depth elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-radial from-slate-400/20 via-gray-500/10 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-radial from-gray-600/15 via-slate-500/8 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-radial from-slate-700/12 via-gray-400/6 to-transparent rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />
        
        {/* Layered radial gradients for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(71,85,105,0.25),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(100,116,139,0.20),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(75,85,99,0.15),transparent_70%)] pointer-events-none" />
        
        {/* Subtle geometric shapes for depth */}
        <div className="absolute top-40 right-20 w-32 h-32 bg-slate-300/30 rounded-full blur-lg animate-pulse" />
        <div className="absolute bottom-40 left-32 w-24 h-24 bg-gray-400/25 rounded-full blur-md animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Small Logo Particles */}
        <div className="absolute top-20 left-1/4 w-8 h-8 opacity-10 blur-sm animate-float">
          <img src="/file.svg" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-40 right-1/3 w-6 h-6 opacity-8 blur-md animate-float" style={{ animationDelay: '2s' }}>
          <img src="/file.svg" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-32 left-1/2 w-10 h-10 opacity-12 blur-sm animate-float" style={{ animationDelay: '4s' }}>
          <img src="/file.svg" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-60 left-20 w-7 h-7 opacity-6 blur-lg animate-float" style={{ animationDelay: '1s' }}>
          <img src="/file.svg" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-60 right-20 w-9 h-9 opacity-10 blur-md animate-float" style={{ animationDelay: '3s' }}>
          <img src="/file.svg" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-80 right-1/4 w-5 h-5 opacity-8 blur-sm animate-float" style={{ animationDelay: '5s' }}>
          <img src="/file.svg" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-80 left-1/3 w-8 h-8 opacity-12 blur-lg animate-float" style={{ animationDelay: '2.5s' }}>
          <img src="/file.svg" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-32 right-16 w-6 h-6 opacity-6 blur-md animate-float" style={{ animationDelay: '4.5s' }}>
          <img src="/file.svg" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-20 left-16 w-7 h-7 opacity-10 blur-sm animate-float" style={{ animationDelay: '1.5s' }}>
          <img src="/file.svg" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-96 left-1/2 w-9 h-9 opacity-8 blur-lg animate-float" style={{ animationDelay: '3.5s' }}>
          <img src="/file.svg" alt="" className="w-full h-full object-contain" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight">
                Modern Food Carts for{' '}
                <span className="text-primary-700">Street Entrepreneurs</span>
              </h1>
              
              <p className="text-lg text-primary-600 leading-relaxed">
                Empowering vendors with stylish, mobile, and innovative food cart solutions 
                featuring built-in stoves, exhaust systems, and premium mobility.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('our-carts')}
                  className="px-8 py-4 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Explore Carts
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg border-2 border-primary-300 hover:border-primary-500 hover:text-primary-800 transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Get a Quote
                </button>
              </div>
            </div>

            {/* Food Cart Illustration */}
            <div className="relative animate-slide-in-right">
              <div className="relative bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-light-300 animate-float">
                {/* Food Cart SVG Illustration */}
                <svg 
                  viewBox="0 0 400 300" 
                  className="w-full h-auto"
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Cart Body */}
                  <rect x="50" y="100" width="250" height="120" rx="10" fill="#4A5568" stroke="#2D3748" strokeWidth="2"/>
                  
                  {/* Cart Window */}
                  <rect x="70" y="120" width="210" height="80" rx="5" fill="#F7FAFC" stroke="#CBD5E1" strokeWidth="2"/>
                  
                  {/* Serving Window */}
                  <rect x="90" y="140" width="170" height="40" rx="3" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1"/>
                  
                  {/* Awning */}
                  <path d="M30 100 Q200 70 370 100 L350 90 Q200 60 50 90 Z" fill="#475569"/>
                  <rect x="40" y="85" width="320" height="15" rx="7" fill="#475569"/>
                  
                  {/* Support Poles */}
                  <rect x="45" y="85" width="4" height="135" fill="#94A3B8"/>
                  <rect x="351" y="85" width="4" height="135" fill="#94A3B8"/>
                  
                  {/* Wheels */}
                  <circle cx="100" cy="235" r="25" fill="#374151" stroke="#1F2937" strokeWidth="2"/>
                  <circle cx="100" cy="235" r="15" fill="#6B7280"/>
                  <circle cx="300" cy="235" r="25" fill="#374151" stroke="#1F2937" strokeWidth="2"/>
                  <circle cx="300" cy="235" r="15" fill="#6B7280"/>
                  
                  {/* Handle */}
                  <rect x="355" y="180" width="30" height="4" rx="2" fill="#94A3B8"/>
                  <rect x="383" y="165" width="4" height="34" rx="2" fill="#94A3B8"/>
                  
                  {/* Decorative Elements */}
                  <text x="175" y="165" textAnchor="middle" className="fill-primary-800 text-sm font-bold">STREET EATS</text>
                  
                  {/* Cooking Equipment Icons */}
                  <rect x="110" y="155" width="8" height="8" rx="1" fill="#64748B"/>
                  <rect x="125" y="155" width="8" height="8" rx="1" fill="#64748B"/>
                  <rect x="140" y="155" width="8" height="8" rx="1" fill="#64748B"/>
                </svg>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-primary-700 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce shadow-lg">
                  Premium Quality
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white text-primary-700 px-3 py-1 rounded-full text-sm font-semibold shadow-lg border border-light-300">
                  Built to Last
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Hero;