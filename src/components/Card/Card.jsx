import React from "react";
import "./Card.css";

function Card({ children }) {
  return (
    <div className="card__container" onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  );
}

export default Card;
