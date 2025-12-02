"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Calculator, DollarSign, Percent, Calendar } from "lucide-react";

export default function MortgageCalculator() {
    const [purchasePrice, setPurchasePrice] = useState(500000);
    const [downPayment, setDownPayment] = useState(100000);
    const [interestRate, setInterestRate] = useState(5.5);
    const [amortization, setAmortization] = useState(25);

    const loanAmount = purchasePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = amortization * 12;

    const monthlyPayment = loanAmount *
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalPaid = monthlyPayment * numberOfPayments;
    const totalInterest = totalPaid - loanAmount;
    const downPaymentPercent = (downPayment / purchasePrice) * 100;

    return (
        <section id="mortgage-calculator" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Mortgage Calculator
                    </h2>
                    <div className="w-20 h-1 bg-gold mx-auto rounded-full mb-6" />
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Calculate your estimated monthly mortgage payments and see how different factors affect your costs.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Input Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 rounded-full bg-gold/10">
                                <Calculator className="w-6 h-6 text-gold" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Input Details</h3>
                        </div>

                        <div className="space-y-6">
                            {/* Purchase Price */}
                            <div>
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                                    <DollarSign className="w-4 h-4 text-gold" />
                                    Purchase Price
                                </label>
                                <input
                                    type="number"
                                    value={purchasePrice}
                                    onChange={(e) => setPurchasePrice(Number(e.target.value))}
                                    className="w-full px-4 py-3 rounded-xl bg-midnight/50 border border-white/10 text-white focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
                                />
                                <input
                                    type="range"
                                    min="100000"
                                    max="2000000"
                                    step="10000"
                                    value={purchasePrice}
                                    onChange={(e) => setPurchasePrice(Number(e.target.value))}
                                    className="w-full mt-2 accent-gold"
                                />
                            </div>

                            {/* Down Payment */}
                            <div>
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                                    <DollarSign className="w-4 h-4 text-gold" />
                                    Down Payment ({downPaymentPercent.toFixed(1)}%)
                                </label>
                                <input
                                    type="number"
                                    value={downPayment}
                                    onChange={(e) => setDownPayment(Number(e.target.value))}
                                    className="w-full px-4 py-3 rounded-xl bg-midnight/50 border border-white/10 text-white focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
                                />
                                <input
                                    type="range"
                                    min="0"
                                    max={purchasePrice * 0.5}
                                    step="5000"
                                    value={downPayment}
                                    onChange={(e) => setDownPayment(Number(e.target.value))}
                                    className="w-full mt-2 accent-gold"
                                />
                            </div>

                            {/* Interest Rate */}
                            <div>
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                                    <Percent className="w-4 h-4 text-gold" />
                                    Interest Rate (Annual)
                                </label>
                                <input
                                    type="number"
                                    step="0.1"
                                    value={interestRate}
                                    onChange={(e) => setInterestRate(Number(e.target.value))}
                                    className="w-full px-4 py-3 rounded-xl bg-midnight/50 border border-white/10 text-white focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
                                />
                                <input
                                    type="range"
                                    min="2"
                                    max="10"
                                    step="0.1"
                                    value={interestRate}
                                    onChange={(e) => setInterestRate(Number(e.target.value))}
                                    className="w-full mt-2 accent-gold"
                                />
                            </div>

                            {/* Amortization */}
                            <div>
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                                    <Calendar className="w-4 h-4 text-gold" />
                                    Amortization Period (Years)
                                </label>
                                <input
                                    type="number"
                                    value={amortization}
                                    onChange={(e) => setAmortization(Number(e.target.value))}
                                    className="w-full px-4 py-3 rounded-xl bg-midnight/50 border border-white/10 text-white focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
                                />
                                <input
                                    type="range"
                                    min="5"
                                    max="30"
                                    step="1"
                                    value={amortization}
                                    onChange={(e) => setAmortization(Number(e.target.value))}
                                    className="w-full mt-2 accent-gold"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Results Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="bg-gradient-to-br from-gold/20 to-gold/5 backdrop-blur-xl p-8 rounded-3xl border border-gold/30">
                            <h3 className="text-sm font-medium text-gray-300 mb-2">Monthly Payment</h3>
                            <p className="text-5xl font-bold text-white mb-1">
                                ${isNaN(monthlyPayment) ? '0' : monthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                            </p>
                            <p className="text-sm text-gray-400">per month</p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                            <h3 className="text-sm font-medium text-gray-300 mb-4">Payment Breakdown</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Loan Amount</span>
                                    <span className="text-white font-semibold">
                                        ${loanAmount.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Total Interest</span>
                                    <span className="text-white font-semibold">
                                        ${isNaN(totalInterest) ? '0' : totalInterest.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                                    <span className="text-gray-400">Total Paid</span>
                                    <span className="text-gold font-bold text-lg">
                                        ${isNaN(totalPaid) ? '0' : totalPaid.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                            <p className="text-sm text-gray-400">
                                <span className="text-gold font-medium">Note:</span> This calculator provides estimates only.
                                Actual payments may vary based on property taxes, insurance, and other factors.
                                Contact me for a detailed mortgage analysis.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
