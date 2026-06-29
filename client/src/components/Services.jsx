import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { services } from '../constants/services';

const Services = ({ isHome = false }) => {
    return (
        <div className="w-full">
            {!isHome && (
                <section className="relative py-32 bg-gray-900 overflow-hidden">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/about-2.webp')" }}
                    >
                        <div className="absolute inset-0 bg-[#1e293b]/70 mix-blend-multiply"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <span className="text-[#16A34A] font-bold tracking-wider uppercase text-sm mb-2 block">Our Solutions</span>
                        <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">Our Services</h1>
                        <p className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto">
                            Empowering Healthcare Events Globally with data-driven strategies and digital excellence.
                        </p>
                    </div>
                </section>
            )}

            {/* Services Grid */}
            <section id="services" className={`py-24 bg-[#EFF6FF] relative ${isHome ? '' : ''}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        {isHome ? (
                            <>
                                <span className="text-[#16A34A] font-bold tracking-wider uppercase text-sm mb-2 block">What We Do</span>
                                <h2 className="text-4xl font-bold font-heading text-dark mb-4">Our Best Services</h2>
                                <p className="text-lg text-gray-600">High-performance digital strategies tailored for global success.</p>
                            </>
                        ) : (
                            <>
                                <span className="text-[#16A34A] font-bold tracking-wider uppercase text-sm mb-2 block">Our Solutions</span>
                                <h2 className="text-4xl font-bold font-heading text-dark mb-4">Core Pillars of DiGiGro</h2>
                                <p className="text-lg text-gray-600">A comprehensive, data-driven digital growth framework designed to protect, position, and propel your healthcare events.</p>
                            </>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 -mt-0">
                        {(isHome ? services.slice(0, 3) : services).map((service, index) => (
                            <Tilt key={index} className="Tilt" options={{ max: 10, scale: 1.02, speed: 400 }}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white p-8 shadow-[0_5px_15px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-lg group h-full flex flex-col border-b-4 border-transparent hover:border-[#16A34A]"
                                >
                                    <div className="flex items-start gap-5 mb-4">
                                        <div className={`w-14 h-14 shrink-0 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-[#155EEF] transition-colors duration-300`}>
                                            <service.icon className={`w-7 h-7 text-[#155EEF] group-hover:text-white transition-colors`} />
                                        </div>
                                        <h3 className="text-xl font-bold font-heading text-dark leading-tight group-hover:text-[#155EEF] transition-colors mt-1">{service.title}</h3>
                                    </div>

                                    <p className="text-gray-600 text-[15px] leading-relaxed mb-6 flex-grow border-b border-gray-100 pb-6">
                                        {service.desc}
                                    </p>

                                    <a
                                        href={`/services/${service.slug}`}
                                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-800 hover:text-[#155EEF] transition-colors mt-auto group/link"
                                    >
                                        Read More
                                        <span className="bg-gray-100 rounded-full p-1 group-hover/link:bg-[#16A34A] group-hover/link:text-white transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                        </span>
                                    </a>
                                </motion.div>
                            </Tilt>
                        ))}
                    </div>

                    {isHome && (
                        <div className="text-center mt-12">
                            <a href="/services" className="inline-block bg-[#16A34A] text-white font-bold py-4 px-10 rounded-full hover:shadow-lg hover:-translate-y-1 transition-all shadow-md uppercase tracking-wide">
                                View All Services
                            </a>
                        </div>
                    )}
                </div>
            </section>

            {/* Why Choose Us Section */}
            {!isHome && (
                <section className="py-24 bg-white overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="flex-1 relative">
                                <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-100/50 rounded-full blur-3xl"></div>
                                <div className="relative z-10 rounded-2xl shadow-xl overflow-hidden bg-[#242b3e]">
                                    <img
                                        src="/digital-marketing-tools.webp"
                                        alt="Why Choose DigiGro"
                                        loading="lazy"
                                        className="w-full h-auto transform -rotate-[12deg] scale-125 origin-center pt-8"
                                    />
                                </div>
                            </div>
                            <div className="flex-1">
                                <span className="text-[#16A34A] font-bold tracking-wider uppercase text-sm mb-2 block">Why Choose Us</span>
                                <h2 className="text-4xl font-bold font-heading text-dark mb-6">Safeguard Your Brand with Proven Digital Solutions</h2>
                                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                    We combine clinical deep-dives with cutting-edge digital marketing to create a protective aegis around your brand. Our data-driven approach ensures every campaign delivers measurable growth.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {[
                                        { title: "Data-Driven Strategy", desc: "Decisions backed by real-time analytics." },
                                        { title: "Healthcare Expertise", desc: "Understanding the nuances of medical marketing." },
                                        { title: "Global Reach", desc: "Connecting you with international audiences." },
                                        { title: "ROI Focused", desc: "Maximizing every dollar of your budget." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                                            <h4 className="font-bold text-dark mb-2 group-hover:text-[#155EEF] transition-colors">{item.title}</h4>
                                            <p className="text-sm text-gray-500">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Banner */}
            {!isHome && (
                <section className="py-20 bg-[#155EEF] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/city-skyline-with-connection-dots_1112-2586.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                    <div className="max-w-5xl mx-auto px-4 relative z-10 text-center text-white">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Ready to Propel Your Digital Marketing Growth?</h2>
                        <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">Join the league of global healthcare leaders who trust DigiGro to manage their digital presence.</p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a href="/collaboration" className="bg-white text-[#155EEF] font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition-colors uppercase tracking-wide transform hover:scale-105 duration-300">
                                Partner With Us
                            </a>
                            <a href="/contact" className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-[#155EEF] transition-all uppercase tracking-wide transform hover:scale-105 duration-300">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default Services;
