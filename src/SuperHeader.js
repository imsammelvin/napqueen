import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const SuperHeader = () => {
  const style = {
    backgroundColor: "white",
    color: "gray",
    border: "1px solid #ccc",
    borderRight: "none",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "8px 16px",
  };

  const iconStyle = {
    fontSize: "32px",
  };

  return (
    <header style={style}>
      <AccountCircleIcon style={iconStyle} />
    </header>
  );
};

export default SuperHeader;
