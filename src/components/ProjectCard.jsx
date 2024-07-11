import { motion } from 'framer-motion';

function ProjectCard({props}) {
    return (
        <motion.div
            className="rounded-2xl flex flex-col bg-purple-300 border-purple-900 border m-1 h-96 w-full"
            whileHover={{ scale: 1.05 }}
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: { duration: 2}}}
        >
        </motion.div>
    );
}

export default ProjectCard;