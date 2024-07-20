import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollMenu = ({ items, onSelectProject }) => {
    const [selectedItemId, setSelectedItemId] = useState(null);

    const menuRef = useRef(null);

    useEffect(() => {

        const handleWheel = (e) => {
            console.log(e.deltaY, " DeltaY");
            console.log(menuRef.current.scrollTop, " ScrollTop");
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

    return (
        <>
            <div
                ref={menuRef}
                className="h-[400px] justify-center overflow-y-hidden snap-y snap-mandatory scrollbar-hide"
            >

                {items.map((item) => (
                    <motion.div
                        key={item.id}
                        className={`snap-start my-8 mx-5 py-4 px-2 cursor-pointer hover:bg-indigo-800  transition-colors duration-200 rounded-xl w-1/2 ${selectedItemId === item.id ? 'bg-indigo-800' : 'hover:bg-indigo-800'
                            }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleItemClick(item)}
                    >
                        {item.title}
                    </motion.div>
                ))}
            </div>
            <button onClick={()=> {setSelectedItemId(prev=> prev + 1)}}> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-down">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
            </button>
        </>
    );
};

export default ScrollMenu;