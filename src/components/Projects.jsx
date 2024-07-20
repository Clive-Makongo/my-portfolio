import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import image from '../assets/images/profile-pic.jpg'

function Projects() {
  

  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 40, duration: 1.5 }}
      className=""
    >
      
    </motion.div>
  );
}

export default Projects;
