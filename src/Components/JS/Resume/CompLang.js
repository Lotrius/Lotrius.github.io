import React, { Component } from 'react';

const languages = [
  { language: 'PostgreSQL', fluency: 9 },
  {
    language: 'HTML',
    fluency: 8
  },
  {
    language: 'CSS',
    fluency: 8
  },
  {
    language: 'JavaScript',
    fluency: 8
  },
  {
    language: 'React',
    fluency: 8
  }
];

// TODO: REMOVE REDUNTANT CODE THROUGHOUT RESUME FILE
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
            display: 'inline-block'
          }}
        />
      );
    }
    return dot;
  };

  render() {
    return languages.map(language => (
      <li className="df relative overflow-auto pt3 pb3">
        <h3 className=" mr3 ">{language.language}</h3>
        {this.addDots(language.fluency)}
      </li>
    ));
  }
}

export default CompLang;
