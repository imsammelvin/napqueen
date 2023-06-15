import React from "react";
import MUIDataTable from "mui-datatables";
import "./CampaignTable.css";
import { Icon, IconButton, Switch } from "@mui/material";
import {
  CheckCircle,
  Cancel,
  MoreVert,
  Download as DownloadIcon,
} from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import FilterListIcon from "@mui/icons-material/FilterList";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";

const CampaignTable = () => {
  const columns = [
    {
      label: "Status",
      name: "status",
      options: {
        customBodyRender: (value) => {
          return value === "Active" ? (
            <Icon component={CheckCircle} style={{ color: "green" }} />
          ) : (
            <Icon component={Cancel} style={{ color: "red" }} />
          );
        },
      },
    },
    {
      label: "Campaign Name",
      name: "campaignName",
      options: {
        customBodyRender: (value) => (
          <span>
            {value} <FontAwesomeIcon icon={faPenToSquare} />
          </span>
        ),
      },
    },
    { label: "Info", name: "info" },
    {
      label: "Automation",
      name: "automation",
      options: {
        customBodyRender: (value) => {
          return (
            <Switch
              checked={value === "Enabled"}
              color="primary"
              inputProps={{ "aria-label": "Automation Switch" }}
            />
          );
        },
      },
    },
    {
      label: "Dayparting",
      name: "dayparting",
      options: {
        customBodyRender: (value) => {
          return (
            <Switch
              checked={value === "Enabled"}
              color="primary"
              inputProps={{ "aria-label": "Automation Switch" }}
            />
          );
        },
      },
    },
    { label: "Budget", name: "budget" },
    {
      label: "Bidding Strategy",
      name: "biddingStrategy",
      options: {
        customBodyRender: (value) => (
          <span style={{ color: "#0085FF", textDecoration: "underline" }}>
            {value}
          </span>
        ),
      },
    },
    { label: "Spend", name: "spend" },
    { label: "Revenue", name: "revenue" },
    { label: "Current Bid", name: "currentBid" },
    { label: "Orders", name: "orders" },
    { label: "Impression", name: "impression" },
    { label: "CTR", name: "ctr" },
    { label: "Conv Rate", name: "convRate" },
    {
      label: "",
      name: "report",
      options: {
        customBodyRender: (value) => (
          <span style={{ color: "#125DFF" }}>{value}</span>
        ),
      },
    },
    {
      label: "",
      name: "actions",
      options: {
        customBodyRender: () => (
          <IconButton
            aria-label="actions"
            aria-controls="actions-menu"
            aria-haspopup="true"
          >
            <MoreVert />
          </IconButton>
        ),
      },
    },
  ];

  const options = {
    filterType: "checkbox",
    customHeadStyles: {
      fontSize: "14px", // Adjust the font size as desired
    },
    customBodyStyles: {
      fontSize: "12px",
      textAlign: "center",
    },
    search: false,
    filter: false,
    download: false,
    print: false,
    viewColumns: false,
  };

  const data = [
    {
      status: "Active",
      campaignName: "Maxima Twin",
      info: "Some info",
      automation: "Enabled",
      dayparting: "Yes",
      budget: "$1000",
      biddingStrategy: "Up && Down",
      spend: "$500",
      revenue: "$800",
      currentBid: "$1.5",
      orders: 50,
      impression: 1000,
      ctr: "5%",
      convRate: "10%",
      report: "Report",
    },
    {
      status: "Inactive",
      campaignName: "Campaign 2",
      info: "Additional info",
      automation: "Disabled",
      dayparting: "No",
      budget: "$1500",
      biddingStrategy: "Up",
      spend: "$800",
      revenue: "$1200",
      currentBid: "$2.0",
      orders: 70,
      impression: 1500,
      ctr: "4.5%",
      convRate: "8%",
      report: "Report",
    },
    {
      status: "Active",
      campaignName: "Sam Melvin",
      info: "Some info",
      automation: "Enabled",
      dayparting: "Yes",
      budget: "$1000",
      biddingStrategy: "Down",
      spend: "$500",
      revenue: "$800",
      currentBid: "$1.5",
      orders: 50,
      impression: 1000,
      ctr: "5%",
      convRate: "10%",
      report: "Report",
    },
  ];

  return (
    <div style={{ maxWidth: "100%" }}>
      <div
        className="table-button"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div style={{ marginLeft: "220px", marginTop: "20px" }}>
          <h3>All Campaign</h3>
        </div>
        <div
          style={{
            height: "40px",
            marginTop: "30px",
          }}
        >
          <IconButton
            aria-label="filter"
            style={{
              backgroundColor: "#ffffff",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "gray",
              borderRadius: "0px",
              fontSize: "14px",
              color: "black",
              padding: "5px 10px",
            }}
          >
            <FilterListIcon />
            Filter
          </IconButton>
          <IconButton
            aria-label="column"
            style={{
              backgroundColor: "#ffffff",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "gray",
              borderRadius: "0px",
              fontSize: "14px",
              color: "black",
              padding: "5px 10px",
              marginLeft: "10px",
            }}
          >
            <ViewColumnIcon />
            Columns
          </IconButton>
          <IconButton aria-label="download">
            <DownloadIcon />
          </IconButton>
        </div>
      </div>
      <div
        className="table-container"
        style={{ overflowX: "hidden", marginLeft: "200px" }}
      >
        <MUIDataTable
          columns={columns}
          data={data}
          options={options}
          className="custom-table"
        />
      </div>
    </div>
  );
};

export default CampaignTable;
