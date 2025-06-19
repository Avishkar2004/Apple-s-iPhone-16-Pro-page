"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    {
      src: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-naturaltitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NVJrY0tZVVQzOFFrQ2FwbFZZamEzeEpOZTBYalh5Vk90cEc1K2wwRzFGejRMeXJHUnUva2huMjl4akFHOXNwVjA0YXFmK3VWSWZuRE9oVEFyUFR0T2hWSm5HQVhUeDlTTVJFSzVnTlpqdUV3&traceId=1",
      alt: "iPhone 16 Pro - Natural Titanium",
      title: "Natural Titanium",
      description: "Aerospace-grade titanium with a natural finish",
    },
    {
      src: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "iPhone 16 Pro - Blue Titanium",
      title: "Blue Titanium",
      description: "Deep blue titanium with a premium finish",
    },
    {
      src: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-whitetitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NkppVHhtRktGckFBd2ZPSmpuTHdJcWlCQmV2WTA2cncybDF2YzFnKzI0S2prMCtUNWwzYWR0UVU3TWVsbEdUeXZka3Q2dVFYV2lxTm4wNXBJcGZoM1QzVmtFSHJkUURvdVZmQktGTnNPd1Z3&traceId=1",
      alt: "iPhone 16 Pro - White Titanium",
      title: "White Titanium",
      description: "Pure white titanium with a clean aesthetic",
    },
    {
      src: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-blacktitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NzFzS1BRRzA4NTJUci9vckVTY21rM2lCQmV2WTA2cncybDF2YzFnKzI0S2prMCtUNWwzYWR0UVU3TWVsbEdUeXZka3Q2dVFYV2lxTm4wNXBJcGZoM1RkcERRMUVIWTBwNlRNS3dVelNTTTVB&traceId=1",
      alt: "iPhone 16 Pro - Black Titanium",
      title: "Black Titanium",
      description: "Deep black titanium with a sophisticated look",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-apple-display mb-6">
            Four Stunning Finishes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-apple-body">
            Choose from four beautiful titanium finishes, each with its own
            unique character.
          </p>
        </motion.div>

        {/* Main Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Display */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full"
              >
                <Image
                  src={images[activeImage].src}
                  alt={images[activeImage].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </div>

            {/* Floating specs */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-apple-display">
                  6.1&quot;
                </div>
                <div className="text-sm text-gray-600 text-apple-caption">
                  Super Retina XDR
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Color Options */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <h3 className="text-3xl font-bold text-apple-display mb-4">
                Choose Your Finish
              </h3>
              <p className="text-gray-600 text-apple-body mb-8">
                Each finish is created using a unique process that gives it a
                distinctive look and feel.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <motion.button
                  key={index}
                  className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                    activeImage === index
                      ? "border-black bg-white shadow-lg"
                      : "border-gray-200 bg-gray-50 hover:border-gray-300"
                  }`}
                  onClick={() => setActiveImage(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-gray-100 to-gray-200 relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-apple-display mb-1">
                      {image.title}
                    </h4>
                    <p className="text-sm text-gray-600 text-apple-caption">
                      {image.description}
                    </p>
                  </div>

                  {/* Active indicator */}
                  {activeImage === index && (
                    <motion.div
                      className="absolute top-4 right-4 w-6 h-6 bg-black rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Specifications */}
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h4 className="font-semibold text-apple-display mb-4">
                Specifications
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-600 text-apple-caption">
                    Display
                  </div>
                  <div className="font-medium">6.1&quot; Super Retina XDR</div>
                </div>
                <div>
                  <div className="text-gray-600 text-apple-caption">Chip</div>
                  <div className="font-medium">A18 Pro</div>
                </div>
                <div>
                  <div className="text-gray-600 text-apple-caption">Camera</div>
                  <div className="font-medium">Pro Camera System</div>
                </div>
                <div>
                  <div className="text-gray-600 text-apple-caption">
                    Storage
                  </div>
                  <div className="font-medium">128GB - 1TB</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
