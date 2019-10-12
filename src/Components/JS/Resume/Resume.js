import React, { Component } from 'react';

import '../../CSS/Resume.css';
import Experience from './Experience';
import Fluency from './Fluency';

class Resume extends Component {
  constructor() {
    super();
    this.compLanguages = [
      { item: 'PostgreSQL', fluency: 9 },
      {
        item: 'HTML',
        fluency: 8
      },
      {
        item: 'CSS',
        fluency: 8
      },
      {
        item: 'JavaScript',
        fluency: 8
      },
      {
        item: 'React',
        fluency: 8
      }
    ];
    this.languages = [
      { item: 'English', fluency: 10 },
      {
        item: 'Korean',
        fluency: 6
      },
      {
        item: 'Spanish',
        fluency: 6
      },
      {
        item: 'Japanese',
        fluency: 6
      }
    ];
    this.software = [
      { item: 'Microsoft Word', fluency: 10 },
      {
        item: 'Microsoft Excel',
        fluency: 10
      },
      {
        item: 'Visual Studio Code',
        fluency: 10
      }
    ];
  }

  render() {
    return (
      <div className="row">
        {/* COLUMN - General */}
        <div className="col-6">
          <a
            className="f2"
            href="../../../resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Here
          </a>

          <div>
            <h1>Experience</h1>
            <Experience />
          </div>

          {/* Education */}
          <div className="bb mb5">
            <h1 className="f1">Education</h1>
            <h3>Vassar College (Poughkeepsie, NY)</h3>
            <ul>
              <li>
                <h5>GPA: 3.76</h5>
              </li>
            </ul>
          </div>

          {/* Extracurriculars */}
          <div>
            <h1>Extracurricular Activities</h1>
            <div>
              <h3>Barefoot Monkeys</h3>
              <ul>
                <li key="bfm">
                  <h5>
                    Put on circus shows and performances in Vassar College’s
                    student-run circus troupe
                  </h5>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* COLUMN - Skills */}
        <div className="col-6">
          {/* Computer */}
          <div className="bb">
            <h1>Computer Languages/Frameworks</h1>
            <ul>
              <Fluency list={this.compLanguages} />
            </ul>
          </div>

          {/* Languages */}
          <div className="bb">
            <h1>Languages</h1>
            <ul>
              <Fluency list={this.languages} />
            </ul>
          </div>

          {/* Software */}
          <div className="bb">
            <h1>Software</h1>
            <ul>
              <Fluency list={this.software} />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
