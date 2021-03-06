import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ResumeItem = ({ item }) => {
  return item.details.map(deet => (
    <div key={deet.key} className="items ml3 w-90 mb4">
      <div className="details ml5 row">
        {/* Side details */}
        <div className="icon tc w-10 ba">
          <FontAwesomeIcon className="mt-4 fa-2x" icon={item.icon} />
          <div className="mt2">
            <p>{deet.startDate}</p>
            <p>{deet.endDate}</p>
          </div>
        </div>

        {/* Description */}
        <div className="desc bt bb br w-90 pl4">
          <div className="joblocation flex justify-between">
            <p className="job pt2 f4">{deet.title}</p>
            <p className="location pt2 f4 mr3">{deet.location}</p>
          </div>

          {/* Company */}
          <p>{deet.company}</p>

          {/* Description */}
          <p>{deet.description}</p>
        </div>
      </div>
    </div>
  ));
};

export default ResumeItem;

ResumeItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object
};

ResumeItem.defaultProps = {
  item: null
};
