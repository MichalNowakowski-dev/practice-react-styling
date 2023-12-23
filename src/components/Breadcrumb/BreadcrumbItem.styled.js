import styled from "styled-components";

const StyledBreadcrumbItem = styled.li`
  & + & {
    padding-left: 0.5rem;
  }
  & + &::before {
    display: inline-block;
    padding-right: 0.5rem;
    color: #6c757d;
    content: "/";
  }
`;
const StyledBreadcrumbLink = styled.a.attrs((props) => ({
  href: props.href,
}))`
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
  color: ${(props) => props.active && "#6c757d"};
`;

export { StyledBreadcrumbItem, StyledBreadcrumbLink };
