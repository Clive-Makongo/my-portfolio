import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from '../components/Navbar'
import Header from "../components/Header";
import Description from "../components/Description";
import Projects from "../components/Projects";
import projectData from '../projects.json'

// Define variants for animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, duration: 0.4 }
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.2 }
  }
};

function ScrollReveal({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

function Home() {
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    generateNavItems(projectData);
  }, []);

  const generateNavItems = (data) => {
    const items = Object.entries(data).map(([title, projectLink], id) => ({
      id,
      title,
      projectLink,
    }));
    setNavItems(items);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col text-white text-neutral w-full"
    >
      <Header />
      <div className="flex flex-row mt-8">
        <motion.div
          className="w-2/12 ml-10"
          animate={{
            borderColor: ["#C084FC", "#818CF8", "#6366F1", "#C084FC"],
            transition: { duration: 0.01, repeat: Infinity }
          }}
        >
          <motion.h1
            className="text-3xl font-bold m-4"
            variants={itemVariants}
          >
            Projects
          </motion.h1>
          {navItems.map((item) => (
            <ScrollReveal key={item.id}>
              <motion.button
                variants={itemVariants}
                whileHover={{scale:1.05}}
                whileTap={{ scale: 0.95 }}
                onClick={() => console.log(item.projectLink)}
                className="flex flex-col my-10 mx-4 rounded-xl justify-evenly hover:bg-indigo-800 hover:rounded-2xl p-2 text-2xl text-white font-[9000]"
              >
                {item.title}
              </motion.button>
            </ScrollReveal>
          ))}
        </motion.div>
        <motion.div
          className="w-8/12 flex justify-end flex-row hover:bg-opacity-60 border-2 border-indigo-800 rounded-xl hover:bg-indigo-800 p-2"
          variants={itemVariants}
        >
          <ScrollReveal>
            <Projects />
          </ScrollReveal>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;