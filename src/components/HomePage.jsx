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
            className="flex flex-col items-center justify-center font-mono h-fit mt-56"
        >
            
            <h1 className="text-4xl mb-4">Welcome to My Portfolio</h1>
            <p className="text-xl mb-8">Explore my projects and learn more about me</p>
            
            </motion.div>
        </>
    );
}

export default HomePage;