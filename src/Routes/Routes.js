import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Main from "./../pages/Main";
import Registration from "./../pages/Registration";
import Login from './../pages/Login'
import Profile from "./../pages/Profile";
import ProfileInfo from "./../components/Profile/ProfileBody/ProfileInfo";
import ProfileSettings from "./../components/Profile/ProfileBody/ProfileSettings";
import ProfileMyCart from "./../components/Profile/ProfileBody/ProfileMyCart";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to='product' />} />
          <Route path="product/" element={<Main />}>
            <Route path=":category/" element={<Main />} />
          </Route>
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<Login />} />
          <Route path="profile/*" element={<Profile />}>
            <Route path='' element={<ProfileInfo />} />
            <Route path='my-profile' element={<ProfileInfo />} />
            <Route path='settings' element={<ProfileSettings />} />
            <Route path='my-cart' element={<ProfileMyCart/>} />
          </Route>
    </Routes>
  )
}
