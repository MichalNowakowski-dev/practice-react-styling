import styled, { css } from "styled-components";

const DefaultTabsLink = styled.a.attrs((props) => ({
  href: "#",
  onClick: props.handleClick,
}))`
  display: block;
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  margin-bottom: -1px;
  &:hover {
    text-decoration: none;
    border-color: #e9ecef #e9ecef #dee2e6;
  }
`;

const ActiveTabsLink = styled(DefaultTabsLink)(
  (props) =>
    props.active &&
    css`
      color: #495057;
      background-color: #fff;
      border-color: #dee2e6 #dee2e6 #fff;
      &:hover {
        border-bottom: none;
        color: #495057;
      }
    `
);
const DisabledTabsLink = styled(ActiveTabsLink)(
  (props) =>
    props.disabled &&
    css`
      color: #6c757d;
      background-color: transparent;
      border-color: transparent;
      pointer-events: none;
      cursor: default;
    `
);

const StyledTabsLink = DisabledTabsLink;

export default StyledTabsLink;
