import React from 'react';
import './Discover.css';

import Program_1 from '../../assets/Disc1.jpg';
import Program_2 from '../../assets/Disc2.jpg';
import Program_3 from '../../assets/Disc3.jpg';

import Program_icon_1 from '../../assets/disicon1.png';
import Program_icon_2 from '../../assets/disicon2.png';
import Program_icon_3 from '../../assets/disicon3.png';

const Programs = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <a href="#linkbook">
          <img src={Program_1} alt="Book Flights" />
          <div className="caption">
            <img src={Program_icon_1} alt="Book Flights" />
            <p>Book Flights</p>
          </div>
        </a>
      </div>
      <div className='program'>
        <a href="#linkbook">
          <img src={Program_2} alt="Book Hotels" />
          <div className="caption">
            <img src={Program_icon_2} alt="Book Hotels" />
            <p>Book Hotels</p>
          </div>
        </a>
      </div>
      <div className='program'>
        <a href="#linkbook">
          <img src={Program_3} alt="Book Transfer" />
          <div className="caption">
            <img src={Program_icon_3} alt="Book Transfer" />
            <p>Book Transfer</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Programs;
