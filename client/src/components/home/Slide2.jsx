import Carousel from "react-multi-carousel";
//makes the carousel
import "react-multi-carousel/lib/styles.css";
import { Box, Typography, Button, Divider, styled } from "@mui/material";
import Countdown from "react-countdown";

import { Link } from "react-router-dom"; // for changing the routing on click

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Component = styled(Box)`
  margin-top: 10px;
  background-color: #fff;
`;

const Deal = styled(Box)`
  padding: 15px 20px;
  display: flex;
`;

const Timer = styled(Box)`
  display: flex;
  margin-left: 10px;
  align-items: center;
  color: #7f7f7f;
`;

const DealText = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
  margin-right: 10px;
  line-height: 32px;
`;

const ViewAllButton = styled(Button)`
  margin-left: auto;
  background-color: #2874f0;
  border-radius: 2px;
  font-size: 13px;
  font-weight: 600;
`;

const Image = styled("img")({
  width: "auto",
  height: 150,
  marginBottom: 10,
  '&:hover': {
    transform: "scale(1.1)",
    transition: "0.2s ease-in-out",
  }
});

const Text = styled(Typography)`
  font-size: 14px;
  margint-top: 5px;
`;
const Slide2 = ({ products, title, timer }) => {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box variant="span">
        {hours}:{minutes}:{seconds} Left
      </Box>
    );
  };
  return (
    <Component>
      <Deal>
        <DealText>{title}</DealText>
        {timer && (
          <Timer>
            <img
              src={timerURL}
              alt="timer"
              style={{ width: "23px", marginRight: "2px" }}
            />
            <Countdown
              date={Date.now() + 5.04e7}
              renderer={renderer}
            ></Countdown>
          </Timer>
        )}
        <ViewAllButton variant="contained" color="primary">
          View All
        </ViewAllButton>
      </Deal>
      <Divider />

      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={false}
        infinite={false}
        autoPlay={false}
        centerMode={true}
        autoPlaySpeed={1000}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {products && products.map((product) => (
          <Link to={`electronicsProduct/${product.id}`} style={{textDecoration: "none"}}>
            <Box textAlign="center" style={{ padding: "25px 20px" }}>
              <Image src={product.url} alt="product" />
              <Text style={{ fontWeight: 600, color: "#212121" }}>
                {product.title.shortTitle}
              </Text>
              <Text style={{ color: "#388e3c" }}>{product.discount}</Text>
              <Text style={{ color: "#212121", opacity: ".6" }}>
                {product.tagline}
              </Text>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Component>
  );
};
export default Slide2;
