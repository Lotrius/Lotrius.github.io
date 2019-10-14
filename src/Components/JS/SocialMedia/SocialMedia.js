/* eslint-disable no-nested-ternary */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMedia = ({ socialMediaList, path }) => {
  return socialMediaList.map(desc => (
    <a
      className={`${path === 'contact' ? 'mr3 dib tc' : null}`}
      key={desc.id}
      id={desc.id}
      href={desc.link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <FontAwesomeIcon
        className="mt-4 fa-3x black"
        style={{
          color: `${
            desc.id === 'fb' && path === 'home'
              ? '#3b5998'
              : desc.id === 'linkedin' && path === 'home'
              ? '#0E76A8'
              : '#333'
          }`
        }}
        icon={desc.pic}
      />
      {path === 'contact' ? <p className="black">{desc.alt}</p> : null}
    </a>
  ));
};

export default SocialMedia;
