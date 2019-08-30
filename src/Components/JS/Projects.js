import React from 'react';
import ProjectDesc from './ProjectDesc';

// Array of projects
const projects = [
    {
        url: 'todo-list',
        name: 'Todo List',
        desc: 'A simple todo list. Add, remove, and edit items. Click item to indicate completion.'
    },
]

const Projects = () => {

    // Return a project description of every project
    return (
        projects.map((project, index) =>
            <div>
                <ProjectDesc key={index} project={project}/>
            </div>

        )
    )
}


export default Projects;