import React from "react";
import StyledBreadcrumb from "./Breadcrumb.styled";
import BreadcrumbItem from "./BreadcrumbItem";

const Breadcrumb = () => {
  return <StyledBreadcrumb></StyledBreadcrumb>;
};

export default Object.assign(Breadcrumb, {
  Item: BreadcrumbItem,
});
