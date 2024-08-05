import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollMenu = ({ items, onSelectProject }) => {
    const [selectedItemId, setSelectedItemId] = useState(null);
    const menuRef = useRef(null);
    const [delayedItems, setDelayedItems] = useState([]);

    useEffect(() => {
        items.forEach((item, index) => {
            setTimeout(() => {
                setDelayedItems((prevItems) => [...prevItems, item]);
            }, index * 600);
        });
    }, []);

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
        <div className="h-[100%] flex flex-col items-end mx-1">
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
                className=" w-full  p-4  justify-center flex-grow overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
            >
                {delayedItems.map((item, index) => (
                    
                    <motion.div 
                        key={item.id}
                        className={`snap-start my-8 mx-auto font-mono py-4 p-2 cursor-crosshair font-[300] hover:bg-indigo-900 hover:text-black transition-colors duration-200 w-4/5  ${selectedItemId === item.id ? 'bg-purple-900 ' : 'hover:bg-purple-600 '
                            } relative`}
                        initial={{ x: -100 }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            transition: { type: "spring", stiffness: 300, duration: 0.4 }
}}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleItemClick(item)}
                    >
                        <div className="absolute top-0 right-0 w-1/4 h-1/4 border-t-2 border-r-2 border-purple-800"></div>
                        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 border-b-2 border-l-2 border-purple-800"></div>
                        {item.title}
                        <hr className='color' />
                    </motion.div>
                ))}
            </div>
            <button
                onClick={() => scrollMenu('down')}
                className="p-2 h-full w-4 rounded-full hover:bg-purple-900 transition-colors duration-200"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className=" w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
            </svg>
            </button>
        </div>
    );
};

export default ScrollMenu;