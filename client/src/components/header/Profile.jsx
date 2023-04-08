import { Box, Menu, MenuItem, Typography, styled } from "@mui/material";
import { useState } from "react";

import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { removeFromCart } from "../../redux/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";

const Component = styled(Menu)`
  margintop: 5px;
`;
const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 20px;
  `;

  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  const logoutUser = () => {
    localStorage.removeItem("loggedinUser");
    localStorage.removeItem("authToken");
    setAccount("");

    for (let i = 0; i < cartItems.length; i++) {
      dispatch(removeFromCart(cartItems[i].id));
    }
  };
  
  return (
    <>
      <Box onClick={handleClick}>
        <Typography style={{ marginTop: 2, cursor: "pointer" }}>
          {account}
        </Typography>
      </Box>

      <Component anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose();
            logoutUser();
          }}
        >
          <PowerSettingsNewIcon color="primary" fontSize="small" />
          <Logout>Logout</Logout>
        </MenuItem>
      </Component>
    </>
  );
};
export default Profile;
