import {
  Dialog,
  TextField,
  Box,
  Button,
  Typography,
  styled,
} from "@mui/material";

import React, { useState, useContext, useEffect } from "react";
import {
  authenticateSignup,
  authenticateLogin,
  getCartDetails,
} from "../../service/api";
import { DataContext } from "../../context/DataProvider";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import toast from "react-hot-toast";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
  overflow: hidden;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 100%;
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
    margin-top: 15px;
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
  // requestOTP: {
  //   view: "requestOTP",
  //   heading: "OTP",
  //   subHeading: "requestOTP"
  // }
};

const signUpInitialValues = {
  firstname: "",
  email: "",
  password: "",
  confirmpassword: "",
  phone: "",
};

const loginInitialValues = {
  email: "",
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

  // for phone
  const [phoneError, setphoneError] = useState(false);

  // circular Progress
  const [loading, setloading] = useState(false);

  const handleClose = () => {
    setOpen(false);
    showError(false);
    setloading(false);
    toggleAccount(accountInitialValue.login);
  };

  const toggleSignup = () => {
    showError(false);
    toggleAccount(accountInitialValue.signup);
  };

  const toggleLogin = () => {
    showError(false);
    toggleAccount(accountInitialValue.login);
  };

  // const toggleRequestOTP = () => {
  //   toggleAccount(accountInitialValue.requestOTP);

  // }

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    setAlreadyExists(false);
    showError(false);
    setpasswordmismatches(false);
    setphoneError(false);
  };

  const [alreadyExists, setAlreadyExists] = useState(false);

  const [passwordmismatches, setpasswordmismatches] = useState(false);

  const signupUser = async () => {
    //  console.log(signup);
    setloading(true);

    try {
      // console.log(signup.firstname);
      if (
        signup.firstname.length === 0 ||
        signup.phone.length === 0 ||
        signup.password.length === 0 ||
        signup.confirmpassword.length === 0
      ) {
        showError(true);
        setloading(false);
        return;
      }

      // to show error when password doesn't matches

      if (signup.password !== signup.confirmpassword) {
        alert("Password doesn't match");
        setpasswordmismatches(true);
        setloading(false);
        return;
      }

      if (signup.phone.length < 10 || signup.phone.length > 10) {
        setphoneError(true);
        setloading(false);
        return;
      }

      let response = await authenticateSignup(signup);

      if (response === 401 || response === 500) {
        // console.log("Already exists");
        setAlreadyExists(true);
        setloading(false);
        return;
      }

      console.log("Signup response", response);
      setloading(false);
      //console.log(response.data);
      handleClose();
      setAccount(signup.firstname);
      localStorage.setItem("loggedinUser", response.data.username);
      localStorage.setItem("authToken", response.data.authToken);
      if (!response) return;
      else {
      }
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
    showError(false);
    setphoneError(false);
  };

  const loginUser = async () => {
    // checks
    if (login.email.length === 0 || login.password.length === 0) {
      showError(true);
      toast.error("Login Failed.");
      return;
    }
    setloading(true);
    let response = await authenticateLogin(login);
    // console.log("Front end", response.data);
    if (response === 401) {
      showError(true);
      toast.error("Login Failed.");
    } else {
      showError(false);
      handleClose();
      // for toastify
      toast.success("Login Success.");
      // console.log("Login data", response.data.username);
      setAccount(response.data.username);
      localStorage.setItem("loggedinUser", response.data.username);
      localStorage.setItem("authToken", response.data.authToken);
      loadCartItems();
      // setting fields as empty again
      setLogin({ email: "", password: "" });
    }
    setloading(false);
  };

  const dispatch = useDispatch();

  const loadCartItems = async () => {
    let data = await getCartDetails();
    // console.log("Cart from oon login first", data);
    for (let i = 0; i < data.length; i++) {
      // console.log(data[i].id);
      dispatch(addToCart(data[i].id, 1));
    }
  };

  useEffect(() => {
    return () => {
      if (localStorage.getItem("loggedinUser")) {
        setAccount(localStorage.getItem("loggedinUser"));
        // console.log(setAccount);
      }
    };
  });

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

          {account.view === "login" && (
            <Wrapper style={{ paddingTop: "0" }}>
              <TextField
                onChange={(e) => onValueChange(e)}
                type="email"
                name="email"
                label="Enter email"
                variant="standard"
              />
              {error && <Error>Please enter valid Credentials.</Error>}
              <TextField
                onChange={(e) => onValueChange(e)}
                name="password"
                label="Enter Password"
                variant="standard"
                type="password"
              />
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton onClick={() => loginUser()}>
                {loading ? <CircularProgress color="inherit" /> : "Login"}
              </LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              {/* <Divider style={{width: "100%", backgroundColor: "#333", marginTop: "15px"}}></Divider> */}
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAccount onClick={() => toggleSignup()}>
                New to Filpkart? Create an account
              </CreateAccount>
            </Wrapper>
          )}

          {account.view === "signup" && (
            <Wrapper style={{ paddingTop: "0" }}>
              <TextField
                id="standard-basic"
                label="Enter Name"
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="firstname"
                required
              />

              <TextField
                id="standard-basic"
                label="Enter Email"
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="email"
                type="email"
                required
              />

              <TextField
                id="standard-basic"
                label="Enter Phone"
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="phone"
                type="number"
                required
              />
              {phoneError && (
                <Error>Please enter valid 10 digit phone number.</Error>
              )}

              <TextField
                id="standard-basic"
                label="Enter Password"
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="password"
                type="password"
                autoComplete="off"
                required
              />

              <TextField
                id="standard-basic"
                label="Re-enter Password"
                variant="standard"
                type="password"
                onChange={(e) => onInputChange(e)}
                name="confirmpassword"
                required
              />

              {passwordmismatches && <Error>Password doesn't match.</Error>}

              {alreadyExists && (
                <Error>Email or Phone Number already exists.</Error>
              )}

              {error && <Error>One or more field(s) are empty.</Error>}

              <LoginButton onClick={() => signupUser()}>
                {loading ? <CircularProgress color="inherit" /> : "Continue"}
              </LoginButton>
              <CreateAccount onClick={() => toggleLogin()}>
                Already have an account? Login
              </CreateAccount>
            </Wrapper>
          )}
          {/* {account.view === "requestOTP" && <Box>

          OTP thing
          </Box>} */}
        </Box>
      </Component>
    </Dialog>
  );
};
export default LoginDialog;
