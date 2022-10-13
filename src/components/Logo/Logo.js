import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import robot from './robot.png';

const Logo = () => {
    return (
        <div className='ma4 mt0 safariZIndex'>
            <Tilt className='Tilt br2 shadow-2' style={{ height: '150px', width: '150px' }}>
                <div className='pa3'>
                    <img style={{paddingTop: '5px'}} alt='brain' src={robot}/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;