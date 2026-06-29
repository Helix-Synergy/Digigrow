
import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, GraduationCap, Users, Palette, Utensils, Home, Briefcase } from 'lucide-react';

const industries = [
    { name: "Healthcare & Nursing Conferences", icon: Stethoscope },
    { name: "Academic & Educational Forums", icon: GraduationCap },
    { name: "Professional Associations", icon: Users },
    { name: "Global Leadership Conclaves", icon: GlobeIcon },
    { name: "Beauty and Cosmetics", icon: Palette },
    { name: "Restaurant & Bar", icon: Utensils },
    { name: "Real Estate", icon: Home },
    { name: "Any Business", icon: Briefcase }
];

// Helper for the Globe Icon as it was reused
function GlobeIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
    )
}

const Industries = () => {
    return (
        <section id="industries" className="py-20 bg-gradient-to-br from-[#155EEF] to-[#0F172A] text-white text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-[#16A34A] font-bold tracking-wider uppercase text-sm mb-2 block">Who We Serve</span>
                    <h2 className="text-4xl font-bold font-heading mb-6">Industries We Empower</h2>
                    <div className="w-24 h-1 bg-[#16A34A] mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {industries.map((ind, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl flex flex-col items-center gap-4 w-64 hover:bg-white/20 transition-all duration-300"
                        >
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#155EEF]">
                                <ind.icon size={32} />
                            </div>
                            <h3 className="text-lg font-bold font-heading">{ind.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
