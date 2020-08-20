import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../Nav';
import logo from '../../assets/logo.svg';

const AllCatHeader = styled.header`
  padding: 15px 0;
  background: #fff;
`;

const Header = () => (
  <AllCatHeader>
    <Container fluid>
      <Row>
        <Col>
          <Link to="/">
            <img src={logo} alt="allCats logo" />
          </Link>
        </Col>
        <Col lg={{ span: 4, offset: 2 }} sm="6">
          <Nav links={[
            {
              to: '/delivery',
              label: 'Cat Delivery',
            },
            {
              to: '/book-visit',
              label: 'Book a Visit',
            },
            {
              to: '/donate',
              label: 'Donate',
            },
          ]}
          />
        </Col>
      </Row>
    </Container>
  </AllCatHeader>
);

export default Header;
