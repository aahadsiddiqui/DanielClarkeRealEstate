"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export default function ContactForm() {
    return (
        <section id="contact-form" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Considering Buying or Selling?</h2>
                    <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
                    <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
                        Have a question or ready to start your real estate journey? Fill out the form below and I&apos;ll get back to you as soon as possible.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl"
                >
                    <form
                        action="https://formspree.io/f/mzzovlop"
                        method="POST"
                        className="space-y-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-300">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-midnight/50 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-midnight/50 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-medium text-gray-300">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                className="w-full px-4 py-3 rounded-xl bg-midnight/50 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
                                placeholder="(555) 123-4567"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="service" className="text-sm font-medium text-gray-300">
                                I am interested in...
                            </label>
                            <div className="relative">
                                <select
                                    name="service"
                                    id="service"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-midnight/50 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all appearance-none cursor-pointer"
                                >
                                    <option value="" disabled selected className="bg-midnight text-gray-500">Select an option</option>
                                    <option value="Buying" className="bg-midnight">Buying</option>
                                    <option value="Selling" className="bg-midnight">Selling</option>
                                    <option value="Leasing" className="bg-midnight">Leasing</option>
                                    <option value="Investments" className="bg-midnight">Investments</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gold">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-300">
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                required
                                rows={4}
                                className="w-full px-4 py-3 rounded-xl bg-midnight/50 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all resize-none"
                                placeholder="Please provide the following details: Property Type, # of Bedrooms, # of Bathrooms, Square Footage"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-gold hover:bg-gold/90 text-midnight font-bold py-6 text-lg rounded-xl transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2"
                        >
                            Send Message
                            <Send className="w-5 h-5" />
                        </Button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
