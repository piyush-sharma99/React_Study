import "./Card.css";
import React from "react";

const Card = (props) => {
  const classes = "card " + props.className; // Imports any classNames used on the Card component on other classes to add css and other functions
  return <div className={classes}>{props.children}</div>; //props.children is a reserved name for content within the opening and closing tag of the custom component
};

export default Card;
