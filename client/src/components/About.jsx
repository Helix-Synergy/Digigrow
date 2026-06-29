import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, TrendingUp, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = ({ isHome = false }) => {
    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const features = [
        {
            title: "Targeted Precision",
            slug: "targeted-precision",
            desc: "Reaching the exact healthcare professionals you need.",
            icon: TrendingUp
        },
        {
            title: "Compliance First",
            slug: "compliance-first",
            desc: "Ethical strategies aligned with industry regulations.",
            icon: Shield
        },
        {
            title: "Global Reach",
            slug: "global-reach",
            desc: "Connecting conferences with delegates worldwide.",
            icon: Globe
        }
    ];

    const stats = [
        { label: "Happy Customers", value: "20+", suffix: "K", icon: Users },
        { label: "Complete Projects", value: "50+", suffix: "K", icon: CheckCircle },
        { label: "Win Awards", value: "15+", suffix: "", icon: Award },
        { label: "Years Experience", value: "10+", suffix: "", icon: TrendingUp },
    ];

    const processes = [
        { number: "01", title: "Discover", description: "Analyzing your specific conference needs and audience." },
        { number: "02", title: "Design", description: "Crafting a tailored digital growth framework." },
        { number: "03", title: "Execute", description: "Launching targeted, high-impact campaigns." },
        { number: "04", title: "Deliver", description: "Achieving measurable attendance and engagement growth." },
    ];

    return (
        <section className="font-sans text-gray-800">

            {/* SECTION 1: Top Features Grid */}
            {!isHome && (
                <div className="bg-surface py-20 relative z-20 -mt-16 container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white p-8 shadow-xl rounded-xl border-b-4 border-[#155EEF] hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-[#155EEF]">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold font-heading mb-3 text-dark">{item.title}</h3>
                                <p className="text-gray-600 mb-4">{item.desc}</p>
                                <Link
                                    to={`/about/${item.slug}`}
                                    className="text-[#16A34A] font-semibold hover:underline bg-transparent border-none p-0 cursor-pointer flex items-center gap-1"
                                >
                                    Read More +
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}

            {/* SECTION 2: Who We Are (Split Layout) */}
            <section className="py-20 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        {/* Text Side */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="flex-1"
                        >
                            <span className="text-[#16A34A] font-bold tracking-wider uppercase text-sm mb-2 block">About Company</span>
                            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-dark mb-6 leading-tight">
                                Empowering Global <span className="text-[#155EEF]">Healthcare & Nursing Conferences</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                DigiGro is your strategic shield—a "Digital Marketing Aegis"—designed to protect, position, and propel global healthcare conferences. We combine data-driven precision with ethical compliance to ensure your events grow sustainably.
                            </p>

                            {/* Circular Progress Stats */}
                            <div className="flex flex-wrap gap-8 mt-10">
                                {['Digital Protection', 'Audience Growth', 'Compliance'].map((skill, idx) => (
                                    <div key={idx} className="flex flex-col items-center group cursor-pointer">
                                        <div className="relative w-28 h-28">
                                            {/* Background Circle */}
                                            <svg className="w-full h-full transform -rotate-90">
                                                <circle
                                                    cx="56"
                                                    cy="56"
                                                    r="48"
                                                    className="stroke-gray-100 fill-none transition-colors group-hover:stroke-blue-50"
                                                    strokeWidth="8"
                                                />
                                                {/* Animated Progress Circle */}
                                                <motion.circle
                                                    cx="56"
                                                    cy="56"
                                                    r="48"
                                                    className="stroke-[#16A34A] fill-none drop-shadow-sm"
                                                    strokeWidth="8"
                                                    strokeLinecap="round"
                                                    initial={{ strokeDasharray: "0 301" }} // 2 * pi * 48 ≈ 301.6
                                                    whileInView={{ strokeDasharray: "271 301" }} // 90% of 301 ≈ 271
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 + (idx * 0.1) }}
                                                />
                                            </svg>

                                            {/* Percentage Text */}
                                            <div className="absolute inset-0 flex items-center justify-center flex-col">
                                                <motion.span
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.5 + (idx * 0.1) }}
                                                    className="text-2xl font-bold text-dark group-hover:text-[#155EEF] transition-colors"
                                                >
                                                    90%
                                                </motion.span>
                                            </div>
                                        </div>
                                        <span className="mt-4 font-bold text-gray-700 text-sm uppercase tracking-wide text-center">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Image Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 relative"
                        >
                            <img src="/about-1.webp" alt="Office Team" loading="lazy" className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[500px]" />
                            {/* Decorative element */}
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#16A34A]/20 rounded-full blur-2xl z-0"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {isHome && (
                <div className="text-center py-8 bg-white -mt-20 pb-24">
                    <a href="/about" className="inline-block px-10 py-4 bg-[#155EEF] text-white font-bold rounded-lg shadow-lg hover:bg-dark transition-colors uppercase tracking-wider">
                        Read More About Us
                    </a>
                </div>
            )}

            {/* SECTION 3: Counters / Stats with Background */}
            {!isHome && (
                <section className="py-24 relative bg-[#155EEF] text-white overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/bg-pattern.webp')] bg-cover opacity-10"></div>
                    <div className="max-w-7xl mx-auto px-4 relative z-10">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-4"
                                >
                                    <stat.icon size={48} className="mx-auto mb-4 text-[#16A34A]" />
                                    <div className="text-5xl font-bold font-heading mb-2">{stat.value}<span className="text-[#16A34A]">{stat.suffix}</span></div>
                                    <p className="text-lg opacity-80">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* SECTION 4: Working Process */}
            {!isHome && (
                <section className="py-24 bg-surface">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <span className="text-[#16A34A] font-bold uppercase tracking-wider">Our Process</span>
                        <h2 className="text-4xl font-bold font-heading mb-16 text-dark">How We Work</h2>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {processes.map((proc, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="relative bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group border border-gray-100"
                                >
                                    <div className="absolute top-4 right-6 text-6xl font-bold text-gray-100 group-hover:text-[#155EEF]/5 transition-colors z-0">
                                        {proc.number}
                                    </div>
                                    <div className="relative z-10">
                                        <div className="w-16 h-16 bg-surface shadow-sm rounded-full flex items-center justify-center mx-auto mb-6 text-[#155EEF] group-hover:bg-[#155EEF] group-hover:text-white transition-colors">
                                            <CheckCircle size={28} />
                                        </div>
                                        <h4 className="text-xl font-bold mb-3 text-dark">{proc.title}</h4>
                                        <p className="text-gray-600 text-sm">{proc.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </section>
    );
};

export default About;
