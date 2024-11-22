import React from "react";

export const Hero = (props) => {
  let badgeInfo;
  if (props.Plants.openSpots === 0) {
    badgeInfo = "GET FREE";
  } else {
    badgeInfo = "GO PRO";
  }
  return (
    <>
      <div className="hero-sect">
        <div className="page-file">
          {badgeInfo && <div className="hero-badge">{badgeInfo}</div>}
          <img src={`${props.Plants.image}`} />
          <h3>{props.Plants.name}</h3>
          <p>{props.Plants.location}</p>
          <p>Quantity : {props.Plants.Quantity}</p>
        </div>
      </div>
    </>
  );
};
