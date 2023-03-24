import React, { useRef, useState } from "react";
import emailjs, { send } from "@emailjs/browser";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Box, Button, Typography } from "@mui/material";
import LoginDialog from "../login/LoginDialog";
import CircularProgress from "@mui/material/CircularProgress";
import styled from "@emotion/styled";

const DeliveryRequest = () => {
  const form = useRef();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // styling submit button
  const SubmitButton = styled(Button)`
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

  const sendEmail = (e) => {
    e.preventDefault();
    if (localStorage.getItem("loggedinUser")) {
      setLoading(true);
      emailjs
        .sendForm(
          "service_dlzs3xt",
          "template_00ryjhh",
          form.current,
          "TYA92gMvslX9TZbwy"
        )
        .then(
          (result) => {
            handleSuccessfulSubmission();
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setLoading(false);
      setOK(false);
    } else {
      setOpen(true);
    }
  };

  const [ok, setOK] = useState(false);
  const navigate = useNavigate();
  const handleSuccessfulSubmission = () => {
    // implement some delay
    setOK(true);
    // navigate("/");

    setTimeout(() => {
      setOK(false);
    }, 3000);
    return;
  };

  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div style={{ padding: 20 }}>
      <h5 style={{ margin: "auto", width: "500px" }}>
        Please fill in the details to get your order delivered.
      </h5>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      ></Box>

      <form
        ref={form}
        onSubmit={sendEmail}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "500px",
          margin: "auto",
        }}
      >
        {/* <label style={{paddingTop: 20}}>Name</label> */}
        {/* <input type="text" name="user_name" value={localStorage.getItem("loggedinUser")} required/> */}
        <TextField
          id="outlined-basic"
          name="user_name"
          variant="filled"
          required
          style={{ marginTop: 20 }}
          value={localStorage.getItem("loggedinUser")}
          readOnly
        />

        {/* <label style={{paddingTop: 20}}>Email</label> */}
        {/* <input type="email" name="user_email" required/> */}

        <TextField
          id="outlined-basic"
          name="user_email"
          type="email"
          variant="outlined"
          label="Enter valid Email"
          style={{ marginTop: 20 }}
          required
        />

        {/* <label style={{paddingTop: 20}}>Phone number</label> */}
        {/* <input type="tel" name="user_phone" required/> */}

        <TextField
          id="outlined-basic"
          name="user_phone"
          variant="outlined"
          label="Enter Phone Number"
          required
          style={{ marginTop: 20 }}
        />

        {/* <label style={{paddingTop: 20}}>Enter your address</label>
        <input type="text" name="user_address" required /> */}

        <TextField
          id="outlined-basic"
          name="user_address"
          variant="outlined"
          label="Enter Shipping Address"
          style={{ marginTop: 20 }}
          required
        />

        {/* <label style={{paddingTop: 20}}>Ordered Products ({cartItems.length})</label> */}
        <Typography style={{ marginTop: 20 }}>
          Products ({cartItems.length})
        </Typography>
        <TextField
          style={{ marginTop: 2 }}
          name="Your products"
          id="outlined-basic"
          variant="filled"
          value={cartItems.map((item) => {
            //  console.log(item.title.longTitle);
            return item.title.longTitle + "\n";
          })}
          multiline={true}
          rows={3}
          readOnly
        ></TextField>

        <SubmitButton style={{ marginTop: 20 }} type="submit">
          {loading === true ? <CircularProgress color="inherit"/> : "Place Order"}
          {/* <input style = {{outline: "none"}}type="submit" value={cirularProgress ? <CircularProgress/> : "Submit"} style={{ marginTop: 20 }}/> */}
        </SubmitButton>
        {ok && <h6>Your order has been placed</h6>}
      </form>
      <LoginDialog open={open} setOpen={setOpen}></LoginDialog>
    </div>
  );
};

export default DeliveryRequest;
