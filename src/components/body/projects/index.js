import React from 'react';
import { ProjectData } from '../../data/projects';
import './projects.css';
import ProjectCard from './project-card';

function Projects() {
    const data= ProjectData;
    return (
        <div className="projects">
            <label className="section-title">Projects</label>
            <div>
                {data.map((project)=>{
                    return <ProjectCard project={project} />
                })}
            </div>
        </div>
    );
}

export default Projects;
