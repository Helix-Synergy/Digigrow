
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Youtube, Send, Instagram, MessageCircle, Users } from 'lucide-react';

import { services } from '../constants/services';

const Footer = () => {
    const [showAllServices, setShowAllServices] = useState(false);
    const [visitorCount, setVisitorCount] = useState(1000);

    useEffect(() => {
        let isMounted = true;
        const fetchVisitorCount = async () => {
            try {
                const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';
                
                // Check if they've visited
                const hasVisited = localStorage.getItem('hasVisited');
                const shouldIncrement = !hasVisited;
                
                // Set immediately to prevent race conditions (e.g., React Strict Mode double-firing)
                if (shouldIncrement) {
                    localStorage.setItem('hasVisited', 'true');
                }
                
                const response = await fetch(`${apiUrl}/visitors${shouldIncrement ? '?increment=true' : ''}`);
                if (response.ok) {
                    const data = await response.json();
                    if (data.count && isMounted) {
                        setVisitorCount(data.count);
                    }
                } else if (shouldIncrement) {
                    // Revert if fetch failed so it can try again later
                    localStorage.removeItem('hasVisited');
                }
            } catch (error) {
                console.error('Failed to fetch visitor count:', error);
                // Simple revert on network error
                localStorage.removeItem('hasVisited');
            }
        };

        fetchVisitorCount();
        return () => { isMounted = false; };
    }, []);

    return (
        <footer className="bg-[rgb(115,32,158)] text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <img src="/new_logo.webp" alt="DigiGro Logo" className="h-12 w-auto drop-shadow-md" />
                            <span className="font-heading font-bold text-2xl text-white">DigiGro</span>
                        </div>
                        <p className="text-gray-400 font-body mb-6">
                            A Strategic Shield for Global Conference Growth. Empowering healthcare and nursing conferences with digital dominance.
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-heading text-xl font-semibold mb-6 border-b-2 border-accent inline-block pb-2">Quick Links</h3>
                        <ul className="space-y-3 font-body text-gray-400">
                            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-accent transition-colors">Our Services</Link></li>
                            <li><Link to="/collaboration" className="hover:text-accent transition-colors">Partner With Us</Link></li>
                            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-heading text-xl font-semibold mb-6 border-b-2 border-accent inline-block pb-2">Services</h3>
                        <ul className="space-y-3 font-body text-gray-400">
                            {(showAllServices ? services : services.slice(0, 3)).map((service, index) => (
                                <li key={index}>
                                    <Link to={`/services/${service.slug}`} className="hover:text-accent transition-colors text-sm">
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => setShowAllServices(!showAllServices)}
                            className="mt-4 flex items-center gap-1 text-sm font-semibold text-accent hover:text-white transition-colors focus:outline-none"
                        >
                            {showAllServices ? 'Show Less' : 'View More'}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={`transition-transform duration-200 ${showAllServices ? 'rotate-180' : ''}`}
                            >
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-heading text-xl font-semibold mb-6 border-b-2 border-accent inline-block pb-2">Contact Us</h3>
                        <ul className="space-y-4 font-body text-gray-400">
                            <li className="flex gap-3">
                                <span className="text-accent mt-1">📍</span>
                                <span className="leading-relaxed">Mahaveer Radiance, Near Madhapur metro station, CBI Colony, Hyderabad, Telangana 500081</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-accent">✉️</span>
                                <a href="mailto:hello@digigro.online" className="hover:text-white">hello@digigro.online</a>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-accent">📞</span>
                                <a href="tel:+917075782798" className="hover:text-white">+91 7075 782 798</a>
                            </li>
                        </ul>
                    </div>

                    {/* Business Hours */}
                    <div>
                        <h3 className="font-heading text-xl font-semibold mb-6 border-b-2 border-accent inline-block pb-2">Business Hours</h3>
                        <p className="text-gray-400 font-body mb-4">Dedicated to driving your global conference growth around the clock.</p>
                        <ul className="space-y-3 font-body text-gray-400 text-sm">
                            <li className="flex justify-between border-b border-white/10 pb-3 items-start">
                                <div className="flex flex-col">
                                    <span>Monday -</span>
                                    <span>Friday:</span>
                                </div>
                                <div className="flex flex-col items-end text-right text-accent font-semibold">
                                    <span>10:00 AM -</span>
                                    <span>7:00 PM</span>
                                </div>
                            </li>

                            <li className="flex justify-between pb-2 text-accent font-semibold flex-col gap-2">
                                <span className="text-gray-300 font-normal">Saturday and Sunday the office will be closed and support will be available.</span>
                            </li>
                        </ul>
                        
                        {/* Visitor Count */}
                        <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                                    <Users size={20} />
                                </div>
                                <span className="font-heading font-medium">Total Visitors</span>
                            </div>
                            <span className="text-2xl font-bold font-heading text-accent tracking-wider">
                                {visitorCount.toLocaleString()}
                            </span>
                        </div>
                    </div>

                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center gap-4 mt-12 mb-8">
                    <a href="https://www.facebook.com/profile.php?id=61591273230597" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#16A34A] flex items-center justify-center hover:bg-purple-800 transition-colors text-white">
                        <Facebook size={18} />
                    </a>
                    <a href="https://x.com/digigro56062" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#16A34A] flex items-center justify-center hover:bg-purple-800 transition-colors text-white">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current">
                            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/digigro_marketing" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#16A34A] flex items-center justify-center hover:bg-purple-800 transition-colors text-white">
                        <Instagram size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/digi-gro-0b8936390/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#16A34A] flex items-center justify-center hover:bg-purple-800 transition-colors text-white">
                        <Linkedin size={18} />
                    </a>
                    <a href="https://www.youtube.com/channel/UCzPez16R4fY5NY__7xYNcZQ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#16A34A] flex items-center justify-center hover:bg-purple-800 transition-colors text-white">
                        <Youtube size={18} />
                    </a>
                    <a href="https://www.reddit.com/user/Digigro_09/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#16A34A] flex items-center justify-center hover:bg-purple-800 transition-colors text-white">
                        <MessageCircle size={18} />
                    </a>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 font-body text-sm">
                    <p>© 2026 DigiGro — All Rights Reserved | <a href="#" className="hover:text-white">Privacy Policy</a> | <a href="#" className="hover:text-white">Terms & Conditions</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
