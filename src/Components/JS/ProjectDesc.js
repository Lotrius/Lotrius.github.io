/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import PropTypes from 'prop-types';

import './test.css';

const ProjectDesc = ({ project }) => {
  const url = `../../Pics/${project.url}.jpg`;

  return (
    <div className="bg-light-green mw7 center pa4 mt4 br3-ns ba b--black-10 overflow-auto">
      {/* Title */}
      <a
        href={url}
        rel="noopener noreferrer"
        target="_blank"
        className="f1 black"
      >
        {project.name}
      </a>

      {/* Border so it looks marginally less bad */}
      <hr style={{ border: '1px solid black' }} />

      {/* Picture and description */}
      <div className="mt4">
        <a href={url} rel="noopener noreferrer" target="_blank">
          <img
            className="fl mr3"
            src={require(`../../Pics/${project.url}.jpg`)}
            alt={project.name}
          />
        </a>

        <p className=".cf:after f4">{project.desc}</p>
      </div>
    </div>
  );
};

ProjectDesc.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  project: PropTypes.object
};

ProjectDesc.defaultProps = {
  project: null
};

export default ProjectDesc;
