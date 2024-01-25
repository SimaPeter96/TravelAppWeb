import React, { useState } from 'react';
import BgImg1 from '../Images/BgImage.png';
import Bokaap from '../Images/BokaapImg.jpg';
import google from '../assets/google.svg';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateForm = () => {
        let isValid = true;
    
        // Basic email validation
        if (!email) {
          setEmailError('Email is required');
          isValid = false;
        } else {
          setEmailError('Please enter a valid email');
        }
    
        // Basic password validation
        if (!password) {
          setPasswordError('Password is required');
          isValid = false;
        } else {
          setPasswordError('Password must be at least 8 characters long');
        }
    
        // Additional validation logic can be added here
    
        return isValid;
      };
    
      const handleSubmit = () => {
        const isValid = validateForm();
    
        if (isValid) {
          // Proceed with login logic
          // ...
        }
      };
  
   

  
  return (
    <div className="w-screen h-screen flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 relative">
        <img src={BgImg1} alt="" className="w-full h-full object-cover" />
        <div className="absolute top-2 left-0 right-0 text-left mt-10 lg:ml-10">
          <div className="title">
            <span className="text-4xl absolute top-0 left-0 right-0 mt-2 ml-2 font-bold text-blue text-center mix-blend-overlay font-poppins">
              MOTHER CITY TOURS
            </span>
          </div>
          <div className="relative h-35 w-48 mt-24 mx-4">
            <span className="font-bold text-white mb-8">Login into your account</span>
          </div>
          <div className="py-2">
            <div className="emailplaceholder">
              <span className="mr-8 w-full text-md font-bold text-gray-600">Email</span>
            </div>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:text-gray-500"
              name="email"
              id="email"
              style={{ width: 'calc(100% - 15rem)' }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <div className="text-red-500">{emailError}</div>}
          </div>
          <div className="py-0">
            <div className="passwordplaceholder">
              <span className="mr-6 w-full text-md font-bold text-gray-600">Password</span>
            </div>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:text-gray-500"
              name="password"
              id="password"
              style={{ width: 'calc(100% - 15rem)' }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
             
             {passwordError && <div className="text-red-500">{passwordError}</div>}

            </div>

          <div className="flex justify-between items-center py-4">
            <div className="mr-24">
              <input type="checkbox" name="ch" id="ch" className="mr-2" />
              <span className="text-md">Remember me</span>
            </div>
            <div>
              <span className="font-bold me-60 text-md">Forgot password?</span>
            </div>
          </div>
          <div className="buttons mt-6">
            <button
              className="w-full bg-transparent shadow-lg border border-white text-md p-2 rounded-lg mb-4 text-white hover:bg-[#75AFF2]"
              style={{ width: 'calc(100% - 15rem)' }}
              onClick={handleSubmit}
            >
              LOGIN
            </button>
            <button
              className="w-full bg-white border-white shadow-lg text-md p-2 rounded-lg flex items-center justify-center hover:bg-slate-400"
              style={{ width: 'calc(100% - 15rem)' }}
            >
              <img src={google} alt="" className="w-6 h-6 inline mr-2" />
              SIGN IN WITH GOOGLE
            </button>
          </div>
          <div className="text-end me-60 text-black">
            Don't have an account?
            <span className="font-bold text-black">Sign up</span>
          </div>
        </div>
      </div>

      <div className="hidden lg:block w-1/2 relative">
        <img src={Bokaap} alt="" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 right-0 text-center mt-10">
          <span className="text-6xl font-bold text-blue mix-blend-overlay font-poppins">
            WELCOME BACK
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
