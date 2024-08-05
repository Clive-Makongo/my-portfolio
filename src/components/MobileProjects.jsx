import React from 'react';
import { useState,  useEffect } from 'react';
import { motion } from 'framer-motion';
import projectData from '../projects.json'
import PROJECTS from '../gallery';

const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    },
    hover: {
        scale: 1.05,
        transition: { duration: 0.3 }
    }
};

const ProjectGallery = () => {

    useEffect(() => {
        console.log(PROJECTS, " Projects")
    })
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 font-mono">
            {Object.entries(projectData).map(([name, link], index) => (
                <motion.div
                    key={index}
                    className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                    variants={projectVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                >
                    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
                        <div className="h-48 bg-gray-700 flex items-center justify-center">
                            {/* Placeholder for screenshot */}
                            
                            <img src={PROJECTS[index].image} alt="" />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-purple-500 mb-2">{name}</h3>
                            <p className="text-gray-400 text-sm">{PROJECTS[index].description}t</p>
                        </div>
                    </a>
                </motion.div>
            ))}
            {PROJECTS.map((proj, index) => {
                
                console.log("hi")
            })}
        </div>
    );
};

export default ProjectGallery;