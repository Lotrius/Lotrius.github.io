import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faSchool,
  faVolleyballBall,
  faLaptopCode,
  faLanguage
} from '@fortawesome/free-solid-svg-icons';
import { faWindows } from '@fortawesome/free-brands-svg-icons';

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
      <div className="h-100">
        {/* COLUMN - General */}
        <a
          className="f2"
          href="../../../resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Here
        </a>

        {/* Experience */}
        <div className="row bb bt flex items-center justify-center">
          <div className="col-3 tc">
            <h1>Experience</h1>
            <FontAwesomeIcon className="mt-4 fa-3x" icon={faBriefcase} />
          </div>

          <div className="col-9 bl">
            <Experience />
          </div>
        </div>

        {/* Education */}
        <div className="row bb flex items-stretch items-center justify-center">
          <div className="col-3 tc pb4">
            <h1>Education</h1>
            <FontAwesomeIcon className="tc mt-4 fa-3x" icon={faSchool} />
          </div>

          <div className="col-9 bl">
            <h3>Vassar College (Poughkeepsie, NY)</h3>
            <ul>
              <li>
                <h5>GPA: 3.76</h5>
              </li>
              <li>
                <h5>Bachelor of Arts in Computer Science</h5>
              </li>
            </ul>
          </div>
        </div>

        {/* Extracurriculars */}
        <div className="row bb flex items-stretch items-center justify-center">
          <div className="col-3 tc pb4">
            <h1>Extracurricular Activities</h1>
            <FontAwesomeIcon
              className="tc mt-4 fa-3x"
              icon={faVolleyballBall}
            />
          </div>

          <div className="col-9 bl">
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

        {/* Computer languages */}
        <div className="row bb flex items-center justify-center">
          <div className="col-3 tc">
            <h1>Computer Languages/Frameworks</h1>
            <FontAwesomeIcon className="tc mt-4 fa-3x" icon={faLaptopCode} />
          </div>

          <div className="col-9 bl">
            <ul>
              <Fluency list={this.compLanguages} />
            </ul>
          </div>
        </div>

        <div className="row bb flex items-center justify-center">
          <div className="col-3 tc">
            <h1>Languages</h1>
            <FontAwesomeIcon className="tc mt-4 fa-3x" icon={faLanguage} />
          </div>

          <div className="col-9 bl">
            <ul>
              <Fluency list={this.languages} />
            </ul>
          </div>
        </div>

        <div className="row flex items-center justify-center">
          <div className="col-3 tc">
            <h1>Software</h1>
            <FontAwesomeIcon className="tc mt-4 fa-3x" icon={faWindows} />
          </div>

          <div className="col-9 bl">
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
