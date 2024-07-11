import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import './index.css';
import { Import } from 'lucide-react';



function App() {
 

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className='flex flex-col text-white text-neutral w-full'
    >
      <Home/>
    </motion.div>
  );
}

export default App;