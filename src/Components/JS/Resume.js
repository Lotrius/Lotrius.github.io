import React from 'react';

const Resume = () => {
  return (
    <div>
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

      {/* Experience */}
      <div>
        <h1>Experience</h1>

        {/* 기업은행 */}
        <div className="bb">
          <h3>
            IT Generalist - Industrial Bank of Korea New York Branch (New York,
            NY)
          </h3>
          <h3>October 2018 - April 2019</h3>
          <ul>
            <li>
              <h5>
                Maintained and updated branch’s test, production, and disaster
                recovery servers
              </h5>
            </li>
            <li>
              <h5>
                Gathered data from Oracle databases for risk assessments,
                application tunings, and daily work
              </h5>
            </li>
            <li>
              <h5>Created IT operations manual</h5>
            </li>
            <li>
              <h5>
                Translated and gave annual cybersecurity training to
                English-speaking employees
              </h5>
            </li>
          </ul>
        </div>

        {/* Treasurer */}
        <div className="bb">
          <h3>
            Barefoot Monkeys Treasurer - Vassar College Barefoot Monkeys
            (Poughkeepsie, NY)
          </h3>
          <h3>October 2018 - April 2019</h3>
          <ul>
            <li>
              <h5>Kept track of club’s budget and all monetary transactions</h5>
            </li>
            <li>
              <h5>
                Negotiated with Vassar Student Association to get extra $920 in
                funds to purchase equipment
              </h5>
            </li>
            <li>
              <h5>
                Worked with club executive board to plan events and resolve
                conflicts
              </h5>
            </li>
          </ul>
        </div>

        {/* Drill instructor */}
        <div className="bb">
          <h3>
            Japanese Language Drill Instructor - Vassar College (Poughkeepsie,
            NY)
          </h3>
          <h3>October 2018 - April 2019</h3>
          <ul>
            <li>
              <h5>Kept track of club’s budget and all monetary transactions</h5>
            </li>
            <li>
              <h5>
                Negotiated with Vassar Student Association to get extra $920 in
                funds to purchase equipment
              </h5>
            </li>
            <li>
              <h5>
                Worked with club executive board to plan events and resolve
                conflicts
              </h5>
            </li>
          </ul>
        </div>

        {/* Research Assistant */}
        <div className="bb">
          <h3>
            Hispanic Studies Research Assistant - Vassar College (Poughkeepsie,
            NY)
          </h3>
          <h3>October 2018 - April 2019</h3>
          <ul>
            <li>
              <h5>
                Helped professors gather research materials for their classes
              </h5>
            </li>
          </ul>
        </div>
      </div>

      {/* Extracurriculars */}
      <div>
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
        <div>
          <h1>Computer Languages</h1>
          <ul>
            <li>
              <h3>PostgreSQL</h3>
            </li>
            <li>
              <h3>HTML</h3>
            </li>
            <li>
              <h3>CSS</h3>
            </li>
            <li>
              <h3>JavaScript</h3>
            </li>
            <li>
              <h3>React</h3>
            </li>
            <li>
              <h3>Python</h3>
            </li>
          </ul>
        </div>

        {/* Languages */}
        <div>
          <h1>Languages</h1>
          <li>
            <h3>Working proficiency in Korean</h3>
          </li>
          <li>
            <h3>Working proficiency in Spanish</h3>
          </li>
          <li>
            <h3>Working proficiency in Japanese</h3>
          </li>
        </div>

        {/* Software */}
        <div>
          <h1>Software</h1>
          <li>
            <h3>Confident with Microsoft Word</h3>
          </li>
          <li>
            <h3>Confident with Excel</h3>
          </li>
          <li>
            <h3>Confident with Visual Studio Code</h3>
          </li>
        </div>
      </div>
      <a
        className="f2"
        href="../../resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Here
      </a>
    </div>
  );
};

export default Resume;
