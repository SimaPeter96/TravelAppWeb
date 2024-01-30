import React from 'react';
import Photo from '../Componets/Images/welcomeBg.jpg';
import Logo from '../Componets/Images/TravelAppLogo.png';
import 'tailwindcss/tailwind.css';

function WelcomePg() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
        <img src={Photo} alt="Photo" className='relative w-full h-full object-cover' />
        <nav className="bg-transparent p-4 absolute top-0 left-0 right-0  bg-white bg-opacity-30 shadow-md">
        <img src={Logo} className="logo" alt='logo' style={{ width: '80px' }} />
      </nav>

    </div>
  )
}

export default WelcomePg