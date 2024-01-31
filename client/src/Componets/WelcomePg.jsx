import React from 'react';
import Photo from '../Componets/Images/welcomeBG.jpg';
import Logo from '../Componets/Images/TravelAppLogo.png';
import 'tailwindcss/tailwind.css';

function WelcomePg() {
  return (
    <div className="relative h-screen flex items-center justify-center 	overflow:hiddenbg-opacity-50 shadow-md">
        <img src={Photo} alt="Photo" className='relative w-full h-full object-cover' />
        <nav className="bg-transparent p-0 absolute top-0 left-0 right-0  bg-white bg-opacity-30 shadow-md">
        <img src={Logo} className="logo" alt='logo' style={{ width: '80px' }} />
      </nav>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-8xl font-medium mx-auto max-w-10xl pb-4 text-white font-raleway">WELCOME TO THE CITY OF CAPE TOWN</h1>
        </div>
      </div>
    </div>
  )
}

export default WelcomePg