import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollMenu = ({ items, onSelectProject }) => {
    const [selectedItemId, setSelectedItemId] = useState(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleWheel = (e) => {
            if (menuRef.current) {
                e.preventDefault();
                menuRef.current.scrollTop += e.deltaY;
            }
        };

        const menuElement = menuRef.current;
        if (menuElement) {
            menuElement.addEventListener('wheel', handleWheel, { passive: false });
        }

        return () => {
            if (menuElement) {
                menuElement.removeEventListener('wheel', handleWheel);
            }
        };
    }, []);

    const handleItemClick = (item) => {
        setSelectedItemId(item.id);
        onSelectProject(item.projectLink);
    };

    const scrollMenu = (direction) => {
        if (menuRef.current) {
            const scrollAmount = direction === 'up' ? -100 : 100;
            menuRef.current.scrollTop += scrollAmount;
        }
    };

    return (
        <div className="flex flex-col items-end mx-1">
            {/* <button
                onClick={() => scrollMenu('up')}
                className="mb-2 p-2 bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors duration-200"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                </svg>
            </button> */}
            <div
                ref={menuRef}
                className="h-[400px] w-full justify-center overflow-y-hidden snap-y snap-mandatory scrollbar-hide"
            >
                {items.map((item) => (
                    <motion.div
                        key={item.id}
                        className={`snap-start my-8 mx-auto py-4 px-2 cursor-pointer hover:bg-indigo-800 transition-colors duration-200 rounded-xl w-1/2 ${selectedItemId === item.id ? 'bg-indigo-800' : 'hover:bg-indigo-800'
                            }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleItemClick(item)}
                    >
                        {item.title}
                    </motion.div>
                ))}
            </div>
            {/* <button
                onClick={() => scrollMenu('down')}
                className="mt-2 p-2 bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors duration-200"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
            </svg>
            </button> */}
        </div>
    );
};

export default ScrollMenu;