import { InputBase, Box, List, ListItem, styled } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { getProducts } from "../../redux/actions/productActions";

import { Link } from "react-router-dom";

// handling css
const SearchContainer = styled(Box)(({ theme }) => ({
  background: "#fff",
  width: "38%",
  borderRadius: "2px",
  marginLeft: "10px",
  display: "flex",
}));

const InputSearchBase = styled(InputBase)(({ theme }) => ({
  paddingLeft: "10px",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    width: "200px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`;

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #ffffff;
  margin-top: 36px;
`;

const Search = () => {
  const [text, setText] = useState("");
  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts);
  }, [dispatch]);
  const getText = (text) => {
    setText(text);
  };

  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for products, brands and more"
        onChange={(e) => getText(e.target.value)}
        value={text}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>

      {text && (
        <ListWrapper style={{ width: "inherit" }}>
          {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <ListItem style={{ width: "100%" }}>
                <Link
                  to={`/product/${product.id}`}
                  onClick={() => setText("")}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Box>
                    <img
                      src={product.url}
                      style={{ width: "30px", paddingRight: "10px" }}
                    />
                    {product.title.longTitle}
                  </Box>
                </Link>
              </ListItem>
            ))}
        </ListWrapper>
      )}
    </SearchContainer>
  );
};
export default Search;
