
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Industries from '../components/Industries';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Home = () => {
    return (
        <main className="font-sans antialiased text-gray-900 bg-white overflow-x-hidden">
            <SEO 
                title="Top Digital Marketing Agency & SEO Services" 
                description="DigiGro is a leading digital marketing agency offering expert SEO, Social Media Marketing, and Web Development to propel your global growth." 
                keywords="Digital Marketing Agency, SEO Services, Social Media Marketing, Web Development, Digital Growth" 
            />
            <Navbar />
            <Hero />
            <About isHome={true} />
            <Services isHome={true} />
            <Industries />
            <Contact isHome={true} />
            <Footer />
        </main>
    );
};

export default Home;
