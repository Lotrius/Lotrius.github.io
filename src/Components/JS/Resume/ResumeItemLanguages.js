import React from 'react';
import PropTypes from 'prop-types';
import Fluency from './Fluency';

const ResumeItemLanguages = ({ item }) => {
  // title
  // icon
  // detail
  return (
    <div className="ml3 w-90 mb4">
      <div className="ml5 row">
        {/* Description */}
        <div className="ba w-100 flex justify-around">
          {item.details.map(deet => (
            <Fluency
              key={deet.key}
              language={deet.language}
              title={deet.title}
              icon={deet.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeItemLanguages;

ResumeItemLanguages.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object
};

ResumeItemLanguages.defaultProps = {
  item: null
};
