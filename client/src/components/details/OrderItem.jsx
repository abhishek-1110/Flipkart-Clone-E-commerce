import { Typography, Box, styled } from "@mui/material";


const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display: flex;
  background-color: #fff;
`;

const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const SmallText = styled(Box)`
  color: #878787;
  font-size: 14px;
  margint-top: 10px;
`;


const OrderItem = ({ item }) => {
  return (
    <Component>
      <LeftComponent>
        <img src={item.url} alt="product" style={{ height: 110, width: 110 }} />
      </LeftComponent>
      <Box style={{ margin: 20 }}>
        <Typography>{item.title.longTitle}</Typography>
        <SmallText>Seller: {item.seller}</SmallText>
        <Typography style={{ margin: "10px 0px" }}>
          <Box component="span" style={{ fontWeight: 600, fontSize: "18px" }}>
            ₹{item.price.cost}
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "#878787" }}>
            <strike>₹{item.price.mrp}</strike>
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "#388E3C" }}>
            {item.price.discount} off
          </Box>
        </Typography>

      </Box>
    </Component>
  );
};

export default OrderItem;
