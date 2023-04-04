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
import DeliveryRequest from "./components/pages/DeliveryRequest";
import ErrorPage from "./components/pages/ErrorPage";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import OrderDetails from "./components/details/OrderDetails";
// import About from "./components/pages/About";

function App() {
  const [progress, setProgress] = useState(0);

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
            <Route path="/cart" element={<Cart setProgress={setProgress} />} />
            <Route path="/deliveryForm" element={<DeliveryRequest/>}/>
            <Route path="*" element={<ErrorPage/>}/>
            <Route path="/pages/privacypolicy" element={<PrivacyPolicy/>}/>
            <Route path="/orders/details" element={<OrderDetails/>}/>
            
          </Routes>
        </Box>
        <Footer />
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
