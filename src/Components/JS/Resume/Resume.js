import React, { Component } from 'react';
import {
  faBriefcase,
  faSchool,
  faLaptopCode,
  faLanguage
} from '@fortawesome/free-solid-svg-icons';
import { faWindows } from '@fortawesome/free-brands-svg-icons';

import '../../CSS/Resume.css';

import Fluency from './Fluency';
import ResumeItem from './ResumeItem';
import ResumeItemLanguages from './ResumeItemLanguages';

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
      details: [
        {
          key: 'IT',
          title: 'IT Generalist',
          company: 'Industrial Bank of Korea New York Branch',
          location: 'New York, NY',
          startDate: 'Oct 2018',
          endDate: 'Apr 2019',
          description:
            'General IT job involving maintaining/updating servers, gathering data from databses, updating IT procedures, and spreading cybersecurity awareness'
        },
        {
          key: 'BFMTreasurer',
          title: 'Barefoot Monkeys Treasurer',
          company: 'Vassar College Barefoot Monkeys',
          location: 'Poughkeepsie, NY',
          startDate: 'Aug 2017',
          endDate: 'May 2018',
          description:
            'Managed club funds and helped run club on an executive level'
        },
        {
          key: 'Drill',
          title: 'Japanese Language Drill Instructor',
          company: 'Vassar College',
          location: 'Poughkeepsie, NY',
          startDate: 'Sep 2016',
          endDate: 'May 2018',
          description:
            'Taught Japanese language and culture to first year Japanese language students'
        },
        {
          key: 'Research',
          title: 'Hispanic Studies Research Assistant',
          company: 'Vassar College Barefoot Monkeys ',
          location: 'Poughkeepsie, NY',
          startDate: 'Sep 2014',
          endDate: 'May 2016',
          description:
            'Helped professors gather research materials for their classes'
        }
      ]
    };
    this.education = {
      title: 'Education',
      icon: faSchool,
      details: [
        {
          key: 'Vassar',
          title: 'Vassar College',
          company: 'Vassar College',
          location: 'Poughkeepsie, NY',
          startDate: 'Sep 2014',
          endDate: 'May 2018',
          description:
            'Bachelor of Arts in Computer Science with a correlate in Japanese'
        }
      ]
    };
    this.fluencies = {
      details: [
        {
          key: 'Computer',
          icon: faLaptopCode,
          title: 'Computer Languages/Frameworks',
          language: this.compLanguages
        },
        {
          key: 'Lanuage',
          icon: faLanguage,
          title: 'Languages',
          language: this.languages
        },
        {
          key: 'Software',
          icon: faWindows,
          title: 'Software',
          language: this.software
        }
      ]
    };
  }

  render() {
    return (
      <div className="h-100">
        {/* Experience */}
        <div>
          <h1 className="ml3">Experience</h1>
          <ResumeItem item={this.experience} />
        </div>

        {/* Education */}
        <div>
          <h1 className="ml3">Education</h1>
          <ResumeItem item={this.education} />
        </div>

        {/* Fluencies */}
        <div>
          <h1 className="ml3">Skills</h1>
          <ResumeItemLanguages item={this.fluencies} />
        </div>

        <p className="f3">
          Download full resume&nbsp;
          <a
            href="../../../resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
        </p>
      </div>
    );
  }
}

export default Resume;
