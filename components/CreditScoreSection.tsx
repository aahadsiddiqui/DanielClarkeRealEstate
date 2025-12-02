"use client";

import { motion } from "framer-motion";
import { TrendingUp, AlertCircle, CheckCircle, XCircle } from "lucide-react";

export default function CreditScoreSection() {
    const scoreRanges = [
        {
            range: "760+",
            rating: "Excellent",
            impact: "Best rates available, widest lender options",
            icon: CheckCircle,
            color: "text-green-400"
        },
        {
            range: "700-759",
            rating: "Good",
            impact: "Competitive rates, good lender options",
            icon: CheckCircle,
            color: "text-green-400"
        },
        {
            range: "650-699",
            rating: "Fair",
            impact: "Higher rates, limited lender options",
            icon: AlertCircle,
            color: "text-yellow-400"
        },
        {
            range: "Below 650",
            rating: "Poor",
            impact: "Significantly higher rates, very limited options",
            icon: XCircle,
            color: "text-red-400"
        }
    ];

    return (
        <section id="credit-score" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-midnight/80 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Credit Score Impact in Ontario
                    </h2>
                    <div className="w-20 h-1 bg-gold mx-auto rounded-full mb-6" />
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Your credit score plays a crucial role in determining your mortgage rate and approval chances when buying property in Ontario.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {scoreRanges.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-gold/50 transition-colors"
                        >
                            <div className="flex items-start gap-4">
                                <div className={`p-3 rounded-full bg-white/5 ${item.color}`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-xl font-bold text-white">{item.range}</h3>
                                        <span className={`text-sm font-medium ${item.color}`}>{item.rating}</span>
                                    </div>
                                    <p className="text-gray-400 text-sm">{item.impact}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10"
                    >
                        <h3 className="text-xl font-bold text-white mb-3">Minimum Requirements</h3>
                        <p className="text-gray-400 leading-relaxed mb-4">Your credit score is one of the most important factors lenders consider when you&apos;re applying for a mortgage. In Ontario, understanding the credit score ranges and what they mean can help you prepare for the home-buying process and potentially save you thousands of dollars in interest over the life of your mortgage.</p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            In Canada, the minimum credit score required for an insured mortgage (less than 20% down payment) is typically <span className="text-gold font-bold">600</span>. However, many lenders prefer a score of <span className="text-gold font-bold">680+</span> for their best rates.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10"
                    >
                        <h3 className="text-xl font-bold text-white mb-3">Credit Bureaus</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Lenders in Ontario check your score with Canada&apos;s two main credit bureaus: <span className="text-white font-medium">Equifax</span> and <span className="text-white font-medium">TransUnion</span>. It&apos;s a good idea to check both reports annually for accuracy.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10"
                    >
                        <h3 className="text-xl font-bold text-white mb-3">Lender Impact</h3>
                        <ul className="text-gray-400 text-sm space-y-2">
                            <li><span className="text-gold font-bold">A-Lenders (Banks):</span> Require 680+ for best rates.</li>
                            <li><span className="text-gold font-bold">B-Lenders:</span> Flexible with scores below 600, but higher rates.</li>
                            <li><span className="text-gold font-bold">Private Lenders:</span> Focus on equity over credit score.</li>
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-gold/20"
                >
                    <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-full bg-gold/10">
                            <TrendingUp className="w-6 h-6 text-gold" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Improving Your Credit Score</h3>
                            <p className="text-gray-400">Key strategies to boost your score before applying for a mortgage:</p>
                        </div>
                    </div>
                    <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-3">
                            <span className="text-gold mt-1">•</span>
                            <span>Pay all bills on time - payment history is the most important factor</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-gold mt-1">•</span>
                            <span>Keep credit utilization below 30% of your available credit</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-gold mt-1">•</span>
                            <span>Avoid applying for new credit in the 6 months before your mortgage application</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-gold mt-1">•</span>
                            <span>Review your credit report for errors and dispute any inaccuracies</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-gold mt-1">•</span>
                            <span>Maintain a mix of credit types (credit cards, loans) with a long history</span>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
