import React from "react";
import SideNav from "react-simple-sidenav";
import SideNavItems from "./Sidenav_items";

const Sidenav = props => {
  return (
    <SideNav
      showNav={props.showNav}
      onHideNav={props.onHideNav}
      navStyle={{
        background: "#242424",
        maxWidth: "220px"
      }}
    >
      <SideNavItems />
    </SideNav>
  );
};

export default Sidenav;
