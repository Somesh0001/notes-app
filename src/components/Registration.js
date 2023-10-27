import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function Registration() {
  const labelStyle = { display: "flex", justifyContent: "space-between" };
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: 500 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Login" {...a11yProps(0)} />
          <Tab label="SignUp" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div>
            <div style={labelStyle}>
              <label htmlFor="username">Username :</label>{" "}
              <input type="text" name="" id="username" />
            </div>
            <div style={labelStyle}>
              <label htmlFor="password">Password: </label>
              <input type="password" name="" id="password" />
            </div>
          </div>
          <div>
            <button
              style={{
                padding: "5px 10px",
                backgroundColor: "green",
                color: "white",
                borderRadius: "10px",
                margin: "10px ",
                border: "none",
                boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
              }}
            >
              {" "}
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/home"
              >
                Submit
              </Link>{" "}
            </button>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div>
            <div style={labelStyle}>
              <label htmlFor="name">Name :</label>
              <input type="text" name="" id="name" />
            </div>
            <div style={labelStyle}>
              <label htmlFor="mail">Email: </label>
              <input type="email" name="" id="mail" />
            </div>
            <div style={labelStyle}>
              <label htmlFor="username">Username :</label>{" "}
              <input type="text" name="" id="username" />
            </div>
            <div style={labelStyle}>
              <label htmlFor="password">Password: </label>
              <input type="password" name="" id="password" />
            </div>
            <div style={labelStyle}>
              <label htmlFor="password">Confirm Password: </label>
              <input type="password" name="" id="password" />
            </div>
          </div>
          <div>
            <button
              style={{
                padding: "5px 10px",
                backgroundColor: "green",
                color: "white",
                borderRadius: "10px",
                margin: "10px ",
                border: "none",
                boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
              }}
            >
              {" "}
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/home"
              >
                Submit
              </Link>{" "}
            </button>
          </div>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
