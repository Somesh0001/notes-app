import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Stack from "@mui/material/Stack";
export default function LongMenu({ icon }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        {icon}
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Stack direction="row" spacing={2} style={{padding:"5px"}}>
        
          <IconButton
            style={{
              backgroundColor: "#FFAFCC",
              width: "30px",
              height: "30px",
            }}
          ></IconButton>
         
          <IconButton
            style={{
              backgroundColor: "#FF8997",
              width: "30px",
              height: "30px",
            }}
          ></IconButton>
          <IconButton
            style={{
              backgroundColor: "#00FE81",
              width: "30px",
              height: "30px",
            }}
          ></IconButton>
          <IconButton
            style={{
              backgroundColor: "#A2D2FF",
              width: "30px",
              height: "30px",
            }}
          ></IconButton>
          <IconButton
            style={{
              backgroundColor: "#8380FD",
              width: "30px",
              height: "30px",
            }}
          ></IconButton>
        </Stack>
      </Menu>
    </div>
  );
}
