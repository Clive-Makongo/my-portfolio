import { motion } from 'framer-motion';

function Description() {
    return (
        <motion.p
            initial={{ x: -600 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 40, duration: 1.5 }}
            whileHover={{ scale: 1.02 }}
            className='m-4'
        >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta fugiat at ab ratione sit accusamus magni perspiciatis deserunt commodi numquam repellat inventore explicabo cum quidem rerum, autem laudantium temporibus earum.
        </motion.p>
    );
}

export default Description;