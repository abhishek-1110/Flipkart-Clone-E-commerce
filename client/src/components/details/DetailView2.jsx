import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getElectronicsProductDetails } from "../../redux/actions/electronicsProductActions";

import {
  Box,
  Typography,
  Grid,
  styled,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

import ActionItem from "./ActionItem";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { pincodes } from "../../constants/pincodes";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Component = styled(Box)`
  background: #f2f2f2;
  margin-top: 55px;
`;
const Container = styled(Grid)(({ theme }) => ({
  background: "#fff",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));

const RightContainer = styled(Grid)`
  margin-top: 50px;
`;

const OffersDescription = styled(Box)`
  & > p {
    margin-top: 10px;
    font-size: 14px;
  }
`;

const LocalOffer = styled(LocalOfferIcon)`
  color: #388e3c;
  font-size: 12px;
  margin-right: 4px;
`;

const InputField = styled("input")`
  label {
    font-size: 14px;
  }
`;

const TableData = styled(TableCell)`
  border: none;
  color: #878787;
`;

const CheckPincode = styled(Typography)`
  color: #2874f0;
  cursor: pointer;
  font-size: 14px;
  margin-left: 5px;
  font-weight: 600;
`;

const DeliveryStatus = styled(Typography)`
  margin-left: 5px;
  font-size: 14px;
`;

const LocationIcon = styled(LocationOnIcon)``;

const DetailView2 = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const { electronicsProduct } = useSelector(
    (state) => state.getElectronicsProductDetails
  );
  const [delivery, setDelivery] = useState(false);
  const [checkDelivery, setCheckDelivery] = useState(false);

  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    dispatch(getElectronicsProductDetails(id));
    setLoading(false);
  }, [dispatch]);


  const checkingValidPinCode = () => {
    let result = document.getElementById("pincode").value;

    if (result.length === 0) {
      setDelivery(false);
    }
    if (result.length < 6 || result.length > 6) {
      // setCheckDelivery(true)
    }

    if (pincodes.has(result)) {
      setDelivery(true);
    } else {
      setDelivery(false);
    }
  };
  return (
    <Component>
      {loading === false ? (
        electronicsProduct &&
        Object.keys(electronicsProduct).length && (
          <Container>
            <Grid item lg={4} md={4} sm={8} xs={12}>
              <ActionItem product={electronicsProduct} />
            </Grid>

            <RightContainer item lg={8} md={8} sm={8} xs={12}>
              <Typography>{electronicsProduct.title.longTitle}</Typography>

              <Typography
                style={{ marginTop: 5, color: "#878787", fontSize: 14 }}
              >
                8 Ratings &amp; 1 review
                <img
                  src={fassured}
                  style={{ width: 75, marginLeft: 20, verticalAlign: "middle" }}
                  alt="assured"
                />
              </Typography>

              <Typography>
                <Box component="span" style={{ fontSize: 28 }}>
                  ₹{electronicsProduct.price.cost}
                </Box>
                &nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: "#878787" }}>
                  <strike>₹{electronicsProduct.price.mrp}</strike>
                </Box>
                &nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: "#388E3C" }}>
                  {electronicsProduct.price.discount} off
                </Box>
              </Typography>

              <Typography style={{ fontWeight: 600 }}>
                Available Offers
              </Typography>

              <OffersDescription>
                <Typography>
                  <LocalOffer />
                  Bank Offer 10% off on Axis Bank Credit Card and Credit Card
                  EMI Trxns,up to ₹1750. On orders of ₹5000 and aboveT&C
                </Typography>
                <Typography>
                  <LocalOffer />
                  Bank Offer 10% off on ICICI Bank Credit Cards (incl. EMI
                  Txns), up to ₹1,750. On orders of ₹5,000 and aboveT&C
                </Typography>
                <Typography>
                  <LocalOffer />
                  Bank Offer 8% off on Flipkart Axis Bank Credit Card, up to
                  ₹1750. On orders of ₹5000 and aboveT&C
                </Typography>
                <Typography>
                  <LocalOffer />
                  Special Price Get extra ₹6991 off (price inclusive of
                  cashback/coupon)T&C
                </Typography>
                <Typography>
                  <LocalOffer />
                  Bank Offer 5% Cashback on Flipkart Axis Bank CardT&C
                </Typography>
                <Typography>
                  <LocalOffer />
                  Bank Offer Extra 2% off on UPI transactionsT&C
                </Typography>
              </OffersDescription>

              <Table>
                <TableBody>
                  <TableRow>
                    <TableData>Warranty</TableData>
                    <TableCell style={{ border: "none" }}>
                      1 year brand Warranty
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableData>Delivery</TableData>
                    <TableCell
                      style={{
                        border: "none",
                        alignItems: "center",
                      }}
                    >
                      {/* <InputField
                      id="pincode"
                      label="Enter Delivery Pincode"
                      variant="standard"
                      maxLength="6"
                      style={{ alignItems: "center" }}
                    />
                    */}

                      <Box
                        style={{
                          borderBottom: "2px solid #2874f0",
                          display: "flex",
                          alignItems: "center",
                          width: "max-content",
                          verticalAlign: "middle",
                        }}
                      >
                        <Box>
                          <LocationIcon
                            style={{ fontSize: 14, marginRight: "6px" }}
                          />
                        </Box>
                        <Box>
                          <form>
                            <input
                              type={Text}
                              id="pincode"
                              style={{
                                border: "none",
                                outline: "none",
                                fontSize: 14,
                                fontWeight: 600,
                              }}
                              placeholder={"Enter Delivery Pincode"}
                            />
                          </form>
                        </Box>
                        <Box>
                          <CheckPincode onClick={() => checkingValidPinCode()}>
                            Check
                          </CheckPincode>
                        </Box>
                      </Box>

                      {delivery && (
                        <DeliveryStatus>
                          Expected Delivery in 2 Days.
                        </DeliveryStatus>
                      )}

                      {/* {checkDelivery && (
                      <DeliveryStatus>Enter valid pincode</DeliveryStatus>
                     )}  */}

                      {!delivery && (
                        <DeliveryStatus>
                          Enter pincode for exact delivery dates/charges
                        </DeliveryStatus>
                      )}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableData>Seller</TableData>
                    <TableCell style={{ border: "none" }}>{electronicsProduct.seller}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableData colSpan={2}>
                      <img src={adURL} alt="supercoins" width={"40%"} />
                    </TableData>
                  </TableRow>

                  <TableRow>
                    <TableData>Description</TableData>
                    <TableCell style={{ border: "none", textAlign: "justify" }}>
                      {electronicsProduct.description}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </RightContainer>
          </Container>
        )
      ) : (
        <div>Loading.......</div>
      )}
    </Component>
  );
};
export default DetailView2;
