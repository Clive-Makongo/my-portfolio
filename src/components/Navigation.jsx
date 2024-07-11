import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import NavigationItem from './NavigationItem';

function Navigation({ items }) {
    const [delayedItems, setDelayedItems] = useState([]);

    useEffect(() => {
        items.forEach((item, index) => {
            setTimeout(() => {
                setDelayedItems((prevItems) => [...prevItems, item]);
            }, index * 600); // Adjust the delay time as needed
        });
    }, [items]);

    return (
        <motion.div className='w-3/12 hover:bg-opacity-60 rounded-xl hover:bg-indigo-800 p-4'>
            <ul className='font-bold text-lg hover:text-white text-gray-400'>
                {delayedItems.map((item) => (
                    <NavigationItem
                        key={item.id}
                        title={item.title}
                        projectLink={item.projectLink}
                    />
                ))}
            </ul>
        </motion.div>
    );
}

export default Navigation;
