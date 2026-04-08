"use client";

import { motion } from "motion/react";
import { Smartphone } from "lucide-react";

export function GetApp() {
  return (
    <section id="get-app" className="py-32 relative" style={{ backgroundColor: "#0b0b0e" }}>
      {/* Orange separator - top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#EF9622]" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center">
          {/* Coming Soon Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-8"
          >
            <div className="flex items-center gap-2 px-6 py-3 border border-[#EF9622] rounded-full">
              <Smartphone className="w-5 h-5 text-[#EF9622]" />
              <span className="text-[#EF9622] font-medium text-sm tracking-wider uppercase">
                Coming Soon
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get the <span style={{ color: "#EF9622" }}>Loopa App</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
              Download Loopa on your favorite platform and start discovering amazing local makers in your neighborhood.
            </p>
          </motion.div>

          {/* App Store Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            {/* Apple App Store */}
            <button
              disabled
              className="group relative flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/20 rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-64"
            >
              <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <div className="text-left">
                <div className="text-white/60 text-xs mb-1">Download on the</div>
                <div className="text-white font-semibold text-lg">App Store</div>
              </div>
            </button>

            {/* Google Play Store */}
            <button
              disabled
              className="group relative flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/20 rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-64"
            >
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92z" fill="#32BBFF" />
                <path d="M13.792 12L3.609 1.814a1 1 0 0 1 1.065-.24L17.5 8.401 13.792 12z" fill="#32BBFF" />
                <path d="M13.792 12l3.708 3.599L4.674 22.426a1.001 1.001 0 0 1-1.065-.241L13.792 12z" fill="#32BBFF" />
                <path d="M13.792 12L17.5 8.401l4.512 2.611a1 1 0 0 1 0 1.722L17.5 15.599 13.792 12z" fill="#32BBFF" />
              </svg>
              <div className="text-left">
                <div className="text-white/60 text-xs mb-1">GET IT ON</div>
                <div className="text-white font-semibold text-lg">Google Play</div>
              </div>
            </button>
          </motion.div>

          {/* Notification Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-white/40 text-sm mt-12"
          >
            Be the first to know when we launch. Join our waitlist below!
          </motion.p>
        </div>
      </div>

      {/* Orange separator - bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#EF9622]" />
    </section>
  );
}
