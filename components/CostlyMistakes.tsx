"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, FileSearch, Home, DollarSign, Users, Clock } from "lucide-react";
import GetStartedModal from "@/components/GetStartedModal";

export default function CostlyMistakes() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const mistakes = [
        {
            icon: FileSearch,
            title: "Skipping the Home Inspection",
            description: "Waiving inspections to make your offer more competitive can lead to discovering costly repairs after purchase. Always invest in a thorough inspection to avoid unexpected expenses.",
            cost: "Potential $10,000-$50,000+ in hidden repairs"
        },
        {
            icon: DollarSign,
            title: "Not Getting Pre-Approved",
            description: "Shopping for homes without mortgage pre-approval wastes time and can lead to disappointment. You might fall in love with a property you can't afford or miss out on your dream home.",
            cost: "Lost opportunities and wasted time"
        },
        {
            icon: Home,
            title: "Ignoring Future Resale Value",
            description: "Buying based solely on current needs without considering resale potential can make it difficult to sell later. Think about location, schools, and neighborhood trends.",
            cost: "Difficulty selling or 10-20% lower resale value"
        },
        {
            icon: Users,
            title: "Working Without a Realtor",
            description: "Attempting to navigate the complex real estate market alone can result in overpaying, missing red flags, or legal issues. An experienced realtor provides invaluable guidance and negotiation skills.",
            cost: "Overpaying by 3-5% or legal complications"
        },
        {
            icon: Clock,
            title: "Rushing the Decision",
            description: "Making hasty decisions due to market pressure or emotional attachment can lead to buyer's remorse. Take time to research, compare properties, and ensure the home meets your needs.",
            cost: "Buyer's remorse and potential financial strain"
        }
    ];

    return (
        <section id="costly-mistakes" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-midnight/80 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-3 mb-4">
                        <AlertTriangle className="w-8 h-8 text-gold" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            5 Costly Mistakes to Avoid
                        </h2>
                    </div>
                    <div className="w-20 h-1 bg-gold mx-auto rounded-full mb-6" />
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Learn from common pitfalls that can cost buyers thousands of dollars and significant stress. Avoid these mistakes to ensure a smooth home-buying experience.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mistakes.map((mistake, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-gold/50 transition-all group"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-colors">
                                    <mistake.icon className="w-6 h-6 text-gold" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-lg font-bold text-white leading-tight">{mistake.title}</h3>
                                        <span className="text-gold font-bold text-xl ml-2">{index + 1}</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                {mistake.description}
                            </p>
                            <div className="pt-4 border-t border-white/10">
                                <p className="text-xs text-gold font-medium">Potential Impact:</p>
                                <p className="text-sm text-gray-300 mt-1">{mistake.cost}</p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Call to Action Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="bg-gradient-to-br from-gold/20 to-gold/5 backdrop-blur-xl p-6 rounded-2xl border border-gold/30 flex flex-col justify-center items-center text-center"
                    >
                        <div className="p-4 rounded-full bg-gold/20 mb-4">
                            <Users className="w-8 h-8 text-gold" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Need Expert Guidance?</h3>
                        <p className="text-gray-300 text-sm mb-4">
                            Let me help you navigate the home-buying process and avoid these costly mistakes.
                        </p>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-block px-6 py-3 bg-gold hover:bg-gold/90 text-midnight font-bold rounded-full transition-all hover:scale-105"
                        >
                            Get Started
                        </button>
                    </motion.div>
                </div>
            </div>

            <GetStartedModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
}
