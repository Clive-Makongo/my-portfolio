import { motion } from 'framer-motion';

function Header() {
    return (
        <motion.h1
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 40, duration: 1.5 }}
            whileHover={{ scale: 1.02 }}
            className='text-5xl font-extrabold m-8'
        >
            Clive Makong'o
        </motion.h1>
    );
}

export default Header;