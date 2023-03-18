//components
import Header from "./components/header/Header";
import Home from "./components/home/Home";

import { Box } from "@mui/material";
import DataProvider from "./context/DataProvider";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// this routing is used for those pages which needs to be changed e.g Home page
// route is used for url component

import DetailView from "./components/details/DetailView";

import Cart from "./components/cart/Cart";
import Footer from "./components/footer/Footer";
import DetailView2 from "./components/details/DetailView2";

import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

function App() {
  const [progress, setProgress] = useState(10);

  return (
    <DataProvider>
      <BrowserRouter>
        <LoadingBar color="#f1ee8e" height={3} progress={progress} />
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path="/" element={<Home setProgress={setProgress} />} />
            {/* <Route path="/product/:id" element={<DetailView />} /> */}
            <Route
              path="/product/:id"
              element={<DetailView setProgress={setProgress} />}
            />
            <Route path="/electronicsProduct/:id" element={<DetailView2 />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Box>
        <Footer />
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
