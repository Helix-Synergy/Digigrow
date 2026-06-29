
import React from 'react';
import Navbar from '../components/Navbar';
import ServicesComponent from '../components/Services';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const ServicesPage = () => {
    return (
        <main className="font-sans antialiased text-gray-900 bg-white overflow-x-hidden">
            <SEO 
                title="Our Digital Marketing Services" 
                description="Explore our comprehensive digital marketing services including SEO, PPC, Social Media Management, and Web Development for maximum ROI." 
                keywords="Digital Marketing Services, SEO Consulting, Social Media Management, Web Development Services" 
            />
            <Navbar />

            <ServicesComponent />

            <Footer />
        </main>
    );
};

export default ServicesPage;
