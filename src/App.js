import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import RoutesComponent from "./Routes/Routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container maxWidth='xl'>
        {/* <Category /> */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', mt: '40px' }}>
          <Box sx={{display: {md: 'flex', xs: 'block'}}}>
            <Box sx={{ margin: {md:'0 24px 0 0', xs: '0 0 20px 0'} }}>
              <Navbar />
            </Box>
            <Routes>
              <Route path="/" element={<Navigate to='product'/>}/>
              <Route path="/product/:category" element={<Main />}/>
            </Routes>
          </Box>
          <RoutesComponent />
        </Box>
      </Container>
    </BrowserRouter>
  );
}

export default App;
