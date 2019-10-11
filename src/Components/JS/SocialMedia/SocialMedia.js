/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMedia = ({ socialMediaList, path }) => {
  return socialMediaList.map(desc => (
    <li className={path === 'home' ? 'fl' : null} key={desc.id}>
      <a
        id={desc.id}
        href={desc.link}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon
          className={`mt-4 fa-3x ${path === 'contact' ? 'black' : null}`}
          icon={desc.pic}
        />
        {path === 'contact' ? <p className="black">{desc.alt}</p> : null}
      </a>
    </li>
  ));
};

export default SocialMedia;
