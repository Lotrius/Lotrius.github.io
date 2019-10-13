import React, { Component } from 'react';
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
import ResumeItem from './ResumeItem';

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

    // Resume items
    this.experience = {
      title: 'Experience',
      icon: faBriefcase,
      details: <Experience />
    };
    this.education = {
      title: 'Education',
      icon: faSchool,
      details: (
        <div>
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
      )
    };
    this.extracurriculars = {
      title: 'Extracurricular Activities',
      icon: faVolleyballBall,
      details: (
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
      )
    };
    this.computer = {
      title: 'Computer Languages/Frameworks',
      icon: faLaptopCode,
      details: (
        <div>
          <ul>
            <Fluency list={this.compLanguages} />
          </ul>
        </div>
      )
    };
    this.spokenLanguages = {
      title: 'Languages',
      icon: faLanguage,
      details: (
        <div>
          <ul>
            <Fluency list={this.languages} />
          </ul>
        </div>
      )
    };
    this.softwarePrograms = {
      title: 'Software',
      icon: faWindows,
      details: (
        <div>
          <ul>
            <Fluency list={this.software} />
          </ul>
        </div>
      )
    };
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
        <ResumeItem item={this.experience} />

        {/* Education */}
        <ResumeItem item={this.education} />

        {/* Extracurriculars */}
        <ResumeItem item={this.extracurriculars} />

        {/* Computer languages */}
        <ResumeItem item={this.computer} />

        {/* Languages */}
        <ResumeItem item={this.spokenLanguages} />

        {/* Software */}
        <ResumeItem item={this.softwarePrograms} />
      </div>
    );
  }
}

export default Resume;
