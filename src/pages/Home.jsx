import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import ScrollMenu from "../components/ScrollMenu";
import Description from "../components/Description";
import Projects from "../components/Projects";
import projectData from '../projects.json'
import HomePage from '../components/HomePage';

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
      duration: 3
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
      duration: 3
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

function Home() {
  const [navItems, setNavItems] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [size, setSize] = useState({ width: undefined, height: undefined });
  const [currentPage, setCurrentPage] = useState('home');

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
    setCurrentPage('projects');
  };

  const handleHomeClick = () => {
    setCurrentPage('home');
    setSelectedProject(null);
  };

  const handleProjectsClick = () => {
    setCurrentPage('projects');
    setSelectedProject(null);
  };

  const handleAboutClick = () => {
    setCurrentPage('about');
    setSelectedProject(null);
  };

  return (
    <>
      {size.width >= 768 ? (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col text-white text-neutral w-[100vwh]"
        >
          <motion.div
            className="flex flex-row justify-evenly pt-6"
            variants={headerVariants}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              className={`font-mono ${currentPage === 'home' ? 'text-purple-900 font-extrabold underline' : ''}`}
              onClick={handleHomeClick}
            >
              HOME
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className={`font-mono ${currentPage === 'projects' ? 'text-purple-900 font-extrabold underline' : ''}`}
              onClick={handleProjectsClick}
            >
              PROJECTS
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className={`font-mono ${currentPage === 'about' ? 'text-purple-900 font-extrabold underline' : ''}`}
              onClick={handleAboutClick}
            >
              ABOUT ME
            </motion.button>
            
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="font-mono"
            >
              CV
            </motion.button>
          </motion.div>
          <div className="flex flex-row mt-8">
            <AnimatePresence mode="wait">
              {currentPage === 'home' && (
                <motion.div
                  key="home-page"
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                  className="w-full"
                >
                  <HomePage />
                </motion.div>
              )}
              {currentPage === 'projects' && (
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
                    className="w-2/12 ml-2 m-4 h-[50vwh] relative before:content-[''] before:absolute before:top-0 before:right-0 before:w-1/4 before:h-1/4 before:border-t-2 before:border-r-2 before:border-purple-800 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/4 after:h-1/4 after:border-b-2 after:border-l-2 after:border-purple-800"
                    variants={menuVariants}
                    animate={{
                      // borderColor: ["#C084FC", "#818CF8", "#6366F1", "#C084FC"],
                      transition: { duration: 3, repeat: Infinity }
                    }}
                  >
                    <motion.h1
                      className="text-2xl font-[120] font-mono m-4 mb-4 underline"
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
                      <div className="w-full text-center flex font-mono text-purple-600 items-center justify-center">
                        Select a project from the menu
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              )}
              {currentPage === 'about' && (
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
      ) : (
        <div>
          MOBILE
          <Description />
        </div>
      )}
    </>
  );
}

export default Home;