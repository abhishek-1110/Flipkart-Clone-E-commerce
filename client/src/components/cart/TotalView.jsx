import { Typography, Box, styled } from "@mui/material";
import { useState, useEffect } from "react";

const Header = styled(Box)`
  padding: 15px 24px;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;

`;

const Heading = styled(Typography)`
  color: #878787;
`

const Container = styled(Box)`
  padding: 15px 24px;
  background-color: #fff;

  & > p {
    margin-bottom: 20px;
    font-size: 14px;
  }
`;

const Price = styled(Box)`
  float: right;
`;

const Discount = styled(Typography)`
  color: green;
  font-weight: 500;
`;
const TotalView = ({ cartItems }) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  // directly calls when cart loads using useEffect
  useEffect(() => {
    totalAmount();
  }, [cartItems]);


  const totalAmount = () => {
    let price = 0,
      discount = 0;
    cartItems.map((item) => {
      price += item.price.mrp;
      discount += item.price.mrp - item.price.cost;
    });

    setPrice(price);
    setDiscount(discount);
  };

  return (
    <Box style={{marginLeft: 10}}>
      <Header>
        <Heading>PRICE DETAILS</Heading>
      </Header>
      <Container>
        <Typography>
          Price ({cartItems?.length})<Price component="span">₹{price}</Price>
        </Typography>

        <Typography>
          Discount
          <Price component="span">-₹{discount}</Price>
        </Typography>

        <Typography>
          Delivery Charges
          <Price component="span">₹40</Price>
        </Typography>

        <Typography>
          Total Payable Amount
          <Price component="span">₹{price - discount + 40}</Price>
        </Typography>

        <Discount>You will save ₹{discount - 40} on this order.</Discount>
      </Container>
    </Box>
  );
};
export default TotalView;
