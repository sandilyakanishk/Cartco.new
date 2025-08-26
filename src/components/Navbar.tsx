import React, { useState, useEffect } from 'react';
import { Crown, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'our-carts', label: 'Our Carts' },
    { id: 'premium', label: 'Premium', icon: Crown },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-light-300' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105"
            >
              {/* Logo Image */}
              <img 
                src="/file.svg" 
                alt="CartCo - Modern Food Carts for Street Entrepreneurs"
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
                loading="eager"
                onError={(e) => {
                  // Fallback to text logo if image fails to load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              {/* Fallback text logo (hidden by default) */}
              <div className="hidden">
                <div className="w-8 h-8 bg-primary-700 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
                  C
                </div>
                <span className="text-primary-800 font-bold text-xl">CartCo</span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 flex items-center space-x-1 group rounded-lg ${
                      activeSection === item.id
                        ? 'text-primary-800 bg-light-100'
                        : 'text-primary-600 hover:text-primary-800 hover:bg-light-100'
                    }`}
                  >
                    {Icon && <Icon size={16} />}
                    <span>{item.label}</span>
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary-700 transition-transform duration-300 ${
                      activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary-600 hover:text-primary-800 transition-colors p-2 rounded-lg hover:bg-light-100"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-xl border-t border-light-300">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 text-base font-medium transition-all duration-300 flex items-center space-x-2 rounded-lg ${
                    activeSection === item.id
                      ? 'text-primary-800 bg-light-200'
                      : 'text-primary-600 hover:text-primary-800 hover:bg-light-100'
                  }`}
                >
                  {Icon && <Icon size={16} />}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;