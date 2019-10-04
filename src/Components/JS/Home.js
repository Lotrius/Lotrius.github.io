/* eslint-disable global-require */
import React from 'react';

import '../CSS/general.css';
import SocialMedia from './SocialMedia';

const Home = () => {
  return (
    <div>
      {/* IMAGE */}
      <div className="row animated fadeIn flex justify-center mt4 mb4">
        <div className="cont flex justify-center mt2 ba bw1">
          <div>
            <img
              src={require('../../Pics/me.jpg')}
              itemProp="image"
              alt="Avatar"
            />
          </div>
          <div className="pl3 pr3 bl bw1">
            <h1>idk man what do i even do</h1>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer
        className="bg-dark overflow-auto relative w-100"
        style={{
          height: '-3em',
          marginTop: '10em'
        }}
      >
        <div>
          <ul className="overflow-auto">
            <SocialMedia />
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Home;
