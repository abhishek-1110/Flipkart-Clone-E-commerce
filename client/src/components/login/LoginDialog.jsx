import {
  Dialog,
  TextField,
  Box,
  Button,
  Typography,
  styled,
} from "@mui/material";

import React, { useState, useContext } from "react";
import { authenticateSignup, authenticateLogin } from "../../service/api";
import { DataContext } from "../../context/DataProvider";


const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
  overflow: hidden;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 83%;
  width: 30%;
  padding: 50px 35px;
  & > p,
  & > h5 {
    color: #fff;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > p,
  & > button {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
  font-weight: 600;
  :hover {
    background: #fb641b;
  }
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
  font-weight: 600;
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 14px;
  text-align: justify;
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const accountInitialValue = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with your mobile to get started",
  },
};

const signUpInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValues = {
  username: "",
  password: "",
};

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: bold;
`;
const LoginDialog = ({ open, setOpen }) => {
  // for changing the states login and sign up window
  const [account, toggleAccount] = useState(accountInitialValue.login); // states

  // state for storing values entered by users
  const [signup, setSignup] = useState(signUpInitialValues);

  // finding values
  const { setAccount } = useContext(DataContext);

  const [login, setLogin] = useState(loginInitialValues);

  // states
  const [error, showError] = useState(false);

  const handleClose = () => {
    setOpen(false);
    showError(false);
    toggleAccount(accountInitialValue.login);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValue.signup);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    handleClose();
    setAccount(signup.username);
    if (!response) return;
    else {
    }
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    if (!response) showError(true);
    else {
      showError(false);
      handleClose();
      setAccount(login.username);
    }
  };

  return (
    // unsetting width of dialog
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {account.subHeading}
            </Typography>
          </Image>

          {account.view === "login" ? (
            <Wrapper style={{ paddingTop: "0" }}>
              <TextField
                onChange={(e) => onValueChange(e)}
                name="username"
                id="standard-basic"
                label="Enter username"
                variant="standard"
              />
              {error && <Error>Please enter valid Credentials.</Error>}
              <TextField
                onChange={(e) => onValueChange(e)}
                name="password"
                id="standard-basic"
                label="Enter Password"
                variant="standard"
              />
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton onClick={() => loginUser()}>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAccount onClick={() => toggleSignup()}>
                New to Filpkart? Create an account
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper style={{ paddingTop: "0" }}>
              <TextField
                id="standard-basic"
                label="Enter First Name"
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="firstname"
              />
              <TextField
                id="standard-basic"
                label="Enter Last Name"
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="lastname"
              />
              <TextField
                id="standard-basic"
                label="Enter Username"
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="username"
              />
              <TextField
                id="standard-basic"
                label="Enter Email"
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="email"
              />
              <TextField
                id="standard-basic"
                label="Enter Password"
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="password"
              />
              <TextField
                id="standard-basic"
                label="Enter Phone"
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="phone"
              />
              <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};
export default LoginDialog;