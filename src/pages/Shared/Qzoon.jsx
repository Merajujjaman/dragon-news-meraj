import React from 'react';
import qZoon1 from '../../assets/qZone1.png';
import qZoon2 from '../../assets/qZone2.png';
import qZoon3 from '../../assets/qZone3.png';

const Qzoon = () => {
    return (
        <div className='bg-secondary my-4 py-4 text-center'>
            <h4>Q-Zoon</h4>
            <img src={qZoon1} alt="image" />
            <img src={qZoon2} alt="image" />
            <img src={qZoon3} alt="image" />
        </div>
    );
};

export default Qzoon;