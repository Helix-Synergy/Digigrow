import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    return (
        <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#EFF6FF]">
            {/* Particles Background */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                className="absolute inset-0 w-full h-full"
                options={{
                    fullScreen: { enable: false, zIndex: 0 },
                    background: { color: { value: "transparent" } },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: { enable: true, mode: "push" },
                            onHover: { enable: true, mode: "grab" },
                            resize: true,
                        },
                        modes: {
                            grab: { distance: 160, links: { opacity: 1, color: "#16A34A" } },
                            push: { quantity: 4 },
                            repulse: { distance: 200, duration: 0.4 },
                        },
                    },
                    particles: {
                        color: { value: "#155EEF" }, // Royal Blue Dots
                        links: {
                            color: "#155EEF",
                            distance: 150,
                            enable: true,
                            opacity: 0.5, // 50% opacity (Much more visible)
                            width: 1.5,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: { default: "bounce" },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: { density: { enable: true, area: 800 }, value: 70 }, // Increased count
                        opacity: { value: 0.6 }, // 60% opacity dots
                        shape: { type: "circle" },
                        size: { value: { min: 2, max: 5 } }, // Larger dots
                    },
                    detectRetina: true,
                }}
            />

            {/* Decorative Background Blobs */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-100 to-transparent -z-0" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100 rounded-full blur-3xl -z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">


                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-3xl sm:text-5xl lg:text-7xl font-bold font-heading leading-tight mb-6 text-dark"
                        >
                            A Strategic Shield for <br />
                            <span className="text-[#16A34A]">
                                Global Growth
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-lg sm:text-xl text-gray-600 font-body mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            Protect, position, and propel global conferences with our comprehensive digital growth framework. Designed for precision and scale.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <a href="/contact" className="px-8 py-4 rounded-full bg-[#16A34A] text-white font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group">
                                Partner with DIGIGRO
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="/services" className="px-8 py-4 rounded-full border-2 border-[#155EEF] text-[#155EEF] font-bold text-lg hover:bg-blue-50 transition-all duration-300">
                                Explore Services
                            </a>
                        </motion.div>
                    </div>

                    {/* Hero Image / 3D Element */}
                    <div className="flex-1 w-full max-w-lg lg:max-w-none">
                        <Tilt className="Tilt" options={{ max: 15, scale: 1.02 }}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="relative z-10"
                            >
                                <div className="relative rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300 group bg-white border border-gray-50 p-4">
                                    <img
                                        src="/digital-marketing-wheel.webp"
                                        alt="Digital Marketing Aegis"
                                        fetchPriority="high"
                                        className="w-full h-auto max-w-md mx-auto block rounded-xl"
                                    />
                                </div>
                            </motion.div>
                        </Tilt>
                    </div>

                </div>
            </div>


        </section>
    );
};

export default Hero;
