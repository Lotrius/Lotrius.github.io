import React, { Component } from 'react';
import './test.css'

class ProjectDesc extends Component {
    render() {
        const { project } = this.props;
        const url = `https://lotrius.github.io/${project.url}/`;

        return (
            <div className='bg-light-green mw7 center pa4 mt4 br3-ns ba b--black-10 overflow-auto'>
                {/* Title */}
                <a href={url} rel='noopener noreferrer' target="_blank" className='f1 black'>
                    {project.name}
                </a>

                {/* Border so it looks marginally less bad */}
                <hr style={{ border: '1px solid black' }} />

                {/* Picture and description */}
                <div className='mt4' >
                    <a href={url} rel='noopener noreferrer' target="_blank">
                        <img className='fl mr3' src={require(`../../Pics/${project.url}.jpg`)} alt={project.name} />
                    </a>

                    <p className='.cf:after f4'>{project.desc}</p>
                </div>

            </div>

        );
    }
}

export default ProjectDesc;