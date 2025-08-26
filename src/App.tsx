import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurCarts from './components/OurCarts';
import Premium from './components/Premium';
import About from './components/About';
import Contact from './components/Contact';
import WhatsAppChatBot from './components/WhatsAppChatBot';
import useScrollSpy from './hooks/useScrollSpy';
import SocialMediaButtons from './components/SocialMediaButtons';

function App() {
  const sectionIds = ['home', 'our-carts', 'premium', 'about', 'contact'];
  const { activeSection, scrollToSection } = useScrollSpy(sectionIds);

  const handleWhatsAppClick = () => {
    const message = "Hi CartCo! Need an instant help with your food carts. Can you provide more details about your products?";
    const whatsappUrl = `https://wa.me/916389230688?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-light-50">
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />
      <Hero onNavigate={scrollToSection} />
      <OurCarts onNavigate={scrollToSection} />
      <Premium onNavigate={scrollToSection} />
      <About />
      <Contact onWhatsAppClick={handleWhatsAppClick} />
      
      {/* Enhanced WhatsApp ChatBot */}
      <WhatsAppChatBot 
        phoneNumber="916389230688"
        defaultMessage="Hi CartCo! I'm interested in your food carts and would like to know more about your products, pricing, and customization options. Can you help me?"
        position="bottom-right"
        showWelcomeMessage={true}
        brandColor="#25D366"
      />
      
      {/* Floating Social Media Buttons */}
      <SocialMediaButtons variant="floating" size="md" />
      
      {/* Footer */}
      <footer className="bg-primary-900 text-white py-12 border-t border-light-300 relative overflow-hidden">
        {/* Footer Parallax Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900/20 via-slate-800/10 to-gray-800/15" />
          <div className="absolute top-10 right-20 w-32 h-32 bg-gray-700/8 rounded-full blur-2xl animate-float" />
          <div className="absolute bottom-10 left-20 w-40 h-40 bg-slate-600/6 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img 
                  src="/Logowhite.png" 
                  alt="CartCo Logo"
                  className="h-8 w-auto object-contain drop-shadow-lg"
                  loading="lazy"
                />
                <span className="text-xl font-bold text-white">CartCo</span>
              </div>
              <p className="text-light-400 text-sm leading-relaxed">
                Empowering street food entrepreneurs with modern carts featuring integrated cooking solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'Our Carts', 'Premium Collection', 'About', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase().replace(' ', '-').replace(' collection', ''))}
                    className="block text-light-400 hover:text-primary-300 transition-colors text-sm"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Cart Types */}
            <div>
              <h4 className="font-semibold mb-4">Cart Types</h4>
              <div className="space-y-2 text-sm text-light-400">
                <p>Small Cart</p>
                <p>Medium Cart</p>
                <p>Large Cart</p>
                <p>E-Rickshaw Cart</p>
                <p>Theme Carts</p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-light-400">
                <p>+91 6389230688</p>
                <p>cartco2025@gmail.com</p>
                <p>D-315, Indira Nagar</p>
                <p>Lucknow, 226016</p>
              </div>
            </div>
          </div>

          <div className="border-t border-light-700 mt-8 pt-8 text-center text-sm text-light-500">
            <p>© 2025 CartCo. All Rights Reserved. | Modern Food Carts with Integrated Cooking Solutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;