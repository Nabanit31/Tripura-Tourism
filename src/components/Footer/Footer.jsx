import React from 'react'
import "./footer.css";
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';


const quick__links =[
  {
    path:"/home",
    display:"Home",
  },
  {
    path:"/about",
    display:"About",
  },
  {
    path:"/tours",
    display:"Tours",
  },
];
const quick__links2 =[
  {
    path:"/gallery",
    display:"Gallery",
  },
  {
    path:"/login",
    display:"Login",
  },
  {
    path:"/register",
    display:"Register",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3'>
<h5 className="footer__link-title">Discover</h5>
<ListGroup className="footer__quick-lines">
  {quick__links.map((item,index)=> (<ListGroupItem key={index} className="ps-0 border-0">
    <Link to={item.path}>{item.display}</Link>
  </ListGroupItem>))}
</ListGroup>
          </Col>
          <Col lg='3'>
<h5 className="footer__link-title">Quicklinks</h5>
<ListGroup className="footer__quick-lines">
  {quick__links2.map((item,index)=> (<ListGroupItem key={index} className="ps-0 border-0">
    <Link to={item.path}>{item.display}</Link>
  </ListGroupItem>))}
</ListGroup>
          </Col>
          <Col lg='3'>
<h5 className="footer__link-title">Contact</h5>
<ListGroup className="footer__quick-lines">
  {quick__links2.map((item,index)=> (<ListGroupItem key={index} className="ps-0 border-0">
    <Link to={item.path}>{item.display}</Link>
  </ListGroupItem>))}
</ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer