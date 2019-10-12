import React, { Component } from 'react';
import PropTypes from 'prop-types';

// TODO: REMOVE REDUNTANT CODE THROUGHOUT RESUME FILE
class Fluency extends Component {
  addDots = fluency => {
    const dot = [];

    for (let i = 0; i < 10; i++) {
      dot.push(
        <span
          className="mr1"
          key={i}
          style={{
            height: '10px',
            width: '10px',
            backgroundColor: i >= fluency ? '#bbb' : '#8b0000',
            borderRadius: '50%',
            display: 'inline-block'
          }}
        />
      );
    }
    return dot;
  };

  render() {
    const { list } = this.props;
    return list.map(listItem => (
      <li key={listItem.item} className=" relative overflow-auto pt3 pb3">
        <h3 className="mr3">{listItem.item}</h3>
        {this.addDots(listItem.fluency)}
      </li>
    ));
  }
}

export default Fluency;

Fluency.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  list: PropTypes.array
};

Fluency.defaultProps = {
  list: null
};
