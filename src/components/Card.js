import React from "react";
import "./Card.css";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Card = ({ children, data }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{data.title}</h2>
        <select>
          <option>Last 7 days</option>
          {/* Add more dropdown options as needed */}
        </select>
      </div>
      <hr></hr>
      <div className="card-content">
        {data.data.map((item, index) => {
          return (
            <div className="data-section" key={index}>
              <p>{item.title}</p>
              <h3>
                {item.value}{" "}
                {item.icon === "FaArrowUp" ? (
                  <FaArrowUp style={{ color: "green" }} />
                ) : (
                  <FaArrowDown style={{ color: "red" }} />
                )}
              </h3>
            </div>
          );
        })}
      </div>
      <hr></hr>
      <div className="card-chart">{children}</div>
    </div>
  );
};

export default Card;
