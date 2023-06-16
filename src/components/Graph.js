import React from "react";
import Card from "./Card";
import "./Graph.scss";
import { LineBarGraph } from "./LineBarGraph";
import { LineGraph } from "./LineGraph";

const Graph = () => {
  const data = {
    card1: {
      title: "Ads Spend and Revenue",
      data: [
        {
          title: "Ads Spend",
          value: "$1000",
          icon: "FaArrowUp",
          color: "green",
        },
        {
          title: "Revenue",
          value: "$1000",
          icon: "FaArrowDown",
          color: "red",
        },
        {
          title: "CPC",
          value: "$0.5",
          icon: "FaArrowDown",
          color: "red",
        },
        {
          title: "ACSO",
          value: "50%",
          icon: "FaArrowUp",
          color: "green",
        },
      ],
    },
    card2: {
      title: "Click Through Rate and Clicks",
      data: [
        {
          title: "CTR",
          value: "50%",
          icon: "FaArrowUp",
          color: "green",
        },
        {
          title: "Clicks",
          value: "1000",
          icon: "FaArrowDown",
          color: "red",
        },
        {
          title: "CPC",
          value: "$0.5",
          icon: "FaArrowDown",
          color: "red",
        },
      ],
    },

    card3: {
      title: "Conversation Rate and Order",
      data: [
        {
          title: "CVR",
          value: "50%",
          icon: "FaArrowUp",
          color: "green",
        },
        {
          title: "Orders",
          value: "1000",
          icon: "FaArrowDown",
          color: "red",
        },
      ],
    },
  };

  return (
    <div
      className="container"
      style={{ overflowX: "auto", marginLeft: "180px" }}
    >
      <div className="graphs">
        <Card className="card-grow" data={data.card1}>
          <LineBarGraph />
        </Card>
        <Card className="card-grow" data={data.card2}>
          <LineGraph />
        </Card>
        <Card className="card-grow" data={data.card3}>
          <LineGraph />
        </Card>
      </div>
    </div>
  );
};

export default Graph;
