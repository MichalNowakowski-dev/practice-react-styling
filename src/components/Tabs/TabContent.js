import React from "react";
import StyledTabContent from "./TabContent.styled";

const TabContent = (props) => {
  return <StyledTabContent>{props.children}</StyledTabContent>;
};

export default TabContent;
