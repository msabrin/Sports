import React from "react";

function HolderCard(props) {
  return (
    <div className="dt-card" id="holders">
      <img src={props.img} alt={props.name} className="dt-card-img" />
      <p className="dt-card-name">{props.name}</p>
      <p className="dt-card-title">{props.title}</p>
    </div>
  );
}

export default HolderCard;
