
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { TrendingUp, Shield, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const featuresData = {
    "targeted-precision": {
        title: "Targeted Precision",
        icon: TrendingUp,
        subtitle: "Data-Driven Audience Segmentation",
        description: "Reaching the exact healthcare professionals you need.",
        fullContent: `We utilize proprietary algorithms and partnerships with medical associations to filter audiences by specialty, years of practice, and prescribing behavior. This ensures your message reaches the clinically relevant 1% who are most likely to attend and engage.`,
        benefits: [
            "Specialty-based targeting",
            "Behavioral intent analysis",
            "Zero ad-spend wastage on irrelevant clicks",
            "High-intent delegate acquisition"
        ],
        headerColor: "from-blue-600 to-cyan-500"
    },
    "compliance-first": {
        title: "Compliance First",
        icon: Shield,
        subtitle: "Navigating the Regulatory Landscape",
        description: "Ethical strategies aligned with industry regulations.",
        fullContent: `Our campaigns are rigorously vetted against GDPR, HIPAA, and local medical advertising regulations (including ABPI and PhRMA codes). We continually update our protocols to ensure brand safety and ethical engagement across all digital borders.`,
        benefits: [
            "GDPR & HIPAA compliant data handling",
            "Adherence to medical advertising codes",
            "Brand safety protocols",
            "Ethical engagement strategies"
        ],
        headerColor: "from-emerald-600 to-teal-500"
    },
    "global-reach": {
        title: "Global Reach",
        icon: Globe,
        subtitle: "Bridging Boundaries for Better Healthcare",
        description: "Connecting conferences with delegates worldwide.",
        fullContent: `With a network spanning 50+ countries and 200+ medical communities, we bridge the gap between local events and international delegates. We localize campaigns to resonate with diverse cultural and professional contexts.`,
        benefits: [
            "Multi-lingual campaign capabilities",
            "Access to 50+ country networks",
            "Localized content strategies",
            "Cross-border delegate recruitment"
        ],
        headerColor: "from-indigo-600 to-purple-600"
    }
};

const AboutFeaturePage = () => {
    const { featureId } = useParams();
    const feature = featuresData[featureId];

    if (!feature) {
        return (
            <main className="min-h-screen flex items-center justify-center overflow-x-hidden">
                <SEO title="Feature Not Found" description="The requested feature does not exist." />
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Feature Not Found</h2>
                    <Link to="/about" className="text-primary hover:underline">Back to About Us</Link>
                </div>
            </main>
        );
    }

    const { title, icon: Icon, subtitle, fullContent, benefits, headerColor } = feature;

    return (
        <main className="font-sans antialiased text-gray-900 bg-white overflow-x-hidden">
            <SEO 
                title={`${title} - DigiGro Features`} 
                description={description} 
                keywords={`${title}, DigiGro, Digital Marketing`} 
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
                            <p className="text-lg md:text-xl text-white/90 max-w-2xl">{subtitle}</p>
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-8">
                                <div>
                                    <h2 className="text-3xl font-bold font-heading mb-6 text-gray-900">In-Depth Overview</h2>
                                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                        {fullContent}
                                    </p>
                                </div>

                                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                    <h3 className="text-xl font-bold font-heading mb-6 flex items-center gap-2">
                                        <CheckCircle className="text-secondary" />
                                        Key Advantages
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {benefits.map((point, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                                                <span className="text-gray-700 font-medium">{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-8">
                                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-secondary">
                                    <h3 className="text-xl font-bold font-heading mb-4">Why This Matters</h3>
                                    <p className="text-gray-600 text-sm mb-6">
                                        Understanding our core pillars like {title} is essential to seeing how DigiGro safeguards and grows your events.
                                    </p>
                                    <Link to="/contact" className="w-full block text-center bg-primary text-white font-bold py-3 rounded-lg hover:bg-dark transition-colors">
                                        Get a Strategy Session
                                    </Link>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-xl">
                                    <h3 className="text-lg font-bold font-heading mb-4">Other Features</h3>
                                    <ul className="space-y-3">
                                        {Object.entries(featuresData).map(([slug, f]) => (
                                            slug !== featureId && (
                                                <li key={slug}>
                                                    <Link to={`/about/${slug}`} className="flex items-center justify-between text-gray-600 hover:text-secondary group transition-colors">
                                                        <span className="text-sm font-medium">{f.title}</span>
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
            </motion.div>
            <Footer />
        </main>
    );
};

export default AboutFeaturePage;
