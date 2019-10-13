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
import DiffResumeItem from './DiffResumeItem';

class Resume extends Component {
  constructor() {
    super();
    // Fluencies
    this.compLanguages = [
      { item: 'PostgreSQL', fluency: 90 },
      {
        item: 'HTML',
        fluency: 80
      },
      {
        item: 'CSS',
        fluency: 80
      },
      {
        item: 'JavaScript',
        fluency: 80
      },
      {
        item: 'React',
        fluency: 80
      }
    ];
    this.languages = [
      { item: 'English', fluency: 100 },
      {
        item: 'Korean',
        fluency: 60
      },
      {
        item: 'Spanish',
        fluency: 60
      },
      {
        item: 'Japanese',
        fluency: 60
      }
    ];
    this.software = [
      { item: 'Microsoft Word', fluency: 100 },
      {
        item: 'Microsoft Excel',
        fluency: 100
      },
      {
        item: 'Visual Studio Code',
        fluency: 100
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
        <div className="flex justify-around">
          <DiffResumeItem item={this.experience} />
        </div>

        <div className="row flex justify-around">
          {/* Education */}

          <DiffResumeItem item={this.education} />

          {/* Extracurriculars */}
          <DiffResumeItem item={this.extracurriculars} />
        </div>

        <div className="row flex justify-around">
          {/* Computer languages */}
          <DiffResumeItem item={this.computer} />

          {/* Languages */}
          <DiffResumeItem item={this.spokenLanguages} />

          {/* Software */}
          <DiffResumeItem item={this.softwarePrograms} />
        </div>
      </div>
    );
  }
}

export default Resume;
