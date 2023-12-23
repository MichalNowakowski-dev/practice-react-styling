import React from "react";
import StyledTab from "./Tab.styled";

const Tab = (props) => {
  console.log(props.active, props.eventKey);

  return (
    <StyledTab eventKey={props.eventKey} active={props.active}>
      {props.children}
    </StyledTab>
  );
};

export default Tab;
