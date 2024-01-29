import { React, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import About from './About';
import Project from '../components/Project';
import galleryData from '../../gallery.json';
import Navbar from '../components/Navbar';

function ProjectGallery() {
    const [gallery, setGallery] = useState(galleryData);

    const loadProject = (id) => {
        const project = galleryData.filter((project) => project.id === id);
        setGallery(project);
     }

    
    return (
        <div>
            <div className='container choose-project'>
                <h1>Choose Project</h1>
                <div className='project-buttons d-flex justify-content-between'>
                    {gallery.map((project) => (
                        <div id={`project${project.id}`}>
                            <Link to="project" role="button" className="btn btn-link">
                                <button>
                                    {project.title}
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className='load-projects'>
                <Routes>
                    <Route path="project" element={<Project props={galleryData} />} />
                </Routes>
            </div>
        </div>
    );
}

export default ProjectGallery;
