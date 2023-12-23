import React from "react";
import StyledTabsLink from "./TabsLink.styled";

const TabsLink = (props) => {
  return (
    <StyledTabsLink
      handleClick={props.handleClick}
      active={props.active}
      disabled={props.disabled}
    >
      {props.children}
    </StyledTabsLink>
  );
};

export default TabsLink;
