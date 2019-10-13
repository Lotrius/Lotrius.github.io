import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ResumeItem = ({ item }) => {
  return (
    <div
      className={`row bt flex items-center justify-center ${
        item.title === 'Education' ||
        item.title === 'Extracurricular Activities'
          ? 'items-stretch'
          : null
      }`}
    >
      <div
        className={`col-3 tc ${
          item.title === 'Education' ||
          item.title === 'Extracurricular Activities'
            ? 'pb4'
            : null
        }`}
      >
        <h1>{item.title}</h1>
        <FontAwesomeIcon className="mt-4 fa-3x" icon={item.icon} />
      </div>

      <div className="col-9 bl">{item.details}</div>
    </div>
  );
};

export default ResumeItem;

ResumeItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object
};

ResumeItem.defaultProps = {
  item: null
};
