import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function NavigationItem({ title, projectLink }) {
    return (
        <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} >
            <li className='m-4'>
                {title}
            </li>
            <motion.div initial={{ opacity: 1 }} whileHover={{ scale: 1.1 }}>
                <a
                    href={projectLink}
                    
                >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        className='text-2xl my-1 py-1 px-4 bg-gradient-to-r from-purple-500 to-pink-500 border-purple-500 rounded-2xl'
                    >
                        Open
                    </motion.button>
                    
                </a>
            </motion.div>
        </motion.div>
    );
}

export default NavigationItem;
