import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { useState } from 'react';
import Member1 from 'assets/img/Member1.jpeg';
import Member2 from 'assets/img/Member2.jpeg'
import Member3 from 'assets/img/Member3.png';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel
} from "reactstrap";
import * as constants from "assets/constant";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";


let ps = null;

export default function Management() {
  const [tabs, setTabs] = React.useState(1);
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
      <div id='model2'>
        <div className="divider"></div>
        <div className="members">
          <div className="member">
            <img width={400} height={400} src={Member1}/>
            <div className="description">
                <h1>Ahmed ALAMI</h1>
                <h2>CEO</h2>
                <div className="social-media">
                   <Button className="btn-icon btn-round" color="facebook" href={constants.facebookLink} id="tooltip982846143" target="_blank" >
                    <i className="fab fa-linkedin" />
                  </Button>
                </div>
            </div>
          </div>
          <div className="member">
            <div className="description">
                <h1>Omar Nadir</h1>
                <h2>CEO</h2>
                <div className="social-media">
                <Button className="btn-icon btn-round" color="facebook" href={constants.facebookLink} id="tooltip982846143" target="_blank" >
                    <i className="fab fa-linkedin" />
                  </Button>
                </div>
            </div>
            <img width={400} src={Member2}/>
          </div>
          <div className="member">
            <img width={400} src={Member3}/>
            <div className="description">
                <h1>Khaled MAHER</h1>
                <h2>CEO</h2>
                <div className="social-media">
                <Button className="btn-icon btn-round" color="facebook" href={constants.facebookLink} id="tooltip982846143" target="_blank" >
                    <i className="fab fa-linkedin" />
                  </Button>
                </div>
            </div>
          </div>
        </div>
    </div>
        <Footer />
      </div>
    </>
  );
}
