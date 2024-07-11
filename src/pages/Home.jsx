import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Description from '../components/Description';
import Navigation from '../components/Navigation';
import Projects from '../components/Projects';

function Home() {
    const [navItems, setNavItems] = useState([]);

    useEffect(() => {
        generateNavItems(4);
    }, []);

    const generateNavItems = (num) => {
        const items = Array(num).fill().map((_, i) => ({
            id: i,
            title: `ITEM ${i + 1}`,
            projectLink: 'project'
        }));
        setNavItems(items);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className='flex flex-col text-white text-neutral w-11/12'
        >
            <Header />
            <Description />
            <motion.div className='w-10/12 flex justify-between flex-row m-4'>
                <Navigation items={navItems} />
                <Projects />
            </motion.div>
        </motion.div>
    );
}

export default Home;