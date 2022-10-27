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
            </Routes>
      </Container>


    </BrowserRouter>
  );
}

export default App;
