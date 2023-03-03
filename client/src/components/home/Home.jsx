// import { Fragment } from "react";

// components
// two compoents cant be returned hence wrapped using Fragment: doesn't create any extra node div
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Silde";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

import { useEffect } from "react";
import { styled } from "@mui/material";
import { Box } from "@mui/material";
import { getProducts } from "../../redux/actions/productActions";

import { useDispatch, useSelector } from "react-redux"; // hooks

import Slide2 from "./Slide2";

import { getElectronicsProducts } from "../../redux/actions/electronicsProductActions";
const Component = styled(Box)`
  padding: 10px 10px;
  background: #f2f2f2;
`;

const Home = () => {
  // useSelector to get value
  // const getProducts = useSelector(state => state.getProducts); // this getProduct is from reducer state redux store
  // const { products } = getProducts; // object destructuring
  // console.log(products);
  const { products } = useSelector((state) => state.getProducts);

  const { electronicsProducts } = useSelector(
    (state) => state.getElectronicsProducts
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getElectronicsProducts());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Component>
        <Banner />
        <MidSlide products={products} title="Deal of the Day" timer={true} />
        <MidSection />
        {/* <Slide products={products} title="Electronic Products" />
        <Slide products={products} title="Accessories" /> */}
        <Slide2 products={electronicsProducts} title="Electronic Gadgets" />
      </Component>
    </>
  );
};
export default Home;
