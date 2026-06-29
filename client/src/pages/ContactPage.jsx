
import React from 'react';
import Navbar from '../components/Navbar';
import ContactComponent from '../components/Contact';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const ContactPage = () => {
    return (
        <main className="font-sans antialiased text-gray-900 bg-white overflow-x-hidden">
            <SEO 
                title="Contact Us - Get a Free Strategy" 
                description="Get in touch with DigiGro for a free digital marketing strategy consultation. We are ready to help your business grow globally." 
                keywords="Contact DigiGro, Digital Marketing Strategy, Hire Digital Marketing Agency" 
            />
            <Navbar />

            {/* Page Header */}
            {/* Page Header */}
            <div className="relative py-32 bg-gray-900 overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/hero-visual.webp')" }}
                >
                    <div className="absolute inset-0 bg-[#1e293b]/70 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
                        Contact Us
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto">
                        Get Your Free Strategy Consultation Today and start your journey towards digital excellence.
                    </p>
                </div>
            </div>

            <ContactComponent />

            <Footer />
        </main>
    );
};

export default ContactPage;
