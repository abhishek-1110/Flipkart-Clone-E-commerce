import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { useState } from "react";

// for routing by clicking on add to cart button
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { addToCart } from "../../redux/actions/cartActions";

import { payUsingPaytm } from "../../service/api";

import { post } from "../../utils/paytm";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 10px 0 80px",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  width:"auto",
  height:"350px",
  padding: 15,

});

const StyledButton = styled(Button)`
  width: 48.5%;
  height: 50px;
  border-radius: 2px;
  margin-top: 10px;
`;

const ActionItem = ({ product }) => {
  const navigate = useNavigate(); // intialization
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  // object desctructring
  const { id } = product;
  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };

  const buyNow = async () => {
    let response = await payUsingPaytm({
      amount: 500,
      email: "abhishkbhi@gmail.com",
    });
    let information = {
      action: "https://securegw-stage.paytm.in/order/process",
      params: response,
    };
    post(information);
  };

  return (
    <LeftContainer>
      <Box
        style={{
          height: 400,
          textAlign: "center",
          padding: "15px 20px",
          border: "1px solid #f0f0f0",
        }}
      >
        <Image src={product.detailUrl} alt="product" />
      </Box>
      <Box style={{ width: "100%" }}>
        <StyledButton
          variant="contained"
          style={{ marginRight: 10, background: "#ff9f00" }}
          onClick={() => addItemToCart()}
        >
          <ShoppingCartIcon style={{ fontSize: "16px" }} />
          Add to Cart
        </StyledButton>
        <StyledButton
          variant="contained"
          style={{ background: "#fb541b" }}
          onClick={() => buyNow()}
        >
          <FlashOnIcon style={{ fontSize: "16px" }} />
          Buy Now
        </StyledButton>
      </Box>
    </LeftContainer>
  );
};

export default ActionItem;
