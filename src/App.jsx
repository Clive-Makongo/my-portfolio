import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './index.css';

function Header() {
  return (
    <motion.h1
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 40, duration: 1.5 }}
      whileHover={{ scale: 1.02 }}
      className='text-5xl font-extrabold m-8'
    >
      Clive Makong'o
    </motion.h1>
  );
}

function Description() {
  return (
    <motion.p
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 70, duration: 2 }}
      whileHover={{ scale: 1.02 }}
      className='m-4'
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta fugiat at ab ratione sit accusamus magni perspiciatis deserunt commodi numquam repellat inventore explicabo cum quidem rerum, autem laudantium temporibus earum.
    </motion.p>
  );
}

function NavigationItem({ title, projectLink }) {
  return (
    <motion.li whileHover={{ x: 10 }} className='m-4'>
      - {title}
      <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}>
        <a
        href={projectLink}
        className='text-2xl my-1 py-1 px-4 bg-gradient-to-r from-purple-500 to-pink-500 border-purple-500 rounded-2xl'
        style={{ cursor: "pointer" }}
        >
        Open
      </a>
    </motion.div>
    </motion.li >
  );
}

function Navigation({ items }) {
  return (
    <motion.div className='w-3/12 hover:bg-opacity-60 rounded-xl hover:bg-indigo-800 p-4'>
      <ul className='font-bold text-lg hover:text-white text-gray-400'>
        {items.map((item) => (
          <NavigationItem key={item.id} title={item.title} projectLink={item.projectLink} />
        ))}
      </ul>
    </motion.div>
  );
}

function ProjectCard() {
  return (
    <motion.div
      className="rounded-2xl flex flex-col bg-purple-300 border-purple-900 border m-1 w-1/4"
      whileHover={{ scale: 1.05 }}
    >
    </motion.div>
  );
}

function Projects() {
  return (
    <motion.div className='w-9/12 hover:bg-opacity-60 border-2 border-indigo-800 rounded-xl hover:bg-indigo-800 p-4 flex flex-row'>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </motion.div>
  );
}

function App() {
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    generateNavItems(4);
  }, []);

  const generateNavItems = (num) => {
    const items = Array(num).fill().map((_, i) => ({
      id: i,
      title: `ITEM ${i + 1}`,
      projectLink: 'project'
    }));
    setNavItems(items);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className='flex flex-col text-white text-neutral w-11/12'
    >
      <Header />
      <Description />
      <motion.div className='w-10/12 flex justify-between flex-row m-4'>
        <Navigation items={navItems} />
        <Projects />
      </motion.div>
    </motion.div>
  );
}

export default App;