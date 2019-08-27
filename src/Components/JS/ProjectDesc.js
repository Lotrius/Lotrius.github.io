import React, { Component } from 'react';

class ProjectDesc extends Component {
    render() {
        const { project } = this.props;
        return (
            <a href={`https://lotrius.github.io/${project.url}/`} rel="noopener noreferrer" target="_blank" >{project.name}</a>
        );
    }
}

export default ProjectDesc;