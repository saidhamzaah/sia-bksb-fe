import React from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import {
  BarChartLine,
  HouseFill,
  FolderFill,
  WindowDesktop,
  Cart,
  CartFill,
  WalletFill,
} from "react-bootstrap-icons";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import { Colors } from "chart.js";

class SideNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }

  render() {
    return (
      <SideNav
        style={{
          backgroundColor: "#113E97",
          Colors: "#113E97",
          position: "fixed",
        }}
        onSelect={(selected) => {
          // Add your code here
        }}
        className="nav-sticky"
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
              <HouseFill />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="account">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-account"
                style={{ fontSize: "1.75em" }}
              />
              <FolderFill />
            </NavIcon>
            <NavText>Account</NavText>
            <NavItem eventKey="account/accountlist">
              <NavText>Account List</NavText>
            </NavItem>
            <NavItem eventKey="account/recordjournalentry">
              <NavText>Record Journal Entry</NavText>
            </NavItem>
            <NavItem eventKey="account/transactionjournal">
              <NavText>Transaction Journal</NavText>
            </NavItem>
          </NavItem>
          <NavItem eventKey="banking">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-banking"
                style={{ fontSize: "1.75em" }}
              />
              <WalletFill />
            </NavIcon>
            <NavText>Banking</NavText>
            <NavItem eventKey="account/accountbank">
              <NavText>Account List</NavText>
            </NavItem>
            <NavItem eventKey="account/recordbank">
              <NavText>Record Journal Entry</NavText>
            </NavItem>
            <NavItem eventKey="account/transactionbank">
              <NavText>Transaction Journal</NavText>
            </NavItem>
          </NavItem>
          <NavItem eventKey="purchase">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-purchase"
                style={{ fontSize: "1.75em" }}
              />
              <CartFill />
            </NavIcon>
            <NavText>Purchase</NavText>
            <NavItem eventKey="account/purchase1">
              <NavText>Account List</NavText>
            </NavItem>
            <NavItem eventKey="account/purchase2">
              <NavText>Record Journal Entry</NavText>
            </NavItem>
            <NavItem eventKey="account/purchase3">
              <NavText>Transaction Journal</NavText>
            </NavItem>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    );
  }
}

export default SideNavBar;
