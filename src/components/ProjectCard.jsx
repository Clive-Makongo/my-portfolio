import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import image from "../assets/images/02-portfolio-1.jpg";
import image2 from "../assets/images/02-portfolio-2.jpg";

function ProjectCard({ props }) {
  const [images, setImage] = useState([
    { image: image, visible: false },
    { image: image2, visible: true },
  ]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {}, []);
  return (
    <motion.div
      className="rounded-2xl flex flex-col bg-purple-300 border-purple-900 h-[500px] border m-1 w-full"
      whileHover={{ scale: 1.01 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2 } }}
    >
      {images.map((img, index) => {
        img.visible !== true && (
          <>
            {console.log(img, " Image")}
            <img src={img.image} alt="" />
            <p>{img.image}</p>
          </>
        );
      })}
    </motion.div>
  );
}

export default ProjectCard;
