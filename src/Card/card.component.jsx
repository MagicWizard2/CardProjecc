import React from "react";
import "./card.styles.css";
export const Card = (props) => (
  <div className="card-container">
    <img
      alt="A card"
      src={props.cards.imageUrl}
    />
    <h2>{props.card.name}</h2>
    <p>{props.card.type}</p>
    <p>{props.card.text}</p>
  </div>
);
