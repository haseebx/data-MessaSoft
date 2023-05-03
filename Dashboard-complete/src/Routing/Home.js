import React from 'react'
import { Route, Routes } from "react-router-dom";
import UserLogin from '../Components/login/UserLogin';
import SignUp from '../Components/signup/SignUp';
import Dashborad from '../pages/Dashborad';
const Home = () => {
  return (
    <div>
<Routes>
        <Route path="/" element={<UserLogin/>} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="DashBorad" element={<Dashborad />} />
        </Routes>
    </div>
  )
}

export default Home