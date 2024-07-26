import { motion } from "framer-motion";

function Header() {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 4 }}
      whileHover={{ scale: 1.02 }}
      className="text-5xl font-normal font-mono mx-8 flex justify-center hover:text-purple-50 0"
    >
      Clive Makong'o
    </motion.h1>
  );
}

export default Header;
