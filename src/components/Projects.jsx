import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { useEffect, useState } from 'react';

function Projects() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const proj = Array(4).fill().map(() => (
            <ProjectCard />
            
        ));
        setCards(proj);
        console.log(proj, cards)
    }, []);

    return (
        <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 40, duration: 1.5 }}
            className='w-9/12 hover:bg-opacity-60 border-2 border-indigo-800 rounded-xl hover:bg-indigo-800 p-4 flex flex-row'>
            {cards.map((card, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.6, duration: 1 }} // Delay each card by 2 seconds
                    className='w-full flex flex-row'
                >
                    {card}
                </motion.div>
            ))}
        </motion.div>
    );
}

export default Projects;
