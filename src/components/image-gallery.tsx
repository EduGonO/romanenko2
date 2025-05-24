"use client";

import { useState, useEffect, useRef } from "react";

interface ImageGalleryProps {
  images: string[];
  title: string;
  dimensions: string;
}

export function ImageGallery({ images, title, dimensions }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Set up refs array for each image
  useEffect(() => {
    imageRefs.current = imageRefs.current.slice(0, images.length);
  }, [images]);

  // Handle scroll snap
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      // Find which image is most visible in the container
      const containerCenter = containerRef.current.scrollLeft + containerRef.current.offsetWidth / 2;

      let minDistance = Infinity;
      let closestIndex = 0;

      imageRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const imageCenter = ref.offsetLeft + rect.width / 2;
        const distance = Math.abs(containerCenter - imageCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setCurrentIndex(closestIndex);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      // Initial run
      handleScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // Scroll to specific image
  const scrollToImage = (index: number) => {
    if (imageRefs.current[index] && containerRef.current) {
      const container = containerRef.current;
      const image = imageRefs.current[index];

      const imageCenter = image.offsetLeft + image.offsetWidth / 2;
      const scrollPosition = imageCenter - container.offsetWidth / 2;

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto md:mx-0">
      {/* Image container with snap scroll */}
      <div
        ref={containerRef}
        className="w-full relative overflow-x-auto pb-4 hide-scrollbar flex scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            ref={el => imageRefs.current[index] = el}
            className="w-full min-w-full px-1 flex-shrink-0 snap-center"
          >
            <img
              src={src}
              alt={`${title} - image ${index + 1}`}
              className="w-full h-auto object-contain aspect-[3/4]"
            />
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center space-x-2 mt-2 mb-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-300"
            }`}
            onClick={() => scrollToImage(index)}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>

      {/* Dimensions */}
      <p className="text-center text-sm mt-1">{dimensions}</p>
    </div>
  );
}
