import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DiffResumeItem = ({ item }) => {
  return (
    <div
      className={`ba br3 bg-white mb4 ${
        item.title !== 'Experience' ? 'w-30' : 'w-80'
      }`}
    >
      <div className="row flex justify-center">
        <h1 className="ml3 mr4 tc">{item.title}</h1>
        <FontAwesomeIcon className="mt-4 fa-3x" icon={item.icon} />
      </div>
      <hr className="b--gray bw1" />
      <div className="pl3">{item.details}</div>
    </div>
  );
};

export default DiffResumeItem;

DiffResumeItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object
};

DiffResumeItem.defaultProps = {
  item: null
};
