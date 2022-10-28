import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main";
import Navbar from "./components/Navbar/Navbar";
import RoutesComponent from "./Routes/Routes";
import Registration from "./pages/Registration";
import { useState } from "react";
import Loader from "./components/@loader/Loader";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProfileInfo from "./components/Profile/ProfileBody/ProfileInfo";
import ProfileSettings from "./components/Profile/ProfileBody/ProfileSettings";
import ProfileMyCart from "./components/Profile/ProfileBody/ProfileMyCart";

function App() {


  return (
    <BrowserRouter>
      <Header />
      <Container maxWidth='xl'>
        {/* <Category /> */}
        <Routes>
          <Route path="/" element={<Navigate to='product' />} />
          <Route path="product/" element={<Main />}>
            <Route path=":grid/" element={<Main />} />
            <Route path=":category/" element={<Main />} />
            <Route path=":category/:grid" element={<Main />} />
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
      </Container>

    </BrowserRouter>
  );
}

export default App;
