import React from 'react';

const jobs = [
  {
    title:
      'IT Generalist - Industrial Bank of Korea New York Branch (New York, NY)',
    dates: 'October 2018 - April 2019',
    duties: [
      'Maintained and updated branch’s test, production, and disaster recovery servers',
      'Gathered data from Oracle databases for risk assessments, application tunings, and daily work',
      'Created IT operations manual',
      'Translated and gave annual cybersecurity training to English-speaking employees'
    ]
  },
  {
    title:
      'Barefoot Monkeys Treasurer - Vassar College Barefoot Monkeys (Poughkeepsie, NY)',
    dates: 'August 2017 – May 2018',
    duties: [
      'Kept track of club’s budget and all monetary transactions',
      'Negotiated with Vassar Student Association to get extra $920 in funds to purchase equipment',
      'Worked with club executive board to plan events and resolve conflicts'
    ]
  },
  {
    title:
      'Japanese Language Drill Instructor - Vassar College (Poughkeepsie, NY)',
    dates: 'September 2016 – May 2018',
    duties: [
      'Taught Japanese language and culture to first year Japanese language students',
      'Reviewed material from Japanese classes'
    ]
  },
  {
    title:
      'Hispanic Studies Research Assistant - Vassar College (Poughkeepsie, NY)',
    dates: 'September 2014 – May 2016',
    duties: ['Helped professors gather research materials for their classes']
  }
];

const Experience = () => {
  return jobs.map(experience => (
    <div className="bb">
      <h3>{experience.title}</h3>
      <h3>{experience.dates}</h3>
      <ul>
        {experience.duties.map(duties => (
          <li>
            <h5>{duties}</h5>
          </li>
        ))}
      </ul>
    </div>
  ));
};

export default Experience;
