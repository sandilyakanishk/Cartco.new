import React from 'react';

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high' | 'extreme';
  enableMobile?: boolean;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ 
  children, 
  className = ''
}) => {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
};

export default ParallaxBackground;