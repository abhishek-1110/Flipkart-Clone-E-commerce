import { AppBar, Toolbar, Box, styled, Typography } from "@mui/material";

// imported component
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import { Link } from "react-router-dom";
import logo from '../../images/AceCart.png';
// handling css
const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;
const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
`;

const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const PlusImage = styled("img")({
  width: 10,
  height: 10,
});

const CustomButton = styled(Box)(({ theme}) => ({
  margin: "0 5px 0 10px",
  
}));

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const Plus =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
        <Component to ='/' style={{textDecoration:"none", color: "inherit"}}>
          <img src={logo} alt="logo" style={{ width: 75 }} />
          <Box style={{ display: "flex" }}>
            <SubHeading>
              Explore&nbsp;
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus&nbsp;
              </Box>
            </SubHeading>
            <PlusImage src={Plus} alt="plus logo" />
          </Box>
        </Component>
        <Search />
        <CustomButton>
          <CustomButtons />
        </CustomButton>
      </Toolbar>
    </StyledHeader>
  );
};
export default Header;
