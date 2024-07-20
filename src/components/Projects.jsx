import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import image from '../assets/images/profile-pic.jpg'

function Projects({link}) {
  

  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 40, duration: 1.5 }}
      className="w-full flex justify-end flex-row hover:bg-opacity-60 rounded hover:bg-indigo-800 h-[81vh]"
    >
      <iframe
        src={link}
        className="w-full h-full rounded-xl border-0"
        title="Embedded Project"
      ></iframe>
    </motion.div>
  );
}

export default Projects;
