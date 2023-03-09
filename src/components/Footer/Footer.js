
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import * as constants from "assets/constant";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
        <Col md="12">
            <h1 className="title">Sky TechOPS</h1>
          </Col>
        </Row>
        <Row>
          <Col md="3">
          <h3 className="title footerSubHead">Company</h3>
            <Nav>
              <NavItem>
              </NavItem>
              <NavItem>
                <NavLink to="/AboutUs" tag={Link}>
                  About Us
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink to="/contact-page" tag={Link}>
                  Career
                </NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink to="/Management" tag={Link}>
                 Management
                </NavLink>
              </NavItem>
          <NavItem>
                <NavLink to="/Events" tag={Link}>
                 Enents
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/License" tag={Link}>
                 License
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
          <h3 className="title footerSubHead">Product</h3>
            <Nav>
              <NavItem>
                <NavLink to="/PlayerAccount" tag={Link}>
                  Platform Account Manager
                </NavLink>
              </NavItem>
              <NavItem>
              </NavItem>
              <NavItem>
                <NavLink to="/Exchange" tag={Link}>
                 Exchange
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Casino" tag={Link}>
                  Casino
                </NavLink>
              </NavItem><NavItem>
                <NavLink to="/SportsBook" tag={Link}>
                 Spots Book
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
          <h3 className="title footerSubHead">Solutions</h3>
            <Nav>
              <NavItem>
                <NavLink to="/Mobile" tag={Link}>
                  Mobile
                </NavLink>
              </NavItem>
              <NavItem>
              </NavItem>
              <NavItem>
                <NavLink to="/Desktop" tag={Link}>
                  Desktop
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Turnkey" tag={Link}>
                  Turnkey
                </NavLink>
              </NavItem><NavItem>
                <NavLink to="/B2BSupport" tag={Link}>
                 B2B Support
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
       
          <Col md="3">
            <h3 className="title">Follow us:</h3>
            <div className="btn-wrapper profile">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href={constants.twitterLink}
                id="tooltip622135962"
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip622135962">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href={constants.facebookLink}
                id="tooltip230450801"
                target="_blank"
              >
                <i className="fab fa-facebook-square" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip230450801">
                Like us
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href={constants.instagramLink}
                id="tooltip318450378"
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip318450378">
                Follow us
              </UncontrolledTooltip>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
