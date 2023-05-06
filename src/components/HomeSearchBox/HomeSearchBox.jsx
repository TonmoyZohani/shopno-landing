import {
  Button,
  Container,
  Grid,
  Icon,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import FlightIcon from "@mui/icons-material/Flight";
import GroupsIcon from "@mui/icons-material/Groups";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
// import { addDays, format } from "date-fns";
import { useRef } from "react";
import { FaPassport } from "react-icons/fa";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import { useNavigate } from "react-router-dom";
// import GroupFareSearchBox from "../GroupFareSearchBox/GroupFareSearchBox";
// import FlightSearchBox from "../FlightSearchBox/FlightSearchBox";
import Tab from "@mui/material/Tab";
// import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import HotelIcon from "@mui/icons-material/Hotel";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
// import { makeStyles } from "@material-ui/core";
import "./HomeSearchBox.css";
// import TourSearchBox from "../TourSearchBox/TourSearchBox";
// import UmrahSearchBox from "../UmrahSearchBox/UmrahSearchBox";
// import HotelSearchBox from "../HotelSearchBox/HotelSearchBox";
// import VisaSearch from "../VisaSearch/VisaSearch";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const HomeSearchBox = () => {
  const navigate = useNavigate();
  //todo: state for retrigger useEffect
  const [changeState, setChangeState] = useState(null);
  //todo: End for retrigger useEffect

  //todo: state for from date change
  const [changeFrom, setChangeFrom] = useState(false);
  //todo: End state for from date change

  const [type, setType] = React.useState("flight");
  const [value, setValue] = React.useState("return");
  const [fromSearchText, setFromSearchText] = useState(
    "ENTER Country| AIRPORT NAME"
  );
  const [toSearchText, setToSearchText] = useState("Cox's Bazar Airport(CXB)");

  const [departureDate, setDepartureDate] = useState(
    format(addDays(new Date(), 1), "dd MMM yy")
  );
  const [returningDate, setReturningDate] = useState(
    format(addDays(new Date(departureDate), 3), "dd MMM yy")
  );
  const [travelDate, setTravelDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 3),
      key: "selection",
    },
  ]);
  // for multiCity
  const now = useRef(new Date());
  const [from, setFrom] = useState(addDays(now.current, 1));
  const [to, setTo] = useState(addDays(now.current, 3));

  const [faddress, setfaddress] = useState("Dhaka,BANGLADESH");
  const [toAddress, setToAddress] = useState("Cox's Bazar,Bangladesh");
  const [fromSendData, setFromSendData] = useState("DAC");
  const [toSendData, setToSendData] = useState("CXB");
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [infant, setInfant] = useState(0);
  const [result, setResult] = useState(1);
  const [className, setClassName] = useState("Economy");

  const handleTypeChange = (event, newValue) => {
    setType(newValue);
  };

  return (
    <Box mt={6} style={{ width: "100%" }}>
      <Container>
        <Box
          sx={{
            padding: {
              lg: "20px 0px",
              md: "20px 0px",
              sm: "20px 0px",
              xs: "20px 0px",
            },
            borderRadius: "5px",
            height: "fit-content",
          }}
        >
          <Box sx={{ width: "100%" }} className="home-search-box-2">
            <TabContext value={type}>
              <Box
                sx={{
                  width: "100%",
                  height: { lg: "50px", md: "50px", sm: "100%", xs: "100%" },
                  borderRadius: "0px",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: {
                    lg: "flex-start",
                    md: "flex-start",
                    sm: "center",
                    xs: "center",
                  },
                  opacity: "1",
                  ".MuiTabs-flexContainer": {
                    flexWrap: "wrap",
                    padding: {
                      lg: "0px",
                      md: "0px",
                      sm: "0px 20px",
                      xs: "0px 20px",
                    },
                  },
                  "& button": {
                    borderRadius: "0px",
                    color: "var(--third-color)",
                    padding: {
                      lg: "0px",
                      md: "0px",
                      sm: "0px 10px",
                      xs: "0px 20px",
                    },
                  },

                  "& button.Mui-selected,& button.Mui-selected >svg": {
                    color: "var(--primary-color) !important",
                  },
                }}
              >
                <Box
                  style={{
                    background: "#fff",
                    borderRadius: "5px 5px 0px 0px ",
                    overflow: "hidden",
                  }}
                >
                  <TabList
                    value={type}
                    onChange={handleTypeChange}
                    TabIndicatorProps={{
                      style: { background: "primary", fontWeight: 600 },
                    }}
                    indicatorColor="none"
                  >
                    <Tab
                      icon={
                        <FlightIcon
                          sx={{
                            fontSize: {
                              xs: "15px",
                              sm: "20px",
                              color: "var(--third-color)",
                            },
                          }}
                        />
                      }
                      iconPosition="start"
                      label="Flight"
                      value="flight"
                      sx={{
                        width: "fit-content",
                        minHeight: "50px",
                        color: "var(--primary-color)",
                        margin: { xs: "0px 0px", sm: "0px 12px" },
                        fontSize: { xs: "11px", sm: "14px" },
                        opacity: "1",
                        fontWeight: 400,
                      }}
                    />
                    <Tab
                      icon={
                        <GroupsIcon
                          sx={{
                            fontSize: {
                              xs: "15px",
                              sm: "20px",
                              color: "var(--third-color)",
                            },
                          }}
                        />
                      }
                      iconPosition="start"
                      label="Group Fare"
                      value="groupfare"
                      sx={{
                        width: "fit-content",
                        minHeight: "50px",
                        margin: { xs: "0px 0px", sm: "0px 12px" },
                        fontSize: { xs: "11px", sm: "14px" },
                        opacity: "1",
                        color: "var(--primary-color)",
                        fontWeight: 400,
                      }}
                    />

                    <Tab
                      icon={
                        <TravelExploreIcon
                          sx={{
                            fontSize: {
                              xs: "15px",
                              sm: "20px",
                              color: "var(--third-color)",
                            },
                          }}
                        />
                      }
                      iconPosition="start"
                      label="Tour"
                      value="tour"
                      sx={{
                        width: "fit-content",
                        opacity: "1",
                        minHeight: "50px",
                        margin: { xs: "0px 0px", sm: "0px 12px" },
                        fontSize: { xs: "11px", sm: "14px" },
                        color: "var(--primary-color)",
                        fontWeight: 400,
                      }}
                    />

                    <Tab
                      icon={
                        <NightlightRoundIcon
                          sx={{
                            fontSize: {
                              xs: "15px",
                              sm: "20px",
                              color: "var(--third-color)",
                            },
                          }}
                        />
                      }
                      iconPosition="start"
                      label="Umrah"
                      value="umrah"
                      sx={{
                        width: "fit-content",
                        opacity: "1",
                        minHeight: "50px",
                        margin: { xs: "0px 0px", sm: "0px 12px" },
                        fontSize: { xs: "11px", sm: "14px" },
                        color: "var(--primary-color)",
                        fontWeight: 400,
                      }}
                    />

                    <Tab
                      icon={
                        <HotelIcon
                          sx={{
                            fontSize: {
                              xs: "15px",
                              sm: "20px",
                              color: "var(--third-color)",
                            },
                          }}
                        />
                      }
                      iconPosition="start"
                      label="Hotel"
                      value="hotel"
                      sx={{
                        width: "fit-content",
                        opacity: "1",
                        minHeight: "50px",
                        margin: { xs: "0px 0px", sm: "0px 12px" },
                        fontSize: { xs: "11px", sm: "14px" },
                        color: "var(--primary-color)",
                        fontWeight: 400,
                      }}
                    />
                    <Tab
                      icon={
                        <StickyNote2Icon
                          sx={{
                            fontSize: {
                              xs: "15px",
                              sm: "20px",
                              color: "var(--third-color)",
                            },
                          }}
                        />
                      }
                      iconPosition="start"
                      label="Visa"
                      value="visa"
                      sx={{
                        width: "fit-content",
                        opacity: "1",
                        minHeight: "50px",
                        margin: { xs: "0px 0px", sm: "0px 12px" },
                        fontSize: { xs: "11px", sm: "14px" },
                        color: "var(--primary-color)",
                        fontWeight: 400,
                      }}
                    />
                  </TabList>
                </Box>
              </Box>
              <Box
                style={{
                  background: "#fff",
                  width: "100%",
                  borderRadius: "0px 5px 5px 5px",
                }}
              >
                <TabPanel
                  value={"flight"}
                  style={{ padding: "20px 0px 0px 0px" }}
                >
                  <FlightSearchBox
                    type={type}
                    setType={setType}
                    value={value}
                    setValue={setValue}
                    fromSearchText={fromSearchText}
                    setFromSearchText={setFromSearchText}
                    toSearchText={toSearchText}
                    setToSearchText={setToSearchText}
                    departureDate={departureDate}
                    setDepartureDate={setDepartureDate}
                    returningDate={returningDate}
                    setReturningDate={setReturningDate}
                    travelDate={travelDate}
                    setTravelDate={setTravelDate}
                    from={from}
                    setFrom={setFrom}
                    to={to}
                    setTo={setTo}
                    faddress={faddress}
                    setfaddress={setfaddress}
                    toAddress={toAddress}
                    setToAddress={setToAddress}
                    fromSendData={fromSendData}
                    setFromSendData={setFromSendData}
                    toSendData={toSendData}
                    setToSendData={setToSendData}
                    adultCount={adultCount}
                    setAdultCount={setAdultCount}
                    childCount={childCount}
                    setChildCount={setChildCount}
                    infant={infant}
                    setInfant={setInfant}
                    result={result}
                    setResult={setResult}
                    className={className}
                    setClassName={setClassName}
                    setChangeState={setChangeState}
                    changeState={changeState}
                    changeFrom={changeFrom}
                    setChangeFrom={setChangeFrom}
                  />
                </TabPanel>
                <TabPanel
                  value={"groupfare"}
                  style={{ padding: "20px 20px 0px 20px" }}
                >
                  <GroupFareSearchBox
                    type={type}
                    setType={setType}
                    value={value}
                    setValue={setValue}
                    fromSearchText={fromSearchText}
                    setFromSearchText={setFromSearchText}
                    toSearchText={toSearchText}
                    setToSearchText={setToSearchText}
                    departureDate={departureDate}
                    setDepartureDate={setDepartureDate}
                    returningDate={returningDate}
                    setReturningDate={setReturningDate}
                    travelDate={travelDate}
                    setTravelDate={setTravelDate}
                    from={from}
                    setFrom={setFrom}
                    to={to}
                    setTo={setTo}
                    faddress={faddress}
                    setfaddress={setfaddress}
                    toAddress={toAddress}
                    setToAddress={setToAddress}
                    fromSendData={fromSendData}
                    setFromSendData={setFromSendData}
                    toSendData={toSendData}
                    setToSendData={setToSendData}
                    adultCount={adultCount}
                    setAdultCount={setAdultCount}
                    childCount={childCount}
                    setChildCount={setChildCount}
                    infant={infant}
                    setInfant={setInfant}
                    result={result}
                    setResult={setResult}
                    className={className}
                    setClassName={setClassName}
                    setChangeState={setChangeState}
                    changeState={changeState}
                    changeFrom={changeFrom}
                    setChangeFrom={setChangeFrom}
                  />
                </TabPanel>
                <TabPanel
                  value={"tour"}
                  style={{ padding: "20px 20px 0px 20px" }}
                >
                  <TourSearchBox
                    type={type}
                    setType={setType}
                    value={value}
                    setValue={setValue}
                    fromSearchText={fromSearchText}
                    setFromSearchText={setFromSearchText}
                    toSearchText={toSearchText}
                    setToSearchText={setToSearchText}
                    departureDate={departureDate}
                    setDepartureDate={setDepartureDate}
                    returningDate={returningDate}
                    setReturningDate={setReturningDate}
                    travelDate={travelDate}
                    setTravelDate={setTravelDate}
                    from={from}
                    setFrom={setFrom}
                    to={to}
                    setTo={setTo}
                    faddress={faddress}
                    setfaddress={setfaddress}
                    toAddress={toAddress}
                    setToAddress={setToAddress}
                    fromSendData={fromSendData}
                    setFromSendData={setFromSendData}
                    toSendData={toSendData}
                    setToSendData={setToSendData}
                    adultCount={adultCount}
                    setAdultCount={setAdultCount}
                    childCount={childCount}
                    setChildCount={setChildCount}
                    infant={infant}
                    setInfant={setInfant}
                    result={result}
                    setResult={setResult}
                    className={className}
                    setClassName={setClassName}
                    setChangeState={setChangeState}
                    changeState={changeState}
                    changeFrom={changeFrom}
                    setChangeFrom={setChangeFrom}
                  />
                </TabPanel>

                <TabPanel
                  value={"umrah"}
                  style={{ padding: "20px 20px 0px 20px" }}
                >
                  <UmrahSearchBox
                    type={type}
                    setType={setType}
                    value={value}
                    setValue={setValue}
                    fromSearchText={fromSearchText}
                    setFromSearchText={setFromSearchText}
                    toSearchText={toSearchText}
                    setToSearchText={setToSearchText}
                    departureDate={departureDate}
                    setDepartureDate={setDepartureDate}
                    returningDate={returningDate}
                    setReturningDate={setReturningDate}
                    travelDate={travelDate}
                    setTravelDate={setTravelDate}
                    from={from}
                    setFrom={setFrom}
                    to={to}
                    setTo={setTo}
                    faddress={faddress}
                    setfaddress={setfaddress}
                    toAddress={toAddress}
                    setToAddress={setToAddress}
                    fromSendData={fromSendData}
                    setFromSendData={setFromSendData}
                    toSendData={toSendData}
                    setToSendData={setToSendData}
                    adultCount={adultCount}
                    setAdultCount={setAdultCount}
                    childCount={childCount}
                    setChildCount={setChildCount}
                    infant={infant}
                    setInfant={setInfant}
                    result={result}
                    setResult={setResult}
                    className={className}
                    setClassName={setClassName}
                    setChangeState={setChangeState}
                    changeState={changeState}
                    changeFrom={changeFrom}
                    setChangeFrom={setChangeFrom}
                  />
                </TabPanel>

                <TabPanel
                  value={"hotel"}
                  style={{ padding: "20px 20px 0px 20px" }}
                >
                  <HotelSearchBox
                    type={type}
                    setType={setType}
                    value={value}
                    setValue={setValue}
                    fromSearchText={fromSearchText}
                    setFromSearchText={setFromSearchText}
                    toSearchText={toSearchText}
                    setToSearchText={setToSearchText}
                    departureDate={departureDate}
                    setDepartureDate={setDepartureDate}
                    returningDate={returningDate}
                    setReturningDate={setReturningDate}
                    travelDate={travelDate}
                    setTravelDate={setTravelDate}
                    from={from}
                    setFrom={setFrom}
                    to={to}
                    setTo={setTo}
                    faddress={faddress}
                    setfaddress={setfaddress}
                    toAddress={toAddress}
                    setToAddress={setToAddress}
                    fromSendData={fromSendData}
                    setFromSendData={setFromSendData}
                    toSendData={toSendData}
                    setToSendData={setToSendData}
                    adultCount={adultCount}
                    setAdultCount={setAdultCount}
                    childCount={childCount}
                    setChildCount={setChildCount}
                    infant={infant}
                    setInfant={setInfant}
                    result={result}
                    setResult={setResult}
                    className={className}
                    setClassName={setClassName}
                    setChangeState={setChangeState}
                    changeState={changeState}
                    changeFrom={changeFrom}
                    setChangeFrom={setChangeFrom}
                  />
                </TabPanel>
                <TabPanel
                  value={"visa"}
                  style={{ padding: "20px 20px 0px 20px" }}
                >
                  <VisaSearch
                    type={type}
                    setType={setType}
                    value={value}
                    setValue={setValue}
                    fromSearchText={fromSearchText}
                    setFromSearchText={setFromSearchText}
                    toSearchText={toSearchText}
                    setToSearchText={setToSearchText}
                    departureDate={departureDate}
                    setDepartureDate={setDepartureDate}
                    returningDate={returningDate}
                    setReturningDate={setReturningDate}
                    travelDate={travelDate}
                    setTravelDate={setTravelDate}
                    from={from}
                    setFrom={setFrom}
                    to={to}
                    setTo={setTo}
                    faddress={faddress}
                    setfaddress={setfaddress}
                    toAddress={toAddress}
                    setToAddress={setToAddress}
                    fromSendData={fromSendData}
                    setFromSendData={setFromSendData}
                    toSendData={toSendData}
                    setToSendData={setToSendData}
                    adultCount={adultCount}
                    setAdultCount={setAdultCount}
                    childCount={childCount}
                    setChildCount={setChildCount}
                    infant={infant}
                    setInfant={setInfant}
                    result={result}
                    setResult={setResult}
                    className={className}
                    setClassName={setClassName}
                    setChangeState={setChangeState}
                    changeState={changeState}
                    changeFrom={changeFrom}
                    setChangeFrom={setChangeFrom}
                  />
                </TabPanel>
              </Box>
            </TabContext>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeSearchBox;
