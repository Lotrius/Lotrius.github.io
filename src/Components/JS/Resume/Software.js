import React, { Component } from 'react';

const software = [
  { program: 'Microsoft Word', fluency: 10 },
  {
    program: 'Microsoft Excel',
    fluency: 6
  },
  {
    program: 'Visual Studio Code',
    fluency: 6
  }
];

class Software extends Component {
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
            display: 'inline-block',
            transform: 'translateX(1200%)'
          }}
        />
      );
    }
    return dot;
  };

  render() {
    return software.map(prog => (
      <li className="df relative overflow-auto pt3 pb3">
        <h3
          className="dib mr3 absolute"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          {prog.program}
        </h3>
        {this.addDots(prog.fluency)}
      </li>
    ));
  }
}

export default Software;
