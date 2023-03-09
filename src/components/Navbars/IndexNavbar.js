
import React, {useState} from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";
import * as constants from "assets/constant";

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  const scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  //for opeing dropdown on hover 
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

const showDropdown = (e)=>{
    setShow(!show);
}
const hideDropdown = e => {
    setShow(false);
}
const showDropdown1 = (e)=>{
  setShow1(!show);
}
const hideDropdown1 = e => {
  setShow1(false);
}
const showDropdown2 = (e)=>{
  setShow2(!show);
}
const hideDropdown2 = e => {
  setShow2(false);
}
const showDropdown3 = (e)=>{
  setShow3(!show);
}
const hideDropdown3 = e => {
  setShow3(false);
}
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <span>Sky TechOPS• </span>
            Redefining Gaming
          </NavbarBrand>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Sky
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href={constants.twitterLink}
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fab fa-twitter" />
                <p className="d-lg-none d-xl-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href= {constants.facebookLink}
                rel="noopener noreferrer"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fab fa-facebook-square" />
                <p className="d-lg-none d-xl-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href={constants.instagramLink}
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fab fa-instagram" />
                <p className="d-lg-none d-xl-none">Instagram</p>
              </NavLink>
            </NavItem>
            
            <UncontrolledDropdown isOpen={show}
   onMouseEnter={showDropdown} 
   onMouseLeave={hideDropdown} nav>
              <DropdownToggle
                
                color="default"
                // data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()
                }
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                Products
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem tag={Link} to="/PlayerAccount">
                  <i className="tim-icons icon-app" />
                  Platform Account Manager
                </DropdownItem>
                <DropdownItem tag={Link} to="/Exchange">
                  <i className="tim-icons icon-planet" />
                 Exchange
                </DropdownItem>
                <DropdownItem tag={Link} to="/Casino">
                  <i className="tim-icons icon-molecule-40" />
                 Casino
                </DropdownItem>
                <DropdownItem tag={Link} to="/SportsBook">
                  <i className="tim-icons icon-paper" />
                 Sports Book
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown isOpen={show1}
   onMouseEnter={showDropdown1} 
   onMouseLeave={hideDropdown1} nav>
              <DropdownToggle
                
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()
                }
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
          Solutions
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem tag={Link} to="/Mobile">
                  <i className="tim-icons icon-mobile" />
                 Mobile
                </DropdownItem>
                <DropdownItem tag={Link} to="/Desktop">
                  <i className="tim-icons icon-laptop" />
                 Desktop
                </DropdownItem>
                <DropdownItem tag={Link} to="/Turnkey">
                  <i className="tim-icons icon-key-25" />
                 Turnkey
                </DropdownItem>
                <DropdownItem tag={Link} to="/B2BSupport">
                  <i className="tim-icons icon-single-02" />
                 B2B Support
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown isOpen={show2}
   onMouseEnter={showDropdown2} 
   onMouseLeave={hideDropdown2} nav>
              <DropdownToggle
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()
                }
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
          Company
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem tag={Link} to="/AboutUs">
                  <i className="tim-icons icon-bank" />
                 About us
                </DropdownItem>
                <DropdownItem tag={Link} to="/License">
                  <i className="tim-icons icon-check-2" />
               License
                </DropdownItem>
                <DropdownItem tag={Link} to="/Partners">
                  <i className="tim-icons icon-single-02" />
                 Partners
                </DropdownItem>
                <DropdownItem tag={Link} to="/Events">
                  <i className="tim-icons icon-satisfied" />
                 Events
                </DropdownItem>
                <DropdownItem tag={Link} to="/Management">
                  <i className="tim-icons icon-badge" />
                 Management
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                tag={Link} to="/contact-page"
                rel="noopener noreferrer"
                title="Some update around the industry"
              >
                  <i className="tim-icons icon-world" />
                News
                </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                tag={Link} to="/contact-page"
                rel="noopener noreferrer"
                title="Blogs !!"
              >
                  <i className="tim-icons icon-book-bookmark" />
                 Blogs
                </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                tag={Link} to="/contact-page"
                rel="noopener noreferrer"
                title="Want to contact us?"
              >
                  <i className="tim-icons icon-email-85" />
                 Contact Sky
                </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
