import React, { useEffect } from "react";
import { getOrderDetails } from "../../redux/actions/ordersAction";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, Typography, styled } from "@mui/material";
import OrderItem from "./OrderItem";
import { useNavigate } from "react-router-dom";

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: "15",
  [theme.breakpoints.down("md")]: {
    marginBottom: 15,
  },
}));

const OrderDetails = () => {
  const dipsatch = useDispatch();
  const { orders } = useSelector((state) => state.order);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('loggedinUser')) {
        navigate("/");
    }
    dipsatch(getOrderDetails());
  });

  const Container = styled(Box)`
    margin: 10px 50px;
  `;
  return (
    <Container container>
    <LeftComponent item lg={9} md={9} sm={12} xs={12}>
      <Header>
        <Typography>My orders ({orders.length})</Typography>
      </Header>
      {orders.map((item) => (
        <OrderItem item={item} key = {item.id}/>
      ))}

    </LeftComponent>
    </Container>
  );
};

export default OrderDetails;
