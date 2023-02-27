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

import { electronicsproducts } from "../../utils/ElectronicsData";

import { useDispatch, useSelector } from "react-redux"; // hooks
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

  // const { electronicsproducts } = useSelector(
  //   (state) => state.getelectronicsProducts
  // );

  // console.log(electronicsproducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Component>
        <Banner />
        <MidSlide products={products} title="Deal of the Day" timer={true} />
        <MidSection />
        <Slide products={electronicsproducts} title="Electronic Products" />
      </Component>
    </>
  );
};
export default Home;
