import React from 'react'
import Login from './Componets/Login';
import { Outlet, Navigate, Route, Routes, useLocation}  from 'react-router-dom';
import Landing from './Componets/Landing';
import SignUp from './Componets/SignUp';
import WelcomePg from './Componets/WelcomePg';

function Layout(){
  const user = null;
  const location = useLocation()

  return user?.token ? (
    <Outlet/>
  ): (
    <Navigate to='/login' state={{ from: location }} replace />
  );
}

function App() {
  return (
    <div>    
      <Routes>
       
        <Route index element={<Landing/>}/>
        <Route path='/login' element={<Login />} />
         <Route path='/signUp' element={<SignUp />} />
          <Route path='/profile/:id?' element={<profile />} />
          <Route path='/welcomepg' element={<WelcomePg />} />
          <Route element={<Layout />}>
        </Route>
{/* 
           <Route path='/login' element={<Login />} />
          <Route path='/reset-password' element={<ResetPassword />} /> */}
      </Routes>
    </div>
  )
}

export default App