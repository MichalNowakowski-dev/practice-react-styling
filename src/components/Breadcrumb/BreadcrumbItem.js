import React from "react";
import {
  StyledBreadcrumbItem,
  StyledBreadcrumbLink,
} from "./BreadcrumbItem.styled";

const BreadcrumbItem = (props) => {
  return (
    <StyledBreadcrumbItem>
      <StyledBreadcrumbLink
        href={props.href ? props.href : ""}
        active={props.active}
      >
        {props.children}
      </StyledBreadcrumbLink>
    </StyledBreadcrumbItem>
  );
};

export default BreadcrumbItem;
