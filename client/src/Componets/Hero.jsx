import React from 'react';
import Img from '../Componets/Images/landingIMG.jpg';

function Hero() {
  return (
    <div className="w-full h-[98vh] relative">
      <img src={Img} alt="Image" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-8xl font-medium mx-auto max-w-10xl pb-4 text-black mix-blend-overlay font-poppins">MOTHER CITY TOURS</h1>
          <p className="text-xl text-white font-bold italic mb-6" style={{ fontFamily: 'Raleway, sans-serif', wordSpacing: '6px' }}>
            Experience&nbsp; Enjoy&nbsp; Explore&nbsp;  
          </p>
        </div>
        <div className="flex space-x-4 mt-10">
          <button className="px-4 py-2 bg-amber-600 text-white shadow-lg rounded-xl text-sm">EXPLORE</button>
          <button className="px-4 py-2 bg-amber-600 text-white shadow-lg rounded-xl text-sm">RESTAURANTS</button>
          <button className="px-4 py-2 bg-amber-600 text-white shadow-lg rounded-xl text-sm">WINE FARMS</button>
          <button className="px-4 py-2 bg-amber-600 text-white shadow-lg rounded-xl text-sm">ACTIVITIES</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
