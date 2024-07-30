import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import image from '../assets/images/profile-pic.jpg'

function Projects({link}) {
  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{ duration: 2 }}
      className="w-full flex justify-end flex-row hover:bg-opacity-60 rounded hover:bg-indigo-800 h-[81vh] "
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
