import { styled } from "@mui/material";
import Carousel from "react-multi-carousel";
import { bannerData } from "../../constants/data";

//makes the carousel
import "react-multi-carousel/lib/styles.css";

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: 280,
  // to implement theme
  // which is adjustable to small screens
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: "180px",
  },
}));

// props
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
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

const Banner = () => {
  return (
    // props from react-multi-carousel
    <Carousel
      swipeable={true}
      draggable={false}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2500}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
    >
      {bannerData && bannerData.map((data) => (
        <Image src={data.url} />
      ))}
    </Carousel>
  );
};
export default Banner;
