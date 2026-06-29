
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import AboutComponent from '../components/About';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const AboutPage = () => {
    return (
        <main className="font-sans antialiased text-gray-900 bg-white overflow-x-hidden">
            <SEO 
                title="About Us - Digital Marketing Experts" 
                description="Learn more about DigiGro, a unit of Octacrest Pvt, dedicated to driving global digital growth through strategic marketing solutions." 
                keywords="About DigiGro, Digital Marketing Experts, Octacrest Pvt, Global Digital Growth" 
            />
            <Navbar />

            {/* Page Header */}
            {/* Page Header */}
            {/* Page Header */}
            <div className="relative py-32 bg-gray-900 overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/about-1.webp')" }}
                >
                    <div className="absolute inset-0 bg-[#1e293b]/70 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
                        About Us
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto">
                        Unlock your potential with expert-led strategies designed to inspire, educate, and empower your growth journey.
                    </p>
                </div>
            </div>

            <AboutComponent />

            {/* Additional content specific to About Page can go here */}

            <Footer />
        </main>
    );
};

export default AboutPage;
