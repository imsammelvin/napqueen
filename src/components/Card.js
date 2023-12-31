import React from "react";
import "./Card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { faCompress } from "@fortawesome/free-solid-svg-icons";

const Card = ({ children, data }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{data.title}</h2>
        <div>
          <select style={{ marginRight: "5px" }}>
            <option>Last 7 days</option>
            {/* Add more dropdown options as needed */}
          </select>
          <FontAwesomeIcon
            icon={faCompress}
            size="xs"
            style={{ color: "#696969" }}
          />
        </div>
      </div>
      <hr></hr>
      <div className="card-content">
        {data.data.map((item, index) => {
          return (
            <div className="data-section" key={index}>
              <p>{item.title}</p>
              <h3>
                {item.value}
                {item.icon === "FaArrowUp" ? (
                  <FontAwesomeIcon
                    icon={faSquareArrowUpRight}
                    style={{ color: "#00c165" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faSquareArrowUpRight}
                    style={{ color: "#ff0000" }}
                  />
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
