
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Shield, Globe, TrendingUp, Users, Mail, Handshake, BarChart, RefreshCw, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

// This data matches the "Digital Marketing Aegis" content provided
import { services } from '../constants/services';

const ServiceDetailPage = () => {
    const { id } = useParams();
    const service = services.find(s => s.slug === id);

    if (!service) {
        return (
            <main className="min-h-screen flex items-center justify-center overflow-x-hidden">
                <SEO title="Service Not Found" description="The requested service does not exist." />
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
                    <Link to="/services" className="text-primary hover:underline">Back to Services</Link>
                </div>
            </main>
        );
    }

    // Map new data structure to old component expectations or use defaults
    const {
        title,
        icon: Icon,
        desc,
        features,
        color,
        // Fallbacks for richer content if not yet added to services.js
        headerColor = "from-blue-600 to-indigo-700",
        fullDesc = desc,
        keyPoints = features,
        details = "Detailed information for this service is coming soon. Our team is dedicated to providing specialized strategies tailored to your needs."
    } = service;

    return (
        <main className="font-sans antialiased text-gray-900 bg-white overflow-x-hidden">
            <SEO 
                title={`${title} - Digital Marketing Services`} 
                description={service.shortDesc || `Professional ${title} services by DigiGro.`} 
                keywords={`${title}, DigiGro Services, Digital Marketing`} 
            />
            <Navbar />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="pt-16"
            >
                {/* Header */}
                <section className={`relative py-20 bg-gradient-to-r ${headerColor} text-white overflow-hidden`}>
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                    <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-8">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/20 p-6 rounded-2xl backdrop-blur-sm border border-white/10"
                        >
                            <Icon size={64} className="text-white" />
                        </motion.div>
                        <div className="text-center md:text-left">
                            <motion.h1
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-4xl md:text-5xl font-bold font-heading mb-4"
                            >
                                {title}
                            </motion.h1>
                            <p className="text-lg md:text-xl text-white/90 max-w-2xl">{service.shortDesc}</p>
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">



                            {/* Main Content Grid */}
                            <div className="lg:col-span-2 space-y-8">
                                <div>
                                    <h2 className="text-3xl font-bold font-heading mb-6 text-gray-900">Start Your Growth Journey</h2>
                                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                        {fullDesc}
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        {details}
                                    </p>
                                </div>

                                {service.subServices ? (
                                    <div className="space-y-12">
                                        {/* Sub Services Grid */}
                                        <div>
                                            <h3 className="text-2xl font-bold font-heading mb-8 flex items-center gap-2">
                                                <CheckCircle className="text-secondary" />
                                                Our Comprehensive Services
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {service.subServices.map((sub, idx) => (
                                                    <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                                        {sub.icon && (
                                                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-[#155EEF]">
                                                                <sub.icon size={24} />
                                                            </div>
                                                        )}
                                                        <h4 className="font-bold text-lg text-gray-900 mb-2">{sub.title}</h4>
                                                        <p className="text-gray-600 text-sm leading-relaxed">{sub.desc}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Why Choose Us Section */}
                                        {service.benefits && (
                                            <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100">
                                                <h3 className="text-2xl font-bold font-heading mb-6 text-gray-900">Why Choose DigiGro?</h3>
                                                <div className="space-y-6">
                                                    {service.benefits.map((benefit, idx) => (
                                                        <div key={idx} className="flex gap-4">
                                                            <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold text-sm">
                                                                {idx + 1}
                                                            </div>
                                                            <div>
                                                                <h4 className="font-bold text-gray-900 mb-1">{benefit.title}</h4>
                                                                <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                        <h3 className="text-xl font-bold font-heading mb-6 flex items-center gap-2">
                                            <CheckCircle className="text-secondary" />
                                            What We Deliver
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {keyPoints.map((point, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                                                    <span className="text-gray-700 font-medium">{point}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-8">
                                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-secondary">
                                    <h3 className="text-xl font-bold font-heading mb-4">Why This Matters</h3>
                                    <p className="text-gray-600 text-sm mb-6">
                                        In the competitive landscape of global conferences, having a robust {title.toLowerCase()} strategy is not optional—it's essential for survival and growth.
                                    </p>
                                    <Link to="/contact" className="w-full block text-center bg-primary text-white font-bold py-3 rounded-lg hover:bg-dark transition-colors">
                                        Get a Consultation
                                    </Link>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-xl">
                                    <h3 className="text-lg font-bold font-heading mb-4">Other Services</h3>
                                    <ul className="space-y-3">
                                        {services.map((s) => (
                                            s.slug !== id && (
                                                <li key={s.slug}>
                                                    <Link to={`/services/${s.slug}`} className="flex items-center justify-between text-gray-600 hover:text-secondary group transition-colors">
                                                        <span className="text-sm font-medium">{s.title}</span>
                                                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    </Link>
                                                </li>
                                            )
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-dark text-white text-center">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl font-bold font-heading mb-6">Ready to upgrade your {title}?</h2>
                        <div className="flex justify-center gap-4">
                            <Link to="/contact" className="bg-secondary text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-secondary transition-colors">
                                Contact Us
                            </Link>
                            <Link to="/services" className="bg-transparent border border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-dark transition-colors">
                                View All Services
                            </Link>
                        </div>
                    </div>
                </section>
            </motion.div>
            <Footer />
        </main>
    );
};

export default ServiceDetailPage;
