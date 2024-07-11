import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function NavigationItem({ title, projectLink }) {
  return (
    <motion.div
      className="hover:bg-indigo-800 hover:rounded-2xl p-2"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <li className="m-4">{title}</li>
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1, scale: 1.1 }}
      >
        <a href={projectLink}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="text-2xl text-white font-[9000] my-1 py-1 px-4   "
          >
            Open
          </motion.button>
        </a>
      </motion.div>
    </motion.div>
  );
}

export default NavigationItem;
