import React, { Component } from 'react';

const languages = [
  { language: 'PostgreSQL', fluency: 10 },
  {
    language: 'HTML',
    fluency: 6
  },
  {
    language: 'CSS',
    fluency: 6
  },
  {
    language: 'JavaScript',
    fluency: 6
  },
  {
    language: 'React',
    fluency: 6
  }
];

class CompLang extends Component {
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
    return languages.map(language => (
      <li className="df relative overflow-auto pt3 pb3">
        <h3
          className="dib mr3 absolute"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          {language.language}
        </h3>
        {this.addDots(language.fluency)}
      </li>
    ));
  }
}

export default CompLang;