"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GetStartedModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function GetStartedModal({ isOpen, onClose }: GetStartedModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-lg z-10"
                        >
                            <div className="bg-midnight border border-gold/20 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
                                {/* Close Button */}
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-white mb-2">Let's Get Started</h3>
                                    <p className="text-gray-400 text-sm">
                                        Fill out the form below and I'll help you navigate your real estate journey.
                                    </p>
                                </div>

                                <form
                                    action="https://formspree.io/f/mzzovlop"
                                    method="POST"
                                    className="space-y-4"
                                >
                                    <div>
                                        <label htmlFor="modal-name" className="block text-sm font-medium text-gray-300 mb-1">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="modal-name"
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="modal-email" className="block text-sm font-medium text-gray-300 mb-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="modal-email"
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="modal-phone" className="block text-sm font-medium text-gray-300 mb-1">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="modal-phone"
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
                                            placeholder="(555) 123-4567"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="modal-goal" className="block text-sm font-medium text-gray-300 mb-1">
                                            I'm looking to...
                                        </label>
                                        <select
                                            name="goal"
                                            id="modal-goal"
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all appearance-none cursor-pointer"
                                        >
                                            <option value="Buy" className="bg-midnight">Buy a property</option>
                                            <option value="Sell" className="bg-midnight">Sell a property</option>
                                            <option value="Invest" className="bg-midnight">Invest in real estate</option>
                                            <option value="Other" className="bg-midnight">Other</option>
                                        </select>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-gold hover:bg-gold/90 text-midnight font-bold py-6 text-lg rounded-xl transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_-5px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2 mt-6"
                                    >
                                        Get Started
                                        <Send className="w-4 h-4" />
                                    </Button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
