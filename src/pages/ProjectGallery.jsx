import { React, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import About from './About';
import Project from '../components/Project';
import galleryData from '../../gallery.json';
import CardBtn from '../components/CardBtn';

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
                    {galleryData.map((project) => (
                        <div key={project.id} id={`project${project.id}`}>
                            <Link to="project" role="button" className="btn btn-link">
                                <CardBtn
                                    text={project.title}
                                    
                                    onClick={() => loadProject(project.id)}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className='load-projects'>
                <Routes>
                    <Route path="project" element={<Project {...gallery}/>} />
                </Routes>
            </div>
        </div>
    );
}

export default ProjectGallery;
