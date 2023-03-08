
import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { useState } from 'react';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
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

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

const carouselItems = [
  {
    src: require("assets/img/denys.jpg"),
    altText: "Slide 1",
    caption: "Big City Life, United States"
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States"
  },
  {
    src: require("assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption: "Stocks, United States"
  }
];

let ps = null;

export default function ContactPage() {
  const [tabs, setTabs] = React.useState(1);
  const form = useRef();
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
  const [inputFields, setInputFields] = useState([
    { user_name: '', user_email: '', contact_number: '', company: '', message: '' }
  ])
  const [isOpened, setIsOpened] = useState(false);
  const [exisCust, setexisCust] = useState(false);
  const [poCust, setpoCust] = useState(true);

  function toggle() {
    setIsOpened(wasOpened => !wasOpened);
  }
  const ContactFormSubmit = (e) => {
    e.preventDefault();
    // console.log(inputFields)
    emailjs.sendForm('service_mg319d8', 'template_ncss809', form.current, 'rQk4QXlz29UCXKZZy')
      .then((result) => {
          console.log(result.text);
          setpoCust(false)
    setIsOpened(true)
      }, (error) => {
          console.log(error.text);
      });
  };
  const existingCust = (e) => {
    setexisCust(false);
    setpoCust(false)
    setIsOpened(false)
  }
  const PotCustomer = (e) => {
    setexisCust(false);
    setpoCust(true)
    setIsOpened(false)
  }
  
  const BackBtn = (e) => {
    setexisCust(false);
    setpoCust(true)
    setIsOpened(false)
  }
  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
 }
  return (
    <>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
      <IndexNavbar />
      <div className="wrapper">
        <section className="section">
          <Container>
            <Row>
              <Col md="6">
                <Card className="card-plain">
                  <CardHeader>
                    <h1 className="profile-title text-left">Contact</h1>
                    <h5 className="text-on-back">SKY</h5>
                  </CardHeader>
                  <CardBody>
                  {isOpened && (
                    <h3>Your contact request has been recorded and a member of the team will get back to you shortly.</h3>
//        <div>
// I would appreciate it if you could let me know if you are an
// <Button
//                         className="btn-round col-md-12"
//                         color="primary"
//                         type="button"
//                         onClick={existingCust}
//                       >
//                         Exixting Customer
//                       </Button>
//                       <Button
//                         className="btn-round col-md-12"
//                         color="primary"
//                         type="button"
//                         onClick={PotCustomer}
//                       >
//                         Potential Customer
//                       </Button>
//        </div>
      )}
                  {!isOpened && exisCust && (  
                    <form ref={form} onSubmit={ContactFormSubmit}>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              
              <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Customer ID</label>
                            <Input placeholder="Mike" name='user_name' onChange={event => handleFormChange(index, event)} value={input.user_name} type="text" />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Email address</label>
                            <Input placeholder="mike@email.com" name='user_email' onChange={event => handleFormChange(index, event)} value={input.user_email} type="email" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Phone</label>
                            <Input placeholder="+12 1234567890" name='contact_number' onChange={event => handleFormChange(index, event)} value={input.contact_number} type="text" />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Company</label>
                            <Input placeholder="My Work Place" name='company' onChange={event => handleFormChange(index, event)} value={input.company} type="text" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>Message</label>
                            <Input placeholder="I work as a Procurement head and would like to colab" name='message' onChange={event => handleFormChange(index, event)} value={input.message} type="text" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button
                        className="btn-round float-right"
                        color="primary"
                        data-placement="right"
                        id="tooltip341148792"
                        type="button"
                        onClick={ContactFormSubmit}
                      >
                        Send text
                      </Button>
                      <Button
                      className="btn-round float-right"
                        color="primary"
                        data-placement="right"
                        id="tooltip341148793"
                        type="button"
                        onClick={BackBtn}
                      >
                        Back
                      </Button>
                      
                      <UncontrolledTooltip
                        delay={0}
                        placement="right"
                        target="tooltip341148792"
                      >
                        Can't wait for your message
                      </UncontrolledTooltip>
            </div>
          )
        })}
      </form> )}
      {!isOpened && poCust && (  
                    <form ref={form} onSubmit={ContactFormSubmit}>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              
              <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Your name</label>
                            <Input placeholder="Mike" name='user_name' onChange={event => handleFormChange(index, event)} value={input.user_name} type="text" />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Email address</label>
                            <Input placeholder="mike@email.com" name='user_email' onChange={event => handleFormChange(index, event)} value={input.user_email} type="email" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Phone</label>
                            <Input placeholder="+12 1234567890" name='contact_number' onChange={event => handleFormChange(index, event)} value={input.contact_number} type="text" />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Company</label>
                            <Input placeholder="My Work Place" name='company' onChange={event => handleFormChange(index, event)} value={input.company} type="text" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>Message</label>
                            <Input placeholder="I work as a Procurement head and would like to colab" name='message' onChange={event => handleFormChange(index, event)} value={input.message} type="text" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button
                        className="btn-round float-right"
                        color="primary"
                        data-placement="right"
                        id="tooltip341148792"
                        type="button"
                        onClick={ContactFormSubmit}
                      >
                        Send text
                      </Button>
                      {/* <Button
                      className="btn-round float-right"
                        color="primary"
                        data-placement="right"
                        id="tooltip341148793"
                        type="button"
                        onClick={BackBtn}
                      >
                        Back
                      </Button> */}
                      
                      <UncontrolledTooltip
                        delay={0}
                        placement="right"
                        target="tooltip341148792"
                      >
                        Can't wait for your message
                      </UncontrolledTooltip>
                      {/* <UncontrolledTooltip
                        delay={0}
                        placement="right"
                        target="tooltip341148793"
                      >
                        Let's Change my selection
                      </UncontrolledTooltip> */}
            </div>
          )
        })}
      </form> )}
                  </CardBody>
                </Card>
              </Col>
              <Col className="ml-auto" md="4">
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-square-pin" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Find us at the office</h4>
                    <p>
                    Peiraios, 30, 1st Floor, <br />Flat/Office 1 Strovolos,<br /> 2023, Nicosia,<br /> Cyprus
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-mobile" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Give us a ring</h4>
                    <p>
                      Skytech Admin <br />
                      +260 123 456 7890<br />
                      Mon - Fri, 8:00-22:00
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-email-85" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Drop us a Mail</h4>
                    <p>
                    <a href="mailto:subham@sugarbiz.co.uk">subham@sugarbiz.co.uk</a>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}
