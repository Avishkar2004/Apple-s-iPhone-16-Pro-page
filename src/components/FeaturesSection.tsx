"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Camera, Zap, Shield, Smartphone, Battery, Wifi } from 'lucide-react'

const FeaturesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Camera,
      title: "Pro Camera System",
      description: "48MP Main camera with 2x Telephoto and Ultra Wide cameras. Capture stunning photos and videos in any light.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Zap,
      title: "A18 Pro Chip",
      description: "The most powerful chip ever in a smartphone. 6-core GPU and 16-core Neural Engine for incredible performance.",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: Shield,
      title: "Titanium Design",
      description: "Aerospace-grade titanium with the strongest glass ever in a smartphone. Built to last.",
      color: "from-gray-500 to-slate-600"
    },
    {
      icon: Smartphone,
      title: "6.1\" Super Retina XDR",
      description: "Always-On display with ProMotion technology up to 120Hz. HDR content looks incredible.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Battery,
      title: "All-day Battery Life",
      description: "Up to 23 hours of video playback. Fast charging and wireless charging support.",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Wifi,
      title: "5G & Wi-Fi 6E",
      description: "Ultra-fast 5G connectivity and Wi-Fi 6E for lightning-fast downloads and streaming.",
      color: "from-indigo-500 to-blue-600"
    }
  ]

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-apple-display mb-6">
            Pro Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-apple-body">
            Every detail has been reimagined to create the most advanced iPhone ever.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative p-8 rounded-3xl bg-gray-50 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Icon */}
              <motion.div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-apple-display mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-apple-body leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn more about iPhone 16 Pro
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection 