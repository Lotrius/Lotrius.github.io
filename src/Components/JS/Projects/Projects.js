import React from 'react';

import ProjectDesc from './ProjectDesc';

// Array of projects
const projects = [
  {
    url: 'todo-list',
    name: 'Todo List',
    desc:
      'A simple todo list. Add, remove, and edit items. Click item to indicate completion.'
  },
  {
    url: 'juggling-graph',
    name: 'Juggling Graph',
    desc: "Let's see how long it takes me to get 100 catches on 5 ball."
  }
];

const Projects = () => {
  // Return a project description of every project
  return (
    <div className="mb4">
      {projects.map(project => (
        <div key={project.name}>
          <ProjectDesc project={project} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
