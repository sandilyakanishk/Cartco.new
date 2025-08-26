import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  currentIndex: number;
  totalImages: number;
  onPrevious: () => void;
  onNext: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  title,
  description,
  currentIndex,
  totalImages,
  onPrevious,
  onNext
}) => {
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (event.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrevious();
          break;
        case 'ArrowRight':
          onNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrevious, onNext]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      {/* Modal Content */}
      <div 
        className="relative max-w-4xl max-h-[90vh] mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-white transition-all duration-200 shadow-lg"
          aria-label="Close image preview"
        >
          <X size={20} />
        </button>

        {/* Navigation Buttons */}
        {totalImages > 1 && (
          <>
            <button
              onClick={onPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-white transition-all duration-200 shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-white transition-all duration-200 shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Image */}
        <div className="relative">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto max-h-[60vh] object-contain"
            onError={(e) => {
              e.currentTarget.src = 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800';
            }}
          />
          
          {/* Image Counter */}
          {totalImages > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
              {currentIndex + 1} / {totalImages}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 id="modal-title" className="text-2xl font-bold text-gray-900 mb-2">
            {title}
          </h3>
          <p id="modal-description" className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;