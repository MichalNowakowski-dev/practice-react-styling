import React, { useState } from "react";
import StyledTabs from "./Tabs.styled";
import TabsLink from "./TabsLink";
import TabContent from "./TabContent";
import Tab from "./Tab";

const Tabs = (props) => {
  const [active, setActive] = useState(props.defaultActiveKey);

  const handleClick = (eventKey) => {
    setActive(eventKey);
  };

  return (
    <>
      <StyledTabs>
        {React.Children.map(props.children, (tab) => {
          const { eventKey, disabled, title } = tab.props;
          return (
            <TabsLink
              handleClick={() => handleClick(eventKey)}
              key={eventKey}
              eventKey={eventKey}
              active={active === eventKey}
              disabled={disabled}
            >
              {title}
            </TabsLink>
          );
        })}
      </StyledTabs>
      <TabContent active={active}>
        {" "}
        {React.Children.map(props.children, (tab) => {
          const { eventKey, children } = tab.props;
          return (
            <Tab key={eventKey} eventKey={eventKey} active={active}>
              {children}
            </Tab>
          );
        })}
      </TabContent>
    </>
  );
};

export default Tabs;
