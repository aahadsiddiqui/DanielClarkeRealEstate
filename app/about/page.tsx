"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, GraduationCap, Award, TrendingUp, Users, Heart, MapPin, Star, CheckCircle, Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function AboutPage() {
    const [yearsExperience, setYearsExperience] = useState(0);
    const [clientsServed, setClientsServed] = useState(0);
    const [propertiesSold, setPropertiesSold] = useState(0);

    // Animated counter effect
    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        let step = 0;
        const timer = setInterval(() => {
            step++;
            setYearsExperience(Math.min(Math.floor((step / steps) * 1), 1));
            setClientsServed(Math.min(Math.floor((step / steps) * 50), 50));
            setPropertiesSold(Math.min(Math.floor((step / steps) * 10), 10));

            if (step >= steps) clearInterval(timer);
        }, interval);

        return () => clearInterval(timer);
    }, []);

    const timeline = [
        { year: "2016", title: "The Beginning", description: "Discovered my passion for real estate at age 16" },
        { year: "2021", title: "University Graduate", description: "Earned Bachelor of Commerce in Real Estate Management from TMU (Ryerson)" },
        { year: "2021-2025", title: "Building Connections", description: "4 years networking and building valuable connections that shaped my future" },
        { year: "2025", title: "Licensed Sales Representative", description: "Completed licensing and began serving clients professionally" },
        { year: "Present", title: "Your Trusted Partner", description: "Helping clients achieve their real estate dreams" }
    ];

    const values = [
        {
            icon: CheckCircle,
            title: "Confidence",
            description: "Backed by education, experience, and a proven track record in the Toronto real estate market."
        },
        {
            icon: Star,
            title: "Luxury",
            description: "Providing premium service and access to exclusive properties that match your sophisticated lifestyle."
        },
        {
            icon: Heart,
            title: "Comfort",
            description: "Making your real estate journey stress-free with personalized attention and expert guidance."
        }
    ];

    const whyChooseMe = [
        {
            icon: GraduationCap,
            title: "Specialized Education",
            description: "Bachelor of Commerce in Real Estate Management from TMU, giving me deep market insights and analytical skills."
        },
        {
            icon: Award,
            title: "Industry Networking",
            description: "4 years building valuable connections and relationships within the real estate industry that benefit my clients."
        },
        {
            icon: Users,
            title: "Client-First Approach",
            description: "Your goals are my priority. I take time to understand your needs and deliver personalized solutions."
        },
        {
            icon: TrendingUp,
            title: "Market Expertise",
            description: "In-depth knowledge of Toronto and GTA market trends, pricing strategies, and investment opportunities."
        }
    ];

    return (
        <main className="min-h-screen bg-midnight text-silver overflow-x-hidden selection:bg-gold selection:text-midnight">
            {/* Navigation */}
            <div className="relative z-10 pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-gray-300 hover:text-gold transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden border-4 border-gold/30 shadow-[0_0_60px_-15px_rgba(212,175,55,0.3)]">
                                <Image
                                    src="/daniel-clarke.jpg"
                                    alt="Daniel Clarke"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-3xl" />
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                Meet <span className="text-gold">Daniel Clarke</span>
                            </h1>
                            <p className="text-xl text-gold font-medium mb-6 tracking-wide">
                                Your Trusted Real Estate Partner
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                I&apos;m passionate about helping clients navigate the real estate market with confidence.
                                With a specialized education, years of industry experience, and a commitment to excellence,
                                I&apos;m here to turn your real estate dreams into reality.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact">
                                    <Button className="bg-gold hover:bg-gold/90 text-midnight font-bold px-8 py-6 text-lg rounded-full transition-all hover:scale-105">
                                        Get in Touch
                                    </Button>
                                </Link>
                                <a href="#journey">
                                    <Button variant="outline" className="border-gold text-gold hover:bg-gold/10 px-8 py-6 text-lg rounded-full">
                                        My Journey
                                    </Button>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="text-5xl md:text-6xl font-bold text-gold mb-2">{yearsExperience}+</div>
                            <div className="text-gray-400 text-lg">Years Experience</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-center"
                        >
                            <div className="text-5xl md:text-6xl font-bold text-gold mb-2">{clientsServed}+</div>
                            <div className="text-gray-400 text-lg">Happy Clients</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-center"
                        >
                            <div className="text-5xl md:text-6xl font-bold text-gold mb-2">{propertiesSold}+</div>
                            <div className="text-gray-400 text-lg">Properties Sold</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Journey Timeline */}
            <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Journey</h2>
                        <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
                    </motion.div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold/30" />

                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gold rounded-full border-4 border-midnight -ml-2" />

                                {/* Content */}
                                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-gold/50 transition-all">
                                        <div className="text-gold font-bold text-sm mb-2">{item.year}</div>
                                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-gray-400 text-sm">{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/5">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Values</h2>
                        <div className="w-20 h-1 bg-gold mx-auto rounded-full mb-6" />
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            The principles that guide every interaction and transaction
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-midnight border border-gold/20 rounded-2xl p-8 text-center hover:border-gold/50 transition-all hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <value.icon className="w-8 h-8 text-gold" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Me */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Me</h2>
                        <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {whyChooseMe.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-gold/50 transition-all group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-colors">
                                        <item.icon className="w-6 h-6 text-gold" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                        <p className="text-gray-400 leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education & Background */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/5">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education & Background</h2>
                        <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8 text-lg text-gray-300 leading-relaxed"
                    >
                        <p>
                            I&apos;m a proud graduate of <span className="text-white font-medium">Ryerson University (currently known as TMU)</span>, where I earned my Bachelor of Commerce degree with a major in Real Estate Management.
                        </p>

                        <p>
                            After completing my degree, I spent 4 years networking and building valuable connections within the real estate industry. This period was instrumental in shaping my understanding of the market and establishing relationships that continue to benefit my clients today.
                        </p>

                        <p>
                            During that time, I completed the required courses to become a licensed Sales Representative in 2025, combining my education with real-world networking experience to provide exceptional service to my clients.
                        </p>

                        <p>
                            My passion for real estate began at the age of 16, and from that moment, I knew this was the career I wanted to pursue. Since then, I&apos;ve taken all the necessary steps to turn that dream into a reality.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Service Areas</h2>
                        <div className="w-20 h-1 bg-gold mx-auto rounded-full mb-6" />
                        <p className="text-gray-400 text-lg">Proudly serving the Greater Toronto Area</p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['Toronto', 'Mississauga', 'Brampton', 'Vaughan', 'Markham', 'Richmond Hill', 'Oakville', 'Burlington', 'Pickering', 'Ajax', 'Whitby', 'Oshawa', 'King City', 'Kleinburg'].map((area, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 hover:border-gold/50 transition-all text-center group"
                            >
                                <MapPin className="w-5 h-5 text-gold mx-auto mb-2 group-hover:scale-110 transition-transform" />
                                <div className="text-white font-medium">{area}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Referral Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/5">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Referral Program</h2>
                        <div className="w-20 h-1 bg-gold mx-auto rounded-full mb-6" />
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Know someone who could benefit from my services? I reward referrals!
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-gold/20 to-gold/5 backdrop-blur-md p-8 rounded-2xl border border-gold/30"
                        >
                            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6">
                                <Users className="w-8 h-8 text-gold" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Earn Referral Fees</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                When you refer a friend, family member, or colleague to me, and they successfully buy, sell, lease, or invest in a property, you&apos;ll receive a generous referral fee as a thank you.
                            </p>
                            <ul className="space-y-2 text-gray-400">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                                    <span>Buying or selling a property</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                                    <span>Leasing residential or commercial space</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                                    <span>Real estate investment opportunities</span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-midnight border border-white/10 p-8 rounded-2xl"
                        >
                            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                                <Heart className="w-8 h-8 text-gold" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">How It Works</h3>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                                        <span className="text-gold font-bold">1</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Refer Someone</h4>
                                        <p className="text-gray-400 text-sm">Know someone looking to buy, sell, lease, or invest? Send them my way!</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                                        <span className="text-gold font-bold">2</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">I Provide Service</h4>
                                        <p className="text-gray-400 text-sm">I&apos;ll take care of them with the same dedication and expertise you&apos;d expect.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                                        <span className="text-gold font-bold">3</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">You Get Rewarded</h4>
                                        <p className="text-gray-400 text-sm">Once the transaction closes, you receive your referral fee!</p>
                                    </div>
                                </div>
                            </div>
                            <Link href="/contact" className="mt-6 inline-block">
                                <Button className="bg-gold hover:bg-gold/90 text-midnight font-bold px-6 py-3 rounded-full transition-all hover:scale-105">
                                    Refer Someone Today
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 text-center"
                    >
                        <p className="text-gray-400 text-lg">
                            Have a friend or family member with mortgage questions or looking for a property to lease or buy? <br className="hidden md:block" />
                            I&apos;m here to help your network succeed!
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gold/20 to-gold/5">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <HomeIcon className="w-16 h-16 text-gold mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Start Your Real Estate Journey?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Whether you&apos;re buying, selling, or investing, I&apos;m here to provide expert guidance every step of the way.
                        </p>
                        <Link href="/contact">
                            <Button className="bg-gold hover:bg-gold/90 text-midnight font-bold px-10 py-7 text-lg rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.4)]">
                                Let&apos;s Connect
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
