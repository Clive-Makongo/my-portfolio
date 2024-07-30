import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';

function HomePage() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center font-mono h-fit mt-40 "
            >
                <div className="p-10 relative before:content-[''] before:absolute before:top-0 before:right-0 before:w-1/4 before:h-1/4 before:border-t-2 before:border-r-2 before:border-purple-800 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/4 after:h-1/4 after:border-b-2 after:border-l-2 after:border-purple-800">
                    <h1 className="text-4xl mb-4 ">Welcome to My Portfolio</h1>
                    <p className="text-xl mb-8">Explore my projects and learn more about me</p>
                </div>
            </motion.div>
        </>
    );
}

export default HomePage;