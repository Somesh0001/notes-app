import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Tooltip } from "@mui/material";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

const options = [
  "Later Today  ",
  "Tomorrow ",
  "Next Week",
  "Select date and time",
  "Show tick boxes ",
  "Select Place",
];
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
      <Tooltip title="Reminder" arrow>
        <IconButton
          style={{ color: "orange" }}
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          {icon}
        </IconButton>
      </Tooltip>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleClose}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
