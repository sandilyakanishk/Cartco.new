import React from 'react';
import { Instagram, Facebook, MessageCircle, ExternalLink } from 'lucide-react';

interface SocialMediaButtonsProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal' | 'floating';
}

const SocialMediaButtons: React.FC<SocialMediaButtonsProps> = ({ 
  className = '', 
  size = 'md',
  variant = 'default'
}) => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/cartco._',
      color: 'hover:bg-pink-500 hover:text-white',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600',
      ariaLabel: 'Follow CartCo on Instagram (opens in new tab)'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/profile.php?id=61579348212829',
      color: 'hover:bg-blue-500 hover:text-white',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      ariaLabel: 'Follow CartCo on Facebook (opens in new tab)'
    }
  ];

  const messageUsLink = {
    name: 'Message Us',
    icon: MessageCircle,
    url: 'https://wa.me/916389230688?text=Hi%20CartCo!%20I%27m%20interested%20in%20your%20food%20carts%20and%20would%20like%20to%20get%20more%20information.',
    color: 'hover:bg-green-500 hover:text-white',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600',
    ariaLabel: 'Message CartCo on WhatsApp (opens in new tab)'
  };

  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-base',
    lg: 'w-16 h-16 text-lg'
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  };

  const handleSocialClick = (url: string, platform: string) => {
    // Analytics tracking could be added here
    console.log(`Opening ${platform} profile`);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (variant === 'floating') {
    return (
      <div className={`fixed right-6 top-1/2 -translate-y-1/2 z-40 space-y-3 ${className}`}>
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <button
              key={social.name}
              onClick={() => handleSocialClick(social.url, social.name)}
              className={`${sizeClasses[size]} ${social.bgColor} ${social.textColor} ${social.color} rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group backdrop-blur-sm border border-white/20 hover:scale-110`}
              aria-label={social.ariaLabel}
              title={social.name}
            >
              <Icon size={iconSizes[size]} className="group-hover:scale-110 transition-transform" />
            </button>
          );
        })}
        
        {/* Message Us Button */}
        <button
          onClick={() => handleSocialClick(messageUsLink.url, messageUsLink.name)}
          className={`${sizeClasses[size]} ${messageUsLink.bgColor} ${messageUsLink.textColor} ${messageUsLink.color} rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group backdrop-blur-sm border border-white/20 hover:scale-110 animate-pulse`}
          aria-label={messageUsLink.ariaLabel}
          title={messageUsLink.name}
        >
          <MessageCircle size={iconSizes[size]} className="group-hover:scale-110 transition-transform" />
        </button>
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <div className={`flex items-center space-x-4 ${className}`}>
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <button
              key={social.name}
              onClick={() => handleSocialClick(social.url, social.name)}
              className={`${social.textColor} ${social.color} p-2 rounded-lg transition-all duration-200 hover:scale-110 group`}
              aria-label={social.ariaLabel}
              title={social.name}
            >
              <Icon size={iconSizes[size]} className="group-hover:scale-110 transition-transform" />
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <button
            key={social.name}
            onClick={() => handleSocialClick(social.url, social.name)}
            className={`flex items-center space-x-3 px-6 py-3 ${social.bgColor} ${social.textColor} ${social.color} rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 group border border-gray-200 hover:border-transparent`}
            aria-label={social.ariaLabel}
          >
            <Icon size={iconSizes[size]} className="group-hover:scale-110 transition-transform" />
            <span className="font-medium">{social.name}</span>
            <ExternalLink size={14} className="opacity-60 group-hover:opacity-100 transition-opacity" />
          </button>
        );
      })}
      
      {/* Message Us Button */}
      <button
        onClick={() => handleSocialClick(messageUsLink.url, messageUsLink.name)}
        className={`flex items-center space-x-3 px-6 py-3 ${messageUsLink.bgColor} ${messageUsLink.textColor} ${messageUsLink.color} rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 group border border-gray-200 hover:border-transparent`}
        aria-label={messageUsLink.ariaLabel}
      >
        <MessageCircle size={iconSizes[size]} className="group-hover:scale-110 transition-transform" />
        <span className="font-medium">{messageUsLink.name}</span>
        <ExternalLink size={14} className="opacity-60 group-hover:opacity-100 transition-opacity" />
      </button>
    </div>
  );
};

export default SocialMediaButtons;