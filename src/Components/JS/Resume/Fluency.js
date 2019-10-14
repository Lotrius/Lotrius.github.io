/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Fluency extends Component {
  addDots = fluency => {
    const dot = (
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped"
          role="progressbar"
          style={{ width: `${fluency}%` }}
          aria-valuenow={fluency}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {`${fluency}%`}
        </div>
      </div>
    );
    return dot;
  };

  render() {
    const { language, title, icon } = this.props;
    return (
      <div
        className={`flex flex-column ${title === 'Software' ? null : 'br'}`}
        style={{ flex: 1 }}
      >
        <div className="flex justify-center">
          <p className="pt2 tc f4">{title}</p>
          <FontAwesomeIcon className="ml3 mt2 fa-2x black" icon={icon} />
        </div>

        {language.map((listItem, index) => (
          <li
            // eslint-disable-next-line react/no-array-index-key
            key={title + index}
            className=" relative overflow-auto pt3 pb3"
          >
            <p>{listItem.item}</p>
            {this.addDots(listItem.fluency)}
          </li>
        ))}
      </div>
    );
  }
}

export default Fluency;

Fluency.propTypes = {
  language: PropTypes.array,
  title: PropTypes.string,
  icon: PropTypes.object
};

Fluency.defaultProps = {
  language: null,
  title: null,
  icon: null
};
