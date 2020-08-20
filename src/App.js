import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Home from './views/Home';
import Delivery from './views/Delivery';
import BookVisit from './views/BookVisit';
import Donate from './views/Donate';

const Section = styled.section`
  padding: 40px 0;
`;

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Section>
          <Route exact path="/" component={Home} />
          <Route exact path="/delivery" component={Delivery} />
          <Route exact path="/book-visit" component={BookVisit} />
          <Route exact path="/donate" component={Donate} />
        </Section>
      </Container>
    </div>
  );
}

export default App;
