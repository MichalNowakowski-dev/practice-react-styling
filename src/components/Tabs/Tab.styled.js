import styled from "styled-components";

const StyledTab = styled.div`
  display: ${(props) => (props.active === props.eventKey ? "block" : "none")};
`;

export default StyledTab;
