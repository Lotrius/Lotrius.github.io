import React from 'react';

import '../../CSS/Resume.css';
import Languages from './Languages';
import Experience from './Experience';
import CompLang from './CompLang';
import Software from './Software';

const Resume = () => {
  return (
    <div>
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
      <div className="bb">
        <h1>Education</h1>
        <h3>Vassar College (Poughkeepsie, NY)</h3>
        <ul>
          <li>
            <h5>GPA: 3.76</h5>
          </li>
        </ul>
      </div>

      {/* Extracurriculars */}
      <div className="bb">
        <h1>Extracurricular Activities</h1>
        <div>
          <h3>Barefoot Monkeys</h3>
          <ul>
            <li>
              <h5>
                Put on circus shows and performances in Vassar College’s
                student-run circus troupe
              </h5>
            </li>
          </ul>
        </div>
      </div>

      {/* Skills */}
      <div>
        {/* Computer */}
        <div className="bb">
          <h1>Computer Languages/Frameworks</h1>
          <ul>
            <CompLang />
          </ul>
        </div>

        {/* Languages */}
        <div className="bb">
          <h1>Languages</h1>
          <ul>
            <Languages />
          </ul>
        </div>

        {/* Software */}
        <div className="bb">
          <h1>Software</h1>
          <ul>
            <Software />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
