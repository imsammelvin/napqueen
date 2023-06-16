import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import DateRangePickerComponent from "./DateRangePickerComponent";

const Header = () => {
  return (
    <div
      className="header"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "20px",
        paddingTop: "0",
        marginLeft: "160px",
        alignItems: "end",
      }}
    >
      <div className="header-left">
        <div style={{ marginRight: "250px", paddingRight: "60px" }}>
          <h1>Advertising</h1>
        </div>
        <div
          className="header-controls"
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "10px",
          }}
        >
          <div className="dropdown" style={{ marginRight: "20px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label
                htmlFor="marketplace-select"
                style={{ marginRight: "110px" }}
              >
                Marketplace
              </label>
              <select
                id="marketplace-select"
                style={{
                  marginTop: "5px",
                  width: "200px",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                <option value="Amazon 977462" style={{ fontWeight: "bold" }}>
                  Amazon 977462
                </option>
              </select>
            </div>
          </div>
          <div className="dropdown">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="ad-type-select" style={{ marginRight: "180px" }}>
                Ad type
              </label>
              <select
                id="ad-type-select"
                style={{
                  marginTop: "5px",
                  width: "200px",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                <option value="All">All</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="header-right">
        <DateRangePickerComponent />
      </div>
    </div>
  );
};

export default Header;
