"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, Instagram, Linkedin, Facebook, Coffee, ChevronDown, Home as HomeIcon, Tag, Key, TrendingUp, MapPin } from "lucide-react";
import Scene from "@/components/Scene";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main className="min-h-screen bg-midnight text-silver overflow-x-hidden selection:bg-gold selection:text-midnight">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0 opacity-50 pointer-events-none">
        <Scene />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-64 h-64 md:w-80 md:h-80 mb-12 rounded-full overflow-hidden border-[3px] border-gold shadow-[0_0_40px_-10px_rgba(212,175,55,0.3)]"
        >
          <Image
            src="/daniel-clarke.jpg"
            alt="Daniel Clarke"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="text-center w-full max-w-[90vw] mx-auto"
        >
          <motion.h1
            variants={fadeIn}
            className="text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight text-white whitespace-nowrap"
          >
            Welcome to <span className="text-gold">Daniel Clarke</span> Real Estate
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-lg sm:text-xl md:text-2xl font-medium tracking-widest text-gold/90 uppercase mb-8"
          >
            Confidence. Luxury. Comfort.
          </motion.p>

          <motion.div variants={fadeIn} className="w-32 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-10" />

          <motion.p
            variants={fadeIn}
            className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-16 max-w-3xl mx-auto"
          >
            Hello, my name is Daniel Clarke. I&apos;m a trusted representative of <span className="text-white font-medium">Royal LePage Signature Realty</span> and <span className="text-white font-medium">The Realty Boutique Team</span>. I am passionate about helping clients navigate the real estate market with confidence to find their perfect home or investment.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
          className="absolute bottom-8"
        >
          <ChevronDown className="w-10 h-10 text-gold opacity-80" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-midnight/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 border-l-4 border-gold pl-4">Here’s a little about myself</h2>

            <p>
              I’m a proud graduate of <span className="text-white font-medium">Ryerson University (currently known as TMU)</span>, where I earned my Bachelor of Commerce degree with a major in Real Estate Management.
            </p>

            <p>
              After completing my degree, I spent 4 years working part-time at Royal LePage Signature on the administrative side, where I gained hands-on experience with the day-to-day task of a sales representative. Also the operations, paperwork and processes behind both residential and commercial transactions.
            </p>

            <p>
              During that time, I also completed the required courses to become a licensed Sales representative and began building my network and relationships within the industry.
            </p>

            <p>
              My passion for real estate began at age of 16, and from that moment, I knew this was the career I wanted to pursue. Since then, I’ve taken all the necessary steps to turn that dream into a reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Services</h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: HomeIcon,
                title: "Buying",
                desc: "Finding your dream home with expert guidance."
              },
              {
                icon: Tag,
                title: "Selling",
                desc: "Strategic marketing to get top dollar for your property."
              },
              {
                icon: Key,
                title: "Leasing",
                desc: "Connecting tenants and landlords seamlessly."
              },
              {
                icon: TrendingUp,
                title: "Investing",
                desc: "Building wealth through smart real estate opportunities."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-gold/50 transition-colors group text-center"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                  <service.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & CTA Section */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-gold/20 shadow-[0_0_60px_-15px_rgba(212,175,55,0.15)] relative overflow-hidden"
          >
            {/* Decorative shimmer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-transparent pointer-events-none" />

            <p className="text-xl md:text-2xl mb-8 text-gray-200 relative z-10">
              I look forward to helping you all with your real estate needs. Whether you or someone you know is looking to <span className="text-gold font-bold">Buy, Sell, Lease, or Invest</span>, I’d be more than happy to help.
            </p>

            <p className="text-2xl md:text-3xl font-bold text-white mb-8 relative z-10">
              If you’re thinking about making a move, let’s connect!
            </p>

            <p className="text-gold text-xl font-medium italic relative z-10">
              Let’s make your real estate dreams a reality!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coffee Section */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        {/* Coffee Section Redesign */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-left space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-1 bg-gold rounded-full" />
                <span className="text-gold font-medium tracking-widest uppercase">Let&apos;s Chat</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Coffee on me! <br />
                <span className="text-gray-400">Let&apos;s discuss your future.</span>
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                I’d love to learn more about your needs and requirements to help you find the property that you&apos;re looking for. Let&apos;s grab a coffee and make a plan.
              </p>

              <a href="mailto:Danielclarke.realestate@gmail.com" className="inline-block">
                <Button className="bg-gold hover:bg-gold/90 text-midnight font-bold px-10 py-7 text-lg rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.4)]">
                  Let&apos;s Connect
                </Button>
              </a>
            </motion.div>

            {/* Image Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center md:justify-end"
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gold/20 blur-[60px] rounded-full" />
                <Image
                  src="/coffee.png?v=2"
                  alt="Coffee Cup"
                  fill
                  className="object-contain drop-shadow-2xl relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Contact/Footer Section */}
      <footer id="contact" className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 bg-midnight border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">Daniel Clarke</h3>
            <p className="text-xl text-gold">Sales Representative</p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 my-8">
              <a href="tel:905-409-4565" className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors group whitespace-nowrap">
                <div className="p-3 rounded-full bg-white/5 group-hover:bg-gold/20 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <span>905-409-4565</span>
              </a>

              <a href="mailto:Danielclarke.realestate@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors group whitespace-nowrap">
                <div className="p-3 rounded-full bg-white/5 group-hover:bg-gold/20 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <span>Danielclarke.realestate@gmail.com</span>
              </a>

              <a href="https://www.google.com/maps/search/?api=1&query=495+Wellington+Street+West+%23100,+Toronto+ON,+M5V+1E9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors group whitespace-nowrap">
                <div className="p-3 rounded-full bg-white/5 group-hover:bg-gold/20 transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <span>495 Wellington Street West #100, Toronto ON, M5V 1E9</span>
              </a>
            </div>

            <div className="flex justify-center gap-12">
              {/* Instagram */}
              <div className="text-center">
                <div className="text-gold font-bold text-lg mb-2">12,200+</div>
                <div className="text-gray-400 text-sm mb-3">Followers</div>
                <a href="https://www.instagram.com/danielclarke.realestate/?hl=en" target="_blank" rel="noopener noreferrer" className="inline-block p-3 rounded-full bg-white/5 hover:bg-gold/20 text-gray-300 hover:text-gold transition-all hover:scale-110">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>

              {/* Facebook */}
              <div className="text-center">
                <div className="text-gold font-bold text-lg mb-2">1,000+</div>
                <div className="text-gray-400 text-sm mb-3">Followers</div>
                <a href="https://www.facebook.com/hotmail.commm?mibextid=wwXIfr&rdid=gcGBLViYfKGbYqUJ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1D8nGw8sUD%2F%3Fmibextid%3DwwXIfr#" target="_blank" rel="noopener noreferrer" className="inline-block p-3 rounded-full bg-white/5 hover:bg-gold/20 text-gray-300 hover:text-gold transition-all hover:scale-110">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>

              {/* LinkedIn */}
              <div className="text-center">
                <div className="text-gold font-bold text-lg mb-2">500+</div>
                <div className="text-gray-400 text-sm mb-3">Followers</div>
                <a href="http://linkedin.com/in/daniel-lamar-clarke" target="_blank" rel="noopener noreferrer" className="inline-block p-3 rounded-full bg-white/5 hover:bg-gold/20 text-gray-300 hover:text-gold transition-all hover:scale-110">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Marketing Outreach Stats */}
            <div className="mt-8 text-center">
              <div className="text-gray-400 text-sm mb-1">Marketing Outreach</div>
              <div className="text-gold font-bold text-2xl">200,000+ Views</div>
              <div className="text-gray-500 text-xs">Average per month</div>
            </div>

            {/* Company Logos */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                <div className="relative w-32 h-16 md:w-40 md:h-20 opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/realty-boutique-logo.png"
                    alt="The Realty Boutique"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-32 h-16 md:w-40 md:h-20 opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/rlp-signature-logo.png"
                    alt="RLP Signature"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-32 h-16 md:w-40 md:h-20 opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/reco-logo.png"
                    alt="RECO"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
