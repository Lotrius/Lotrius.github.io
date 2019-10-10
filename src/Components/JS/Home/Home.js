/* eslint-disable global-require */
import React from 'react';

import '../../CSS/general.css';
import '../../CSS/Home.css';
import SocialMedia from './SocialMedia';

const Home = () => {
  return (
    <div>
      {/* IMAGE */}
      <div className="homescreen row animated fadeIn flex justify-center mt4 mb4">
        {/* Pic */}
        <div className="picdiv bl bt bb bw1">
          <img
            className="pic"
            src={require('../../../Pics/me.jpg')}
            itemProp="image"
            alt="Avatar"
          />
        </div>

        {/* Desc */}
        <div className="desc pl3 pr3 ba bw1 w-25">
          <h1>sometimes I juggle but mostly I just drop</h1>
          <h1>
            I also post very grainy pics of myself cause I got nothing better
          </h1>
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
