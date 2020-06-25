import React from "react";
import "./card-list.styling.css";
import { Card } from '../Card/card.component'

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.cards.cards.map((card) => (
        <Card key={props.cards.cards.id} card={card} />
      ))}
    </div>
  );
};