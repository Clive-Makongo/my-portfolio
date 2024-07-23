import { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from '../components/Navbar'
import Header from "../components/Header";
import ScrollMenu from "../components/ScrollMenu";
import Description from "../components/Description";
import Projects from "../components/Projects";
import projectData from '../projects.json'

// Define variants for animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2
    }
  }
};

const headerVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", ease: "easeOut", duration: 0.5 }
  }
};

const menuVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { 
      type: "tween", 
      ease: "easeInOut", 
      duration: 0.6 
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      type: "tween", 
      ease: "easeOut", 
      duration: 0.5 
    }
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
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
      variants={itemVariants}
    >
      {children}
    </motion.div>
  );
}

function Home() {
  const [navItems, setNavItems] = useState([]);
  const [showProjects, setShowProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loadProjects, setLoadProjects] = useState(false);
  const [size, setSize] = useState({ width: undefined, height: undefined });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    generateNavItems(projectData);
  }, []);

  const generateNavItems = (data) => {
    const items = Object.entries(data).map(([title, projectLink], index) => ({
      id: `project-${index}`,
      title,
      projectLink,
    }));
    setNavItems(items);
  };

  const handleProjectSelect = (projectLink) => {
    setSelectedProject(projectLink);
    //setClickedLink(true);
  };

  const handleHomeClick = () => {
    setShowProjects(false);
    setSelectedProject(null);
  };

  const handleProjectsClick = () => {
    setShowProjects(true);
    setSelectedProject(null);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col text-white text-neutral w-full"
    >
      <motion.div
        className="flex flex-row justify-evenly"
        variants={headerVariants}
      >
        <button onClick={handleHomeClick}>HOME</button>
        <button onClick={handleProjectsClick}>Projects</button>
        <Header />
        <div>{JSON.stringify(size)}</div>
        <button onClick={handleProjectsClick}>CV</button>
      </motion.div>
      <div className="flex flex-row mt-8">
        <AnimatePresence mode="wait">
          {showProjects ? (
            <motion.div
              key="projects-view"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              className="w-full flex"
            >
              <motion.div
                className="w-2/12 ml-2 h-[50vwh] border rounded-xl"
                variants={menuVariants}
                animate={{
                  borderColor: ["#C084FC", "#818CF8", "#6366F1", "#C084FC"],
                  transition: { duration: 3, repeat: Infinity }
                }}
              >
                <motion.h1
                  className="text-3xl font-bold m-4 mb-4"
                  variants={itemVariants}
                >
                  Projects
                </motion.h1>
                <ScrollMenu items={navItems} onSelectProject={handleProjectSelect} />
              </motion.div>
              <motion.div
                className="w-10/12 flex justify-end flex-row hover:bg-opacity-60 rounded-xl h-[80vwh]"
                variants={itemVariants}
              >
                {selectedProject ? (
                  <Projects link={selectedProject} />
                ) : (
                    <div className="w-full text-center flex items-center justify-center">Select a project from the menu</div>
                )}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="description"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              className="w-full"
            >
              <Description />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}


export default Home;