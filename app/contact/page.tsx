"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, ArrowLeft } from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <main className="min-h-screen bg-midnight text-silver overflow-x-hidden selection:bg-gold selection:text-midnight">

            <div className="relative z-10">
                {/* Navigation */}
                <div className="pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-gray-300 hover:text-gold transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                </div>

                {/* Hero Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={fadeIn}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Get in <span className="text-gold">Touch</span>
                        </h1>
                        <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-8" />
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Ready to start your real estate journey? Whether you&apos;re buying, selling, or investing, I&apos;m here to provide you with exceptional service and expert guidance.
                        </p>
                    </motion.div>
                </section>

                {/* Contact Info Cards */}
                <section className="px-4 sm:px-6 lg:px-8 mb-20">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.a
                            href="tel:905-409-4565"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-gold/50 transition-all group text-center hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                                <Phone className="w-8 h-8 text-gold" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                            <p className="text-gray-400 group-hover:text-gold transition-colors">905-409-4565</p>
                            <p className="text-sm text-gray-500 mt-2">Available 24/7 - 365 days a year</p>
                        </motion.a>

                        <motion.a
                            href="mailto:Danielclarke.realestate@gmail.com"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-gold/50 transition-all group text-center hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                                <Mail className="w-8 h-8 text-gold" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                            <p className="text-gray-400 group-hover:text-gold transition-colors break-words">Danielclarke.realestate@gmail.com</p>
                            <p className="text-sm text-gray-500 mt-2">Quick Response Time</p>
                        </motion.a>

                        <motion.a
                            href="https://www.google.com/maps/search/?api=1&query=495+Wellington+Street+West+%23100,+Toronto+ON,+M5V+1E9"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-gold/50 transition-all group text-center hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                                <MapPin className="w-8 h-8 text-gold" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Office</h3>
                            <p className="text-gray-400 group-hover:text-gold transition-colors">495 Wellington St W #100</p>
                            <p className="text-sm text-gray-500 mt-2">Toronto, ON M5V 1E9</p>
                        </motion.a>
                    </div>
                </section>

                {/* Contact Form */}
                <div className="mb-20">
                    <ContactForm />
                </div>

                {/* Social Connect */}
                <section className="py-20 bg-white/5 border-t border-white/10">
                    <div className="max-w-4xl mx-auto text-center px-4">
                        <h2 className="text-3xl font-bold text-white mb-8">Connect on Social Media</h2>
                        <div className="flex justify-center gap-8">
                            <a href="https://www.instagram.com/danielclarke.realestate/?hl=en" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-midnight border border-white/10 hover:border-gold/50 text-gray-300 hover:text-gold transition-all hover:scale-110 hover:shadow-[0_0_20px_-5px_rgba(212,175,55,0.3)]">
                                <Instagram className="w-8 h-8" />
                            </a>
                            <a href="https://www.facebook.com/hotmail.commm?mibextid=wwXIfr&rdid=gcGBLViYfKGbYqUJ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1D8nGw8sUD%2F%3Fmibextid%3DwwXIfr#" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-midnight border border-white/10 hover:border-gold/50 text-gray-300 hover:text-gold transition-all hover:scale-110 hover:shadow-[0_0_20px_-5px_rgba(212,175,55,0.3)]">
                                <Facebook className="w-8 h-8" />
                            </a>
                            <a href="http://linkedin.com/in/daniel-lamar-clarke" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-midnight border border-white/10 hover:border-gold/50 text-gray-300 hover:text-gold transition-all hover:scale-110 hover:shadow-[0_0_20px_-5px_rgba(212,175,55,0.3)]">
                                <Linkedin className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
