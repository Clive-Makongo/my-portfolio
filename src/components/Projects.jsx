import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import image from '../assets/images/profile-pic.jpg'

function Projects({link}) {
  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{ duration: 2 }}
      className="w-full flex justify-end flex-row hover:bg-opacity-60 h-[80vh] "
    >
      <iframe
        src={link}
        className="w-full h-full relative before:content-[''] before:absolute before:top-0 before:right-0 before:w-1/4 before:h-1/4 before:border-t-2 before:border-r-2 before:border-purple-800 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/4 after:h-1/4 after:border-b-2 after:border-l-2 after:border-purple-800"
        title="Embedded Project"
      ></iframe>
    </motion.div>
  );
}

export default Projects;
