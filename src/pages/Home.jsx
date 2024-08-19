import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import ScrollMenu from "../components/ScrollMenu";
import MobileProjects from '../components/MobileProjects'
import Description from "../components/Description";
import Projects from "../components/Projects";
import projectData from '../projects.json';
import HomePage from '../components/HomePage';
import Clive from '../assets/files/Clive.pdf'

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

const mobileMenuVariants = {
  closed: { opacity: 0, x: "-100%" },
  open: { opacity: 1, x: 0 }
};

function Home() {
  const [navItems, setNavItems] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [size, setSize] = useState({ width: undefined, height: undefined });
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderMobileMenu = () => (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50"
      variants={mobileMenuVariants}
      initial="closed"
      animate={isMobileMenuOpen ? "open" : "closed"}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className={`font-mono text-2xl mb-6 ${currentPage === 'home' ? 'text-purple-900 font-extrabold underline' : 'text-white'}`}
          onClick={() => { handleHomeClick(); toggleMobileMenu(); }}
        >
          HOME
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className={`font-mono text-2xl mb-6 ${currentPage === 'projects' ? 'text-purple-900 font-extrabold underline' : 'text-white'}`}
          onClick={() => { handleProjectsClick(); toggleMobileMenu(); }}
        >
          PROJECTS
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className={`font-mono text-2xl mb-6 ${currentPage === 'about' ? 'text-purple-900 font-extrabold underline' : 'text-white'}`}
          onClick={() => { handleAboutClick(); toggleMobileMenu(); }}
        >
          ABOUT ME
        </motion.button>
        <motion.a
          href={Clive}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="font-mono text-2xl cursor-crosshair text-white"
          onClick={toggleMobileMenu}
        >
          CV
        </motion.a>
      </div>
    </motion.div>
  );

  const renderMobileContent = () => (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="bg-purple-900 p-4 flex justify-between items-center">
        <h1 className="font-mono text-xl">Clive Makong'o</h1>
        <button onClick={toggleMobileMenu} className="text-white text-2xl">
          ☰
        </button>
      </header>
      <main className="flex-grow p-4">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home-page"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
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
            >
              <h2 className="text-2xl font-mono mb-4 text-purple-600">Projects</h2>
              <div className="mb-4">
                <MobileProjects />
              </div>
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
            >
              <Description />
            </motion.div>
          )}
          {currentPage === 'cv' && (
            <motion.div
              key="cv"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              className="w-full h-[80vh]"
            >
              <embed src={Clive} type="application/pdf" width="100%" height="100%" />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      {renderMobileMenu()}
    </div>
  );

  return (
    <>
      {size.width >= 768 ? (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col text-white text-neutral w-[100vwh] bg-black"
        >
          <motion.div
            className="flex flex-row justify-evenly pt-6"
            variants={headerVariants}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              className={`font-mono cursor-crosshair ${currentPage === 'home' ? 'text-purple-900 font-extrabold underline' : ''}`}
              onClick={handleHomeClick}
            >
              HOME
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className={`font-mono cursor-crosshair ${currentPage === 'projects' ? 'text-purple-900 font-extrabold underline' : ''}`}
              onClick={handleProjectsClick}
            >
              PROJECTS
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className={`font-mono cursor-crosshair ${currentPage === 'about' ? 'text-purple-900 font-extrabold underline' : ''}`}
              onClick={handleAboutClick}
            >
              ABOUT ME
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className={`font-mono cursor-crosshair ${currentPage === 'cv' ? 'text-purple-900 font-extrabold underline' : ''}`}
              onClick={() => setCurrentPage('cv')}
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
                    className="w-2/12 ml-2 m-4 h-[80vh] relative before:content-[''] before:absolute before:top-0 before:right-0 before:w-1/4 before:h-1/4 before:border-t-2 before:border-r-2 before:border-purple-800 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/4 after:h-1/4 after:border-b-2 after:border-l-2 after:border-purple-800"
                    variants={menuVariants}
                    animate={{
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
              {currentPage === 'cv' && (
                <motion.div
                  key="cv"
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                  className="w-full h-[80vh] flex justify-center"
                >
                  <embed src={Clive} type="application/pdf" width="90%" height="100%" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ) : (
        renderMobileContent()
      )}
    </>
  );
}

export default Home;