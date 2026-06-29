
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { services } from '../constants/services';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrolled(currentScrollY > 50);

            // Check if at the bottom of the page
            const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;

            if (currentScrollY < lastScrollY || currentScrollY <= 50 || isAtBottom) {
                // Scrolling up, at top, or at bottom
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
                // Scrolling down
                setIsVisible(false);
                setDropdownOpen(false); // Close dropdowns on scroll down
                setIsOpen(false);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = location.pathname === '/';

    return (
        <nav className={`fixed z-50 transition-all duration-500 bg-[rgb(23,24,131)] shadow-md py-4 left-0 w-full translate-x-0 rounded-none md:left-1/2 md:-translate-x-1/2 md:w-[95%] md:max-w-7xl md:rounded-3xl ${isVisible ? 'top-0 md:top-4' : '-top-[150px]'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center gap-2 relative">
                            <img src="/new_logo.webp" alt="DigiGro Logo" className="h-10 w-auto md:absolute md:-top-[20px] md:h-32 md:max-w-none transition-transform duration-300 hover:scale-105" />
                            <div className="flex flex-col justify-center items-center ml-0 md:ml-28">
                                <span className="font-heading font-bold text-2xl text-white leading-none">
                                    DigiGro
                                </span>
                                <span className="hidden sm:inline-block mt-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#155EEF] to-[#16A34A] text-white text-xs font-bold tracking-wider uppercase shadow-lg transform hover:scale-105 transition-transform duration-300 w-fit">
                                    Digital Marketing Aegis
                                </span>
                                <span className="hidden sm:inline-block mt-1 text-white text-xs font-medium tracking-wide">
                                    A Unit of Octacrest Pvt
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center relative">
                        <Link to="/" className={`font-body font-medium transition-colors duration-300 hover:text-accent text-white ${location.pathname === '/' ? 'font-bold underline underline-offset-4 decoration-[#16A34A]' : ''}`}>
                            Home
                        </Link>
                        <Link to="/about" className={`font-body font-medium transition-colors duration-300 hover:text-accent text-white ${location.pathname === '/about' ? 'font-bold underline underline-offset-4 decoration-[#16A34A]' : ''}`}>
                            About
                        </Link>

                        {/* Services Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                        >
                            <Link
                                to="/services"
                                className={`flex items-center gap-1 font-body font-medium transition-colors duration-300 hover:text-accent text-white ${location.pathname.includes('/services') ? 'font-bold underline underline-offset-4 decoration-[#16A34A]' : ''}`}
                            >
                                Services <ChevronDown size={16} />
                            </Link>

                            <AnimatePresence>
                                {dropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl py-4 mt-2 border border-gray-100 overflow-hidden"
                                    >
                                        <div className="grid grid-cols-1 gap-1">
                                            {services.map((service, index) => (
                                                <Link
                                                    key={index}
                                                    to={`/services/${service.slug}`}
                                                    className="block px-6 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#155EEF] transition-colors"
                                                >
                                                    {service.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link to="/contact" className={`font-body font-medium transition-colors duration-300 hover:text-accent text-white ${location.pathname === '/contact' ? 'font-bold underline underline-offset-4 decoration-[#16A34A]' : ''}`}>
                            Contact
                        </Link>

                        <a
                            href="https://wa.me/917075782798"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 rounded-full bg-[rgb(236,2,125)] text-white font-heading font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 ml-4"
                        >
                            Get Strategy
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-accent focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white shadow-xl overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-800 font-body font-medium hover:text-[#155EEF] hover:bg-gray-50 rounded-md">Home</Link>
                            <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-800 font-body font-medium hover:text-[#155EEF] hover:bg-gray-50 rounded-md">About</Link>

                            <div className="px-3 py-2">
                                <button
                                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                    className="flex items-center justify-between w-full text-left text-gray-800 font-body font-medium mb-2 hover:text-[#155EEF]"
                                >
                                    Services
                                    <ChevronDown
                                        size={16}
                                        className={`transform transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {mobileServicesOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pl-4 border-l-2 border-gray-100 space-y-2 py-2">
                                                <Link
                                                    to="/services"
                                                    onClick={() => setIsOpen(false)}
                                                    className="block text-sm font-semibold text-[#155EEF] hover:text-[#16A34A] mb-2"
                                                >
                                                    View All Services
                                                </Link>
                                                {services.map((service, index) => (
                                                    <Link
                                                        key={index}
                                                        to={`/services/${service.slug}`}
                                                        onClick={() => setIsOpen(false)}
                                                        className="block text-sm text-gray-600 hover:text-[#16A34A]"
                                                    >
                                                        {service.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-800 font-body font-medium hover:text-[#155EEF] hover:bg-gray-50 rounded-md">Contact</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
