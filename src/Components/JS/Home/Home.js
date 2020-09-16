/* eslint-disable global-require */
import React from 'react';
import {
  faLinkedin,
  faFacebook,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import SocialMedia from '../SocialMedia/SocialMedia';

import '../../CSS/Home.css';

const socialMediaList = [
  {
    id: 'fb',
    link: 'https://www.facebook.com/solomon.kim.319',
    alt: 'Facebook',
    pic: faFacebook,
  },
  {
    id: 'github',
    link: 'https://github.com/Lotrius',
    alt: 'Github',
    pic: faGithub,
  },
  {
    id: 'linkedin',
    link: 'https://www.linkedin.com/in/solomon-kim/',
    alt: 'LinkedIn',
    pic: faLinkedin,
  },
];

const Home = () => {
  return (
    <div>
      {/* IMAGE */}
      <div className="homescreen row animated fadeIn flex justify-center mt5 mb4">
        {/* Left column */}
        <div className="picdiv w-25 mr6 tc">
          <img
            className="pic br-100 w-60"
            src={require('../../../Pics/me.png')}
            itemProp="image"
            alt="Avatar"
          />

          {/* Name */}
          <h2 className="pt2">Solomon Kim</h2>

          {/* Social Media */}
          <div
            className="tc w-70 flex justify-around"
            style={{ margin: '0 auto' }}
          >
            <SocialMedia socialMediaList={socialMediaList} path="home" />
          </div>
        </div>

        {/* Description */}
        <div className="desc w-40">
          <p className="f1 b">Bio</p>
          <p className="f3">
            I spend most of my days either coding things such as this website,
            juggling (read: dropping), or at the gym.
          </p>
          <p className="f3">
            Ultimately I would like to be able to take my experience building
            different types of applications into things like localization
            projects.
          </p>
          <p className="f3">
            I wonder how much more space I have to fill up before it looks
            marginally acceptable and not just full of empty space. Yeah that
            looks about good.
          </p>
          <p style={{ color: 'rgb(243, 243, 237)' }}>
            i&apos;m v confused a lot tbh
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
