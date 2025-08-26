import React, { useState } from 'react';
import { Phone, Mail, Instagram, Facebook, MessageCircle, MapPin, Clock, Send } from 'lucide-react';
import GoogleMap from './GoogleMap';
import SocialMediaButtons from './SocialMediaButtons';

interface ContactProps {
  onWhatsAppClick: () => void;
}

const Contact: React.FC<ContactProps> = ({ onWhatsAppClick }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    business: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.phone.trim() || !formData.business.trim()) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Create WhatsApp message with form data
    const whatsappMessage = `Hi CartCo! 

My name is: ${formData.name}
Phone: ${formData.phone}

About my business:
${formData.business}

I'm interested in your food carts and would like to get more information and a quote.`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/916389230688?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp in new tab
    const whatsappWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Fallback if popup is blocked
    if (!whatsappWindow) {
      // Try direct navigation as fallback
      window.location.href = whatsappUrl;
    }
    
    // Reset form after successful submission
    setFormData({
      name: '',
      phone: '',
      business: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 6389230688',
      href: 'tel:+916389230688'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'cartco2025@gmail.com',
      href: 'mailto:cartco2025@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'D-315, Indira Nagar, Lucknow, 226016',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-200 to-gray-100 relative overflow-hidden">
      {/* Depth Effect Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 via-gray-800/6 to-slate-700/12 pointer-events-none" />
      
      {/* Floating depth elements */}
      <div className="absolute top-12 left-16 w-88 h-88 bg-gradient-radial from-gray-600/16 via-slate-500/10 to-transparent rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-24 right-20 w-72 h-72 bg-gradient-radial from-slate-700/14 via-gray-600/8 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(71,85,105,0.20)_0%,transparent_55%,rgba(100,116,139,0.16)_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(75,85,99,0.15),transparent_75%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(71,85,105,0.12),transparent_65%)] pointer-events-none" />
      
      {/* Subtle geometric elements */}
      <div className="absolute top-36 right-16 w-20 h-20 bg-slate-400/18 rounded-lg blur-sm animate-pulse rotate-12" />
      <div className="absolute bottom-36 left-20 w-32 h-32 bg-gray-500/15 rounded-full blur-md animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Small Logo Particles */}
      <div className="absolute top-36 left-1/6 w-8 h-8 opacity-10 blur-md animate-float">
        <img src="/file.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-60 right-1/5 w-6 h-6 opacity-8 blur-lg animate-float" style={{ animationDelay: '2.5s' }}>
        <img src="/file.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-52 left-1/3 w-9 h-9 opacity-12 blur-sm animate-float" style={{ animationDelay: '4s' }}>
        <img src="/file.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-84 left-16 w-7 h-7 opacity-6 blur-md animate-float" style={{ animationDelay: '1.5s' }}>
        <img src="/file.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-76 right-20 w-5 h-5 opacity-10 blur-lg animate-float" style={{ animationDelay: '3.5s' }}>
        <img src="/file.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-72 right-1/4 w-10 h-10 opacity-8 blur-sm animate-float" style={{ animationDelay: '5s' }}>
        <img src="/file.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-64 left-1/4 w-6 h-6 opacity-12 blur-md animate-float" style={{ animationDelay: '2s' }}>
        <img src="/file.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-96 right-12 w-8 h-8 opacity-6 blur-lg animate-float" style={{ animationDelay: '4.5s' }}>
        <img src="/file.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            Ready to start your mobile food business with our integrated cooking solutions? 
            Contact us today for a personalized quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-light-300 shadow-lg">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary-900 mb-2">Send us a Message</h3>
              <p className="text-primary-600">We'll get back to you within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white border border-light-400 text-primary-900 placeholder-primary-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              />
              
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white border border-light-400 text-primary-900 placeholder-primary-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              />
              
              <textarea
                name="business"
                placeholder="Tell us about your business..."
                value={formData.business}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white border border-light-400 text-primary-900 placeholder-primary-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
              />
              
              <button
                type="submit"
                className="w-full bg-primary-700 text-white py-4 rounded-lg font-semibold hover:bg-primary-800 transition-all duration-300 flex items-center justify-center space-x-2 group shadow-md hover:shadow-lg"
              >
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/60 transition-all duration-300 group backdrop-blur-sm"
                    >
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                        <Icon size={20} className="text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-900">{item.title}</h4>
                        <p className="text-primary-600">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-light-300 shadow-md">
              <div className="flex items-center space-x-3 mb-4">
                <Clock size={20} className="text-primary-600" />
                <h4 className="font-semibold text-primary-900">Business Hours</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-primary-600">Monday - Saturday</span>
                  <span className="font-semibold text-primary-900">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary-600">Sunday</span>
                  <span className="font-semibold text-primary-900">10:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-primary-900 mb-4">Connect With Us</h4>
              <SocialMediaButtons 
                variant="default" 
                size="md" 
                className="flex-col space-y-3"
              />
            </div>

            {/* WhatsApp Support */}
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <div className="flex items-center space-x-3 mb-3">
                <MessageCircle size={20} className="text-green-600" />
                <h4 className="font-semibold text-primary-900">Need Instant Help?</h4>
              </div>
              <p className="text-primary-600 text-sm mb-4">
                Chat with our experts on WhatsApp for immediate assistance and quick quotes.
              </p>
              <button
                onClick={onWhatsAppClick}
                className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <GoogleMap 
          title="Our Location"
          description="Visit us at our store location"
          height="400px"
          className="rounded-2xl overflow-hidden shadow-lg"
        />
      </div>
    </section>
  );
};

export default Contact;