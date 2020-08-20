/* eslint-disable max-len */
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';

const BookVisit = () => {
  const history = useHistory();
  return (
    <>
      <h1>Book a Visit</h1>

      <p>
        Pellentesque malesuada ante a cursus fringilla. Integer dignissim ut tellus vehicula pulvinar. Etiam imperdiet luctus luctus. Nunc semper dolor vel quam tincidunt, in commodo quam posuere. Suspendisse quis dolor ut erat malesuada cursus non ut diam. In mollis augue dolor, sit amet vulputate ipsum pretium in. In hac habitasse platea dictumst. Donec sed sagittis erat, vitae congue leo. Nulla vehicula velit convallis nibh lacinia, nec dignissim turpis sodales. Sed sollicitudin, felis eu ullamcorper pharetra, urna velit volutpat libero, ut euismod felis mi ut sem. Donec congue eros nunc, eget pharetra nunc consequat eu. Nunc augue sapien, malesuada a dapibus sed, faucibus vel leo.
      </p>

      <p>
        Donec luctus pulvinar dictum. Morbi luctus dolor vitae ligula volutpat, egestas molestie dui dictum. Integer eu diam quis nunc blandit semper id sollicitudin ligula. Fusce tempus et libero varius finibus. Nulla viverra tincidunt ex, vel fermentum eros varius eu. Mauris accumsan non ipsum quis posuere. Maecenas sed imperdiet ligula. Vestibulum aliquam orci mi, ut scelerisque ipsum tristique a. Aenean eu massa elit. Quisque sit amet elementum mi. Praesent elementum quis justo a cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus imperdiet, arcu eu consectetur eleifend, est augue laoreet turpis, et blandit nibh risus eget ligula. Duis mauris odio, feugiat eget risus tempus, luctus luctus lorem.
      </p>
      <ButtonCont>
        <Button text="Look at Cats" onClick={() => history.push('/')} />
      </ButtonCont>
    </>
  );
};
const ButtonCont = styled.div`
  width: 400px;
`;
export default BookVisit;
