import React from 'react';

interface GoogleMapProps {
  title?: string;
  description?: string;
  className?: string;
  height?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ 
  title = "Our Location",
  description = "Visit us at our store location",
  className = '',
  height = '450px'
}) => {
  return (
    <section className={`google-maps-section ${className}`} aria-labelledby="map-heading">
      <div className="container-fluid p-0">
        {/* Map Header */}
        <div className="map-header text-center py-6 bg-light-100 rounded-t-2xl">
          <h3 id="map-heading" className="text-2xl font-bold text-primary-900 mb-2">
            {title}
          </h3>
          {description && (
            <p className="text-primary-600 mb-0">{description}</p>
          )}
        </div>

        {/* Responsive Map Container */}
        <div className="map-container relative">
          <div className="relative" style={{ minHeight: height }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3558.7911495040094!2d80.9924427!3d26.8783758!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2af68d49aeb%3A0x3c01701d114f92da!2sAryan%20steel!5e0!3m2!1sen!2sin!4v1755822030264!5m2!1sen!2sin"
              className="border-0 w-full h-full rounded-b-2xl"
              style={{ height: height }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aryan Steel Location - Interactive Map"
              aria-label="Interactive map showing the location of Aryan Steel"
            />
          </div>
        </div>

        {/* Map Footer with Additional Info */}
        <div className="map-footer bg-primary-800 text-white py-4 rounded-b-2xl">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full" />
                <div>
                  <h6 className="font-bold text-white mb-1">CartCo Location</h6>
                  <p className="text-sm text-light-300">
                    Click and drag to explore • Use + and - to zoom • Click for directions
                  </p>
                </div>
              </div>
              <div className="mt-3 md:mt-0">
                <a 
                  href="https://www.google.com/maps/place/Aryan+steel/@26.8783758,80.9924427,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors"
                  aria-label="Open CartCo location in Google Maps (opens in new tab)"
                >
                  <span>Open in Maps</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;