import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Phone, Headphones } from 'lucide-react';

interface WhatsAppChatBotProps {
  phoneNumber?: string;
  defaultMessage?: string;
  position?: 'bottom-right' | 'bottom-left' | 'bottom-center';
  showWelcomeMessage?: boolean;
  brandColor?: string;
}

const WhatsAppChatBot: React.FC<WhatsAppChatBotProps> = ({
  phoneNumber = '916389230688',
  defaultMessage = 'Hi CartCo! I need assistance with your food carts. Can you help me with more information about your products and pricing?',
  position = 'bottom-right',
  showWelcomeMessage = true,
  brandColor = '#25D366' // WhatsApp green
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  // Position classes mapping
  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'bottom-center': 'bottom-6 left-1/2 transform -translate-x-1/2'
  };

  // Initialize chatbot visibility
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      if (showWelcomeMessage && !hasUserInteracted) {
        setTimeout(() => setIsWelcomeVisible(true), 1000);
      }
    }, 3000); // Show after 3 seconds

    return () => clearTimeout(timer);
  }, [showWelcomeMessage, hasUserInteracted]);

  // Auto-hide welcome message after 10 seconds
  useEffect(() => {
    if (isWelcomeVisible) {
      const timer = setTimeout(() => {
        setIsWelcomeVisible(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isWelcomeVisible]);

  // Check if user is online (optional feature)
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Handle WhatsApp click with multiple fallbacks
  const handleWhatsAppClick = () => {
    setHasUserInteracted(true);
    setIsWelcomeVisible(false);

    const encodedMessage = encodeURIComponent(defaultMessage);
    
    // Multiple WhatsApp URL formats for better compatibility
    const whatsappUrls = [
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`, // Primary
      `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`, // Alternative
      `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}` // App protocol
    ];

    // Try to open WhatsApp with fallbacks
    const tryOpenWhatsApp = (urlIndex = 0) => {
      if (urlIndex >= whatsappUrls.length) {
        // Final fallback - show phone number
        alert(`WhatsApp not available. Please call us at +${phoneNumber} or visit our contact page.`);
        return;
      }

      const whatsappWindow = window.open(
        whatsappUrls[urlIndex], 
        '_blank', 
        'noopener,noreferrer,width=800,height=600'
      );

      // Check if popup was blocked
      if (!whatsappWindow || whatsappWindow.closed || typeof whatsappWindow.closed === 'undefined') {
        // Try next URL or direct navigation
        if (urlIndex === 0) {
          window.location.href = whatsappUrls[urlIndex];
        } else {
          tryOpenWhatsApp(urlIndex + 1);
        }
      }
    };

    tryOpenWhatsApp();

    // Analytics tracking (optional)
    if (typeof gtag !== 'undefined') {
      gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'chatbot'
      });
    }
  };

  // Handle welcome message close
  const handleCloseWelcome = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWelcomeVisible(false);
    setHasUserInteracted(true);
  };

  // Don't render if not visible
  if (!isVisible) return null;

  return (
    <div className={`fixed ${positionClasses[position]} z-50 select-none`}>
      {/* Welcome Message Bubble */}
      {isWelcomeVisible && (
        <div className={`absolute ${position === 'bottom-left' ? 'bottom-20 left-0' : 'bottom-20 right-0'} mb-2`}>
          <div className="relative bg-white rounded-2xl shadow-2xl p-4 max-w-xs border border-gray-200 animate-fade-in">
            {/* Close button */}
            <button
              onClick={handleCloseWelcome}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-500 hover:bg-gray-600 text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl group"
              aria-label="Close welcome message"
            >
              <X size={12} className="group-hover:scale-110 transition-transform" />
            </button>

            {/* Message content */}
            <div className="flex items-start space-x-3">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-md"
                style={{ backgroundColor: brandColor }}
              >
                <MessageCircle size={20} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-bold text-gray-900 text-sm">CartCo Support</h4>
                  {isOnline && (
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-600 font-medium">Online</span>
                    </div>
                  )}
                </div>
                <p className="text-gray-600 text-xs leading-relaxed mb-3">
                  👋 Hi there! Need help with our food carts? I'm here to assist you instantly!
                </p>
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full text-white text-xs px-3 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                  style={{ backgroundColor: brandColor }}
                >
                  Start Chat
                </button>
              </div>
            </div>
            
            {/* Speech bubble arrow */}
            <div 
              className={`absolute top-4 ${position === 'bottom-left' ? '-right-2' : '-left-2'} w-0 h-0`}
              style={{
                borderTop: '8px solid transparent',
                borderBottom: '8px solid transparent',
                [position === 'bottom-left' ? 'borderLeft' : 'borderRight']: '8px solid white'
              }}
            />
          </div>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <div className="relative group">
        <button
          onClick={handleWhatsAppClick}
          className="w-16 h-16 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-green-300 animate-bounce-in"
          style={{ backgroundColor: brandColor }}
          aria-label="Chat with us on WhatsApp"
          title="Need instant help? Chat with us on WhatsApp!"
        >
          <MessageCircle size={28} className="text-white group-hover:scale-110 transition-transform" />
          
          {/* Online indicator */}
          {isOnline && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full flex items-center justify-center border-2 border-white">
              <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
            </div>
          )}
        </button>

        {/* Pulse animation rings */}
        <div 
          className="absolute inset-0 w-16 h-16 rounded-full animate-ping opacity-20"
          style={{ backgroundColor: brandColor }}
        />
        <div 
          className="absolute inset-0 w-16 h-16 rounded-full animate-ping opacity-10 animation-delay-1000"
          style={{ backgroundColor: brandColor }}
        />

        {/* Hover tooltip */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
          Chat with us instantly!
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>

        {/* Notification badge (optional) */}
        {!hasUserInteracted && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse shadow-lg">
            !
          </div>
        )}
      </div>

      {/* Accessibility: Screen reader text */}
      <div className="sr-only">
        WhatsApp chat button. Click to start a conversation with CartCo support team for instant help with food cart inquiries.
      </div>
    </div>
  );
};

export default WhatsAppChatBot;