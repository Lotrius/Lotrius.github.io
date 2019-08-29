import React, { Component } from 'react';

class ProjectDesc extends Component {
    render() {
        const { project } = this.props;
        return (
            <div className='bg-light-gray mw7 center pa4 mt5 br2-ns ba b--black-10'>
                <a href={`https://lotrius.github.io/${project.url}/`} rel="noopener noreferrer" target="_blank" >{project.name}</a>
            </div>

        );
    }
}

export default ProjectDesc;