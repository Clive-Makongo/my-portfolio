import { React, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Project from '../components/Project';
import galleryData from '../../gallery.json';

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
                            <Link to={`project${project.id}`} role="button" className="btn btn-link">
                                <button>
                                    {project.title}
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
                <Routes>
                    <Route path="project1" element={
                        <Project title="title"/>
                    } />
                </Routes>
            </div>

            <Project title={galleryData[0].title } src={galleryData[2].image} />
        </div>
    );
}

export default ProjectGallery;
