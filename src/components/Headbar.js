import React from "react";
import { Navbar, Nav, Row, Col, Container } from "react-bootstrap";
import { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "./index.css";
class Headbar extends React.Component {
  render() {
    return (
      <Navbar className="topnav ">
        <Container className="d-flex justify-content-center ">
          <Row style={{ width: "30%" }} className="align-items-center">
            <Col lg="2">
              <img
                // src={require("../assets/logo/logo.png")}
                style={{ borderRadius: "10px" }}
                width="50px"
                height="50px"
                alt="logo"
              />
            </Col>
            <Col lg="10" className="d-flex flex-column ">
              <text className="align-self-center">
                {/* Berkat Kawan Sakti Bersama */}
                nama perusahaan
              </text>
              <h4 className="align-self-center">SIA</h4>
            </Col>
          </Row>
        </Container>
        <Navbar.Brand href=""></Navbar.Brand>
      </Navbar>
    );
  }
}

export default Headbar;

//
