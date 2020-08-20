import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import Cat from './Cat';

const Cats = ({ data }) => (
  <>
    <Row>
      <Banner>
        <h1>Our Cats</h1>
      </Banner>
    </Row>
    <Row className="justify-content-between">
      {data && data.length > 1
        ? data.map((cat) => (
          <Cat key={cat.name} cat={cat} />
        ))
        : <p>No cats to display</p>}
    </Row>
  </>
);
const Banner = styled.section`
  margin-bottom: 20px;
`;

Cats.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Cats;
