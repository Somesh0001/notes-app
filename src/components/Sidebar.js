import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NoteIcon from "@mui/icons-material/Note";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LabelIcon from "@mui/icons-material/Label";
import EditIcon from "@mui/icons-material/Edit";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteIcon from "@mui/icons-material/Delete";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../assets/logo.png";
import { Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ProfileButton from "./ProfileButton";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div
        style={{
          position: "relative",
          right: "0",
          top: "0",
          display: "flex",
          justifyContent: "right",
          padding: "1em",
          cursor: "pointer",
        }}
      >
        <CloseIcon />
      </div>
      <div style={{ marginTop: "auto" }}>
        <List>
          {["Notes", "Reminder", "Labels", "Edit Labels", "Archive", "Bin"].map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  style={{
                    display: "flex",
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  {index === 0 ? (
                    <Link
                      to="/home"
                      style={{
                        display: "flex",
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      <ListItemIcon>
                        <NoteIcon />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </Link>
                  ) : index === 1 ? (
                    <Link
                      to="/reminders"
                      style={{
                        display: "flex",
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      <ListItemIcon>
                        <NotificationsIcon />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </Link>
                  ) : index === 2 ? (
                    <Link
                      to="/labels"
                      style={{
                        display: "flex",
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      <ListItemIcon>
                        <LabelIcon />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </Link>
                  ) : index === 3 ? (
                    <Link
                      to="/editlabel"
                      style={{
                        display: "flex",
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      <ListItemIcon>
                        <EditIcon />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </Link>
                  ) : index === 4 ? (
                    <Link
                      to="/archived"
                      style={{
                        display: "flex",
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      <ListItemIcon>
                        <ArchiveIcon />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </Link>
                  ) : (
                    <Link
                      to="/bin"
                      style={{
                        display: "flex",
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      <ListItemIcon>
                        <DeleteIcon />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </Link>
                  )}
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </div>
    </Box>
  );

  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{ boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px" }}
    >
      <Grid
        container
        spacing={2}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          xs={1}
          md={1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "1%",
          }}
        >
          {["left"].map((anchor) => (
            <div>
              <Button
                onClick={toggleDrawer(anchor, true)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "auto",
                  margin: "auto",
                  height: "fit-content",
                  width: "fit-content",
                  cursor: "pointer",
                  outline: "none",
                  transition: "all 0.3s ease-in-out",
                  ":hover": { backgroundColor: "#ccc" },
                }}
              >
                <MenuIcon />
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </div>
          ))}
        </Grid>
        <Grid item xs={9} md={9} style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Tooltip title="MyNotes">
                <Link to="/">
                  <img src={Logo} height={"40px"} width={"40px"} alt="" />
                </Link>
              </Tooltip>
            </div>
            <div style={{ width: "100%" }}>
              {" "}
              <input
                type="text"
                style={{
                  width: "80%",
                  height: "fit-content",
                  borderRadius: "10px",
                  margin: "10px 10px",
                  border: "1px solid #ccc",
                  outline: "none",
                  minHeight: "2em",
                  padding: "5px",
                  boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px",
                }}
                placeholder="Search..."
              />
            </div>
            <div
              style={{
                width: "10%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  color: "white",
                  backgroundColor: isHovered ? "#00AEF8" : "#F80000",
                  borderRadius: "22%",
                  outline: "none",
                  border: "1px solid #89CFF3",
                  cursor: "pointer",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <SearchIcon />
              </button>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={2}
          md={2}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ProfileButton />
        </Grid>
      </Grid>
    </Box>
  );
}
