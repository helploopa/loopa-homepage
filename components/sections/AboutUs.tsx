"use client";

import { motion } from "motion/react";
import Image from "next/image";

const founders = [
  {
    name: "Sarathbabu",
    role: "Founder",
    bio: "I'm Sarath, the founder of Loopa. I'm an IT professional who loves traveling and exploring new places with my family and friends. I've always had an entrepreneurial mindset and a passion for helping small businesses and home-based makers grow and scale.\n\nWhen I'm not working, you'll often find me playing cricket with friends or hiking in nature — activities that remind me how important strong community connections really are.",
    image: "/images/team/sarathbabu.png",
  },
  {
    name: "Santosh",
    role: "Co-Founder",
    bio: "Seasoned IT professional with a strong educational foundation in computer science and business management, complemented by extensive experience in designing and building highly scalable business applications. Proven track record as a catalyst in incubating and supporting multiple startup ventures, driving innovation and growth.\n\nBeyond professional pursuits, a dedicated father to a teenager with a passion for hiking and motorcycling, embracing both adventure and balance in life.",
    image: "/images/team/santosh.png",
  },
];

export function AboutUs() {
  return (
    <section id="about-us" className="py-32 relative" style={{ backgroundColor: "#0b0b0e" }}>
      {/* Orange separator - top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#EF9622]" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Meet the <span style={{ color: "#EF9622" }}>Team</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            The passionate minds behind Loopa, dedicated to bringing neighborhoods and local makers together.
          </p>
        </motion.div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Image Container */}
              <div className="relative mb-8 overflow-hidden rounded-2xl aspect-square">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Name overlay */}
                <div className="absolute bottom-8 left-8 z-20">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-[#EF9622] text-lg font-medium">{founder.role}</p>
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-4">
                {founder.bio.split("\n\n").map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-white/70 text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Orange separator - bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#EF9622]" />
    </section>
  );
}
