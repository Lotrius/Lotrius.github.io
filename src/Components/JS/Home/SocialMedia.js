/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';

const socialMediaList = [
  {
    id: 'fb',
    link: 'https://www.facebook.com/solomon.kim.319',
    alt: 'Facebook'
  },
  {
    id: 'github',
    link: 'https://github.com/Lotrius',
    alt: 'Github'
  },
  {
    id: 'linkedin',
    link: 'https://www.linkedin.com/in/solomon-kim/',
    alt: 'LinkedIn'
  }
];

const SocialMedia = () => {
  return socialMediaList.map(desc => (
    <li className="fl" key={desc.id}>
      <a
        id={desc.id}
        href={desc.link}
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          className="pt4 pb2"
          src={require(`../../../Pics/${desc.id}.png`)}
          alt={desc.alt}
        />
      </a>
    </li>
  ));
};

export default SocialMedia;
