import React from "react";

function Card({ index, data }) {
  console.log("v", data)
  const color = ["green", "brown", "blue", "orange", "red", "greenyellow"]
  return (
    <div className="card" style={{ backgroundColor: color[index] }}>
      <div className="section1">
        <div className="inner-section1" >
          <img
            src={data.logo}
            alt=""
            className="logo"
          />
        </div>
        <div className="inner-section2">
          <p className="para">{data.title}</p>
          <p className="desc">{data.desc}</p>
        </div>
      </div>
      <div className="image-container">
        <img
          src={data.image}
          alt=""
          className="image"
        />
      </div>
    </div>
  );
}

export default Card;
