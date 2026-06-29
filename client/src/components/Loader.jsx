
import React from 'react';

const Loader = () => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
            <div className="relative flex items-center justify-center">
                {/* Outer Spinning Ring - Gradient of Brand Colors */}
                <div className="absolute w-40 h-40 rounded-full border-4 border-transparent border-t-primary border-r-secondary border-b-accent border-l-success animate-spin"></div>

                {/* Inner Reverse Spinning Ring for effect */}
                <div className="absolute w-32 h-32 rounded-full border-2 border-dashed border-gray-200 animate-spin-slow-reverse"></div>

                {/* Logo in Center */}
                <img
                    src="/logo.webp"
                    alt="Loading..."
                    className="w-20 h-auto relative z-10 animate-pulse"
                />
            </div>
        </div>
    );
};

export default Loader;
