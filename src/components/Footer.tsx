"use client"

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const Footer = () => {
  const footerLinks = [
    {
      title: "Shop and Learn",
      links: [
        { name: "Store", href: "#" },
        { name: "Mac", href: "#" },
        { name: "iPad", href: "#" },
        { name: "iPhone", href: "#" },
        { name: "Watch", href: "#" },
        { name: "Vision", href: "#" },
        { name: "AirPods", href: "#" },
        { name: "TV & Home", href: "#" },
        { name: "AirTag", href: "#" },
        { name: "Accessories", href: "#" },
        { name: "Gift Cards", href: "#" },
      ]
    },
    {
      title: "Apple Wallet",
      links: [
        { name: "Wallet", href: "#" },
        { name: "Apple Card", href: "#" },
        { name: "Apple Pay", href: "#" },
        { name: "Apple Cash", href: "#" },
      ]
    },
    {
      title: "Account",
      links: [
        { name: "Manage Your Apple ID", href: "#" },
        { name: "Apple Store Account", href: "#" },
        { name: "iCloud.com", href: "#" },
      ]
    },
    {
      title: "Entertainment",
      links: [
        { name: "Apple One", href: "#" },
        { name: "Apple TV+", href: "#" },
        { name: "Apple Music", href: "#" },
        { name: "Apple Arcade", href: "#" },
        { name: "Apple Fitness+", href: "#" },
        { name: "Apple News+", href: "#" },
        { name: "Apple Podcasts", href: "#" },
        { name: "App Store", href: "#" },
      ]
    },
    {
      title: "Apple Store",
      links: [
        { name: "Find a Store", href: "#" },
        { name: "Genius Bar", href: "#" },
        { name: "Today at Apple", href: "#" },
        { name: "Apple Camp", href: "#" },
        { name: "Apple Store App", href: "#" },
        { name: "Certified Refurbished", href: "#" },
        { name: "Apple Trade In", href: "#" },
        { name: "Financing", href: "#" },
        { name: "Carrier Deals at Apple", href: "#" },
        { name: "Order Status", href: "#" },
        { name: "Shopping Help", href: "#" },
      ]
    },
    {
      title: "For Business",
      links: [
        { name: "Apple and Business", href: "#" },
        { name: "Shop for Business", href: "#" },
        { name: "Business Financing", href: "#" },
      ]
    },
    {
      title: "For Education",
      links: [
        { name: "Apple and Education", href: "#" },
        { name: "Shop for K-12", href: "#" },
        { name: "Shop for College", href: "#" },
      ]
    },
    {
      title: "For Healthcare",
      links: [
        { name: "Apple in Healthcare", href: "#" },
        { name: "Health on Apple Watch", href: "#" },
        { name: "Health Records on iPhone", href: "#" },
      ]
    },
    {
      title: "Apple Values",
      links: [
        { name: "Accessibility", href: "#" },
        { name: "Education", href: "#" },
        { name: "Environment", href: "#" },
        { name: "Inclusion and Diversity", href: "#" },
        { name: "Privacy", href: "#" },
        { name: "Racial Equity and Justice", href: "#" },
        { name: "Supplier Responsibility", href: "#" },
      ]
    },
    {
      title: "About Apple",
      links: [
        { name: "Newsroom", href: "#" },
        { name: "Apple Leadership", href: "#" },
        { name: "Career Opportunities", href: "#" },
        { name: "Investors", href: "#" },
        { name: "Ethics & Compliance", href: "#" },
        { name: "Events", href: "#" },
        { name: "Contact Apple", href: "#" },
      ]
    }
  ]

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter Signup */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-apple-display mb-4">
            Stay in the loop
          </h3>
          <p className="text-gray-600 text-apple-body mb-6 max-w-2xl mx-auto">
            Sign up for Apple Store updates and special offers. Plus, get 2‑3 day delivery, free returns, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full max-w-md"
            />
            <motion.button
              className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign up
              <ChevronRight className="ml-2 h-4 w-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {footerLinks.slice(0, 5).map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-apple-display mb-4 text-sm">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 text-apple-caption"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-200 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>Copyright © 2024 Apple Inc. All rights reserved.</span>
              <span>•</span>
              <a href="#" className="hover:text-gray-900 transition-colors duration-200">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-gray-900 transition-colors duration-200">Terms of Use</a>
              <span>•</span>
              <a href="#" className="hover:text-gray-900 transition-colors duration-200">Sales and Refunds</a>
              <span>•</span>
              <a href="#" className="hover:text-gray-900 transition-colors duration-200">Legal</a>
              <span>•</span>
              <a href="#" className="hover:text-gray-900 transition-colors duration-200">Site Map</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">India</span>
              <div className="w-6 h-4 bg-gray-300 rounded"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 